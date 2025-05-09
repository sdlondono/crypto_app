import { ICrypto } from '@/models/Crypto'

export const getCryptos = async (): Promise<ICrypto[]> => {
  const res = await fetch('https://api.coinlore.net/api/tickers/')
  return (await res.json()).data as ICrypto[]
}

export const getCrypto = async (id: string): Promise<ICrypto> => {
  const res = await fetch(`https://api.coinlore.net/api/ticker/?id=${id}`)
  return (await res.json())[0] as ICrypto
}
