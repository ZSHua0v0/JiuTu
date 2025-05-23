let cached: any = null

export const getContactLinks = async (): Promise<any> => {
  if (cached) return cached

  try {
    const baseURL = process.server ? 'http://localhost:3000' : ''
    const res: Response = await fetch(`${baseURL}/meta/contactLinks.json`)
    cached = await res.json()
    return cached
  } catch (err) {
    console.error('[getContactLinks] Failed to fetch:', err)
    return {}
  }
}
