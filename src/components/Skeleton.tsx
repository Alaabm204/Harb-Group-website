/**
 * A reusable loading skeleton. Renders a gray animated block that
 * matches the existing `.skeleton` pulse animation defined in index.css.
 */
export default function Skeleton({
  className = "",
  count = 1,
}: {
  className?: string
  count?: number
}) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`skeleton rounded bg-[#e2e8f0] ${className}`}
        />
      ))}
    </>
  )
}