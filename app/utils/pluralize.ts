export const pluralize = <T>(
  count: number,
  words: {
    [key in "one" | "few" | "many"]: T;
  },
) => {
  const base = Math.abs(count) % 100;
  const digit = base % 10;

  if (base > 10 && base < 20) {
    return words.many;
  }

  if (digit > 1 && digit < 5) {
    return words.few;
  }

  if (digit === 1) {
    return words.one;
  }

  return words.many;
};
