export const handleError = (error: unknown, setError?: (message: string) => void) => {
  const errorMessage = error instanceof Error ? error.message : "Unknown error";
  if (setError) {
    setError(errorMessage);
  }
  console.error("Error occurred:", errorMessage);
};
