export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  // const fallbackSrc = "/pictures/img-not-exists/img-not-exists.webp";
  const fallbackSrc = `../assets/images/no-image.webp`;

  // Jeśli src jest już ustawiony na fallbackSrc, nie rób nic
  if (e.currentTarget.src.endsWith(fallbackSrc)) {
    console.error("Fallback image also failed to load.");
    return;
  }

  // Przypisz fallbackSrc, jeśli aktualne źródło nie jest nim
  e.currentTarget.src = fallbackSrc;
};
