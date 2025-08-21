/**
 * Extract a short excerpt of text from a given HTML string.
 *
 * This function first strips the HTML tags from the input string, then
 * trims the resulting text and splits it into an array of words. If the
 * length of the word array is less than or equal to the specified word
 * limit, the original text is returned. Otherwise, the function returns
 * a string composed of the first `wordLimit` words of the text, followed
 * by an ellipsis.
 *
 * @param {string} html The HTML string from which to extract the excerpt.
 * @param {number} [wordLimit=30] The maximum number of words to include in
 *   the excerpt.
 * @returns {string} The excerpt string.
 */
export const useCleanExcerpt = (html: string, wordLimit = 30): string => {
  if (!html) return "";

  // Strip HTML tags
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  const text = tmp.textContent || tmp.innerText || "";

  // Trim & split by word
  const words = text.trim().split(/\s+/);
  if (words.length <= wordLimit) return text;

  return words.slice(0, wordLimit).join(" ") + "...";
};
