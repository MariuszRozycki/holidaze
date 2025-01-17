/**
 * Capitalizes the first letter of a given string.
 *
 * Trims the input string, then capitalizes the first letter while keeping the rest of the string unchanged.
 *
 * @param text - The input string whose first letter should be capitalized.
 * @returns The input string with the first letter capitalized, or an empty string if the input is invalid.
 *
 * @example
 * ```typescript
 * capitalizeFirstLetter({ text: "hello world" });
 * // Returns: "Hello world"
 *
 * capitalizeFirstLetter({ text: " hello world" });
 * // Returns: "Hello world"
 *
 * capitalizeFirstLetter({ text: "" });
 * // Returns: ""
 *
 * capitalizeFirstLetter({ text: "123abc" });
 * // Returns: "123abc"
 * ```
 */

type CapitalizeFirstLetterProps = {
  text: string;
};

export const capitalizeFirstLetter = ({ text }: CapitalizeFirstLetterProps) => {
  if (!text || typeof text !== "string") return "";
  const trimmedText = text.trim();
  return trimmedText.charAt(0).toUpperCase() + trimmedText.slice(1);
};
