import { ICrypto } from '@/models/Crypto'
import { getCryptos } from '@/services/cryptoService'
import { useEffect, useState } from 'react'

export default function useCryptos() {
  const [data, setData] = useState<ICrypto[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await getCryptos()
        setData(response)
      } catch (err) {
        console.error('Error fetching cryptos:', err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchCryptos()
  }, [])

  return { data, loading, error }
}
