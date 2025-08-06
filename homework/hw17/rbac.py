from functools import wraps
from typing import List, Optional

from fastapi import Depends, HTTPException, Request

# 模拟数据库 - 实际项目中应替换为真实数据库查询
user_roles = {
    "admin_user": ["admin"],
    "editor_user": ["editor"],
    "viewer_user": ["viewer"],
}

role_permissions = {
    "admin": ["create", "read", "update", "delete"],
    "editor": ["read", "update"],
    "viewer": ["read"],
}


# 模拟获取当前用户 - 实际项目中应从认证令牌中解析
async def get_current_user(request: Request) -> Optional[str]:
    # 从查询参数获取用户ID，实际应用中应从请求头或Cookie获取
    return request.query_params.get("user_id")


# 权限检查依赖项
async def check_permissions(
    required_permissions: List[str],
    request: Request,
    current_user: str = Depends(get_current_user),
):
    if not current_user:
        raise HTTPException(status_code=401, detail="未认证的用户")

    # 获取用户角色
    roles = user_roles.get(current_user, [])
    if not roles:
        raise HTTPException(status_code=403, detail="用户没有分配角色")

    # 收集用户拥有的所有权限
    user_permissions = set()
    for role in roles:
        user_permissions.update(role_permissions.get(role, []))

    # 检查是否拥有所有必要权限
    for permission in required_permissions:
        if permission not in user_permissions:
            raise HTTPException(status_code=403, detail=f"缺少必要权限: {permission}")


# RBAC权限装饰器
def requires_permissions(*required_permissions: str):
    def decorator(func):
        @wraps(func)
        async def wrapper(request: Request, *args, **kwargs):
            # 执行权限检查
            await check_permissions(list(required_permissions), request)
            # 执行原函数
            return await func(request, *args, **kwargs)

        return wrapper

    return decorator
