export function applyKeypadInput(
  current: string,
  key: string,
  maxLength?: number,
): string {
  if (key === '⌫') {
    return current.slice(0, -1)
  }
  if (key === '+*#') {
    return current
  }
  if (maxLength !== undefined && current.length >= maxLength) {
    return current
  }
  return current + key
}
