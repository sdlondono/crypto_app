import { useEffect, useState } from 'react'

/**
 * Returns a debounced version of a value.
 * @param value The input value to debounce.
 * @param delay Delay in milliseconds (default: 400ms).
 */

export default function useDebounce<T>(value: T, delay: number = 400): T {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}
