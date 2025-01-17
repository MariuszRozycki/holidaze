/**
 * Trims a text to a specified length and adds ellipsis if needed.
 * @param text - The text to be trimmed.
 * @param maxLength - The maximum length of the text before truncation.
 * @returns The trimmed text with ellipsis if it exceeds the maxLength.
 */

type TrimTextProps = {
  text: string;
  maxLength: number;
};

export const trimText = ({ text, maxLength }: TrimTextProps) => {
  if (!text) return "";
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};
