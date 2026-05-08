import Image from 'next/image'

/** Site mark (uses `/favicon.png` in `public/`) for editorial headers. */
export function MastheadMark({ className = 'h-12 w-12 sm:h-14 sm:w-14' }: { className?: string }) {
  return (
    <Image
      src="/favicon.png"
      width={64}
      height={64}
      className={className}
      alt=""
      unoptimized
      priority
    />
  )
}
