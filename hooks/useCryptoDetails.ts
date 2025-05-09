import { ICrypto } from '@/models/Crypto'
import { getCrypto } from '@/services/cryptoService'
import { useEffect, useState } from 'react'

export default function useCryptoDetail(id: string | string[] | undefined) {
  const [data, setData] = useState<ICrypto | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id || Array.isArray(id)) return

    const fetchDetail = async () => {
      try {
        const response = await getCrypto(id)
        setData(response)
      } catch (e) {
        console.error('Error fetching detail:', e)
      } finally {
        setLoading(false)
      }
    }

    fetchDetail()
  }, [id])

  return { data, loading }
}
