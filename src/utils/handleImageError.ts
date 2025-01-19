export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const fallbackSrc = `https://raw.githubusercontent.com/MariuszRozycki/holidaze/refs/heads/master/src/assets/images/no-image.webp`;

  if (e.currentTarget.src.endsWith(fallbackSrc)) {
    console.error("Fallback image also failed to load.");
    return;
  }
  e.currentTarget.src = fallbackSrc;
};
