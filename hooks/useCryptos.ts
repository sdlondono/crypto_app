import { ICrypto } from '@/models/Crypto'
import { getCryptos, LIMIT } from '@/services/cryptoService'
import { useCallback, useEffect, useState } from 'react'

export default function useCryptos() {
  const [data, setData] = useState<ICrypto[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [start, setStart] = useState(0)
  const [hasMore, setHasMore] = useState(true)

  const fetchCryptos = useCallback(async () => {
    if (!hasMore || loading) return

    try {
      setLoading(true)
      const response = await getCryptos(start)

      setData((prev) => {
        const existingIds = new Set(prev.map((c) => c.id))
        const uniqueNewCoins = response.filter((c) => !existingIds.has(c.id))
        return [...prev, ...uniqueNewCoins]
      })
      setStart((prev) => prev + LIMIT)

      if (response.length < LIMIT) {
        setHasMore(false)
      }
    } catch (error) {
      console.error(error)
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [hasMore, loading, start])

  useEffect(() => {
    fetchCryptos()
  }, [])

  return { data, loading, error, fetchMore: fetchCryptos, hasMore }
}
