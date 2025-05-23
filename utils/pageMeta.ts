import pageMeta from '@/public/meta/pageMeta.json'

let cached: any = null

export const pageMetaMap = async (): Promise<any> => {
  if (!cached) {
    cached = pageMeta
  }
  return cached
}
