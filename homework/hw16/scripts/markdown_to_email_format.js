function markdownToEmailFormat(markdown_content) {
    // 处理代码块
    markdown_content = markdown_content.replace(/```([\s\S]*?)```/g, '<pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow: auto;">$1</pre>');

    // 处理行内代码
    markdown_content = markdown_content.replace(/`([^`]+)`/g, '<code style="background-color: #f5f5f5; padding: 2px 4px; border-radius: 3px; font-family: monospace;">$1</code>');

    // 处理粗体 **text** 或 __text__
    markdown_content = markdown_content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    markdown_content = markdown_content.replace(/__(.*?)__/g, '<strong>$1</strong>');

    // 处理斜体 *text* 或 _text_
    markdown_content = markdown_content.replace(/(?<!\*)\*(?!\*)(.*?)\*(?!\*)/g, '<em>$1</em>');
    markdown_content = markdown_content.replace(/(?<!_)_(?!_)(.*?)_(?!_)/g, '<em>$1</em>');

    // 处理删除线 ~~text~~
    markdown_content = markdown_content.replace(/~~(.*?)~~/g, '<del>$1</del>');

    // 处理链接 [text](url)
    markdown_content = markdown_content.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color: #0066cc; text-decoration: none;">$1</a>');

    // 处理图片 ![alt](url)
    markdown_content = markdown_content.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" style="max-width: 100%; height: auto;">');

    // 处理无序列表项（简单处理）
    markdown_content = markdown_content.replace(/^\s*[*\-+]\s+(.*)$/gm, '<li>$1</li>');
    markdown_content = markdown_content.replace(/(<li>.*<\/li>)/gs, '<ul style="margin: 10px 0; padding-left: 20px;">$1</ul>');

    // 处理有序列表项（简单处理）
    markdown_content = markdown_content.replace(/^\s*\d+\.\s+(.*)$/gm, '<li>$1</li>');
    markdown_content = markdown_content.replace(/(<li>.*<\/li>)/gs, '<ol style="margin: 10px 0; padding-left: 20px;">$1</ol>');

    // 处理标题
    markdown_content = markdown_content.replace(/^###### (.*$)/gm, '<h6 style="margin: 20px 0 10px; font-size: 14px; font-weight: bold;">$1</h6>');
    markdown_content = markdown_content.replace(/^##### (.*$)/gm, '<h5 style="margin: 20px 0 10px; font-size: 16px; font-weight: bold;">$1</h5>');
    markdown_content = markdown_content.replace(/^#### (.*$)/gm, '<h4 style="margin: 20px 0 10px; font-size: 18px; font-weight: bold;">$1</h4>');
    markdown_content = markdown_content.replace(/^### (.*$)/gm, '<h3 style="margin: 20px 0 10px; font-size: 20px; font-weight: bold;">$1</h3>');
    markdown_content = markdown_content.replace(/^## (.*$)/gm, '<h2 style="margin: 25px 0 15px; font-size: 24px; font-weight: bold;">$1</h2>');
    markdown_content = markdown_content.replace(/^# (.*$)/gm, '<h1 style="margin: 30px 0 20px; font-size: 28px; font-weight: bold;">$1</h1>');

    // 处理水平线
    markdown_content = markdown_content.replace(/^---$/gm, '<hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">');

    // 处理段落（需要在最后处理）
    // 先将多个换行转换为段落分隔符
    markdown_content = markdown_content.replace(/\n{2,}/g, '</p><p style="margin: 10px 0; line-height: 1.5;">');
    // 处理单个换行
    markdown_content = markdown_content.replace(/\n/g, '<br>');
    // 包裹段落
    markdown_content = '<p style="margin: 10px 0; line-height: 1.5;">' + markdown_content + '</p>';

    // 清理可能的空段落标签
    markdown_content = markdown_content.replace(/<p[^>]*><\/p>/g, '');

    // 添加基本的邮件友好样式
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: Arial, sans-serif; font-size: 16px; color: #333; line-height: 1.5;">
    ${markdown_content}
</body>
</html>`;

    return emailHtml;
}