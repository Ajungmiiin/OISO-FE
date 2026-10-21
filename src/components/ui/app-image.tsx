import React, { ImgHTMLAttributes } from 'react'
import ImageFallback from '../image-fallback'

interface AppImageProps extends Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'src'
> {
  src: string | null
  priority?: boolean
  fallbackImage?: React.ReactNode
}

const OPT_HOSTS = ['tong.visitkorea.or.kr', 'devin.aks.ac.kr']

function toOptimizedSrc(src: string, width = 640, quality = 75) {
  let url: URL
  try {
    url = new URL(src)
  } catch {
    return src
  }

  if (!OPT_HOSTS.includes(url.hostname)) return src

  const host = window.location.hostname
  if (host === 'localhost' || host.startsWith('127.')) return src

  return `/_vercel/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`
}

function AppImage({
  src,
  priority = false,
  fallbackImage,
  alt,
  className,
}: AppImageProps) {
  if (!src) return <>{fallbackImage ? fallbackImage : <ImageFallback />}</>

  return (
    <img
      src={toOptimizedSrc(src)}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      className={className}
    />
  )
}

export default AppImage
