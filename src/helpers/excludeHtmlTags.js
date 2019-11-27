export default function excludeHtmlTags(content) {
    return content.replace(/<[^>]*>/g,'')
};
