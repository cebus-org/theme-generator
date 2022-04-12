/**
 * Formats a given hex value
 */
export function formatHex(value: string) {
  value = value + '';

  if (value.length === 1) {
    return '0' + value;
  }

  return value;
}
