export function debounce<Args extends unknown[]>(
  fn: (...args: Args) => void,
  delayMs: number,
): (...args: Args) => void {
  let timeoutId: ReturnType<typeof setTimeout>

  return (...args: Args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delayMs)
  }
}
