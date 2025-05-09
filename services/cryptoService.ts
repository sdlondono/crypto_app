import { ICrypto } from '@/models/Crypto'

export const LIMIT = 20

export const getCryptos = async (start: number): Promise<ICrypto[]> => {
  const res = await fetch(
    `https://api.coinlore.net/api/tickers/?start=${start}&limit=${LIMIT}`
  )
  return (await res.json()).data as ICrypto[]
}

export const getCrypto = async (id: string): Promise<ICrypto> => {
  const res = await fetch(`https://api.coinlore.net/api/ticker/?id=${id}`)
  return (await res.json())[0] as ICrypto
}
