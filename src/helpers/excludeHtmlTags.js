/**
 * Should exclude html tags from content
 * @param {string} content
 * @returns {string}
 */
export default function excludeHtmlTags(content) {
    return content.replace(/<[^>]*>/g,'')
};
