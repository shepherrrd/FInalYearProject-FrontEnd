export const sleeps = (seconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}
