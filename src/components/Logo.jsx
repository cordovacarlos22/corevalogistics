/**
 * CorevaLogo — SVG wordmark matching the brand.
 * variant="dark"  → navy text, for light backgrounds (navbar)
 * variant="light" → white text, for dark backgrounds (footer, hero)
 *
 * To use actual PNG files instead, save them to /public/:
 *   public/logo-dark.png   (dark text on transparent)
 *   public/logo-light.png  (white text on transparent)
 * Then swap the SVG below for <img src="/logo-dark.png" ... />
 */
const CorevaLogo = ({ variant = 'dark', className = '' }) => {
  const isLight = variant === 'light'
  const wordmark = isLight ? '#ffffff' : '#121c2c'
  const sub = isLight ? '#93c5fd' : '#515f78'

  return (
    <svg
      viewBox="0 0 258 68"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Coreva Logistics"
      fill="none"
    >
      {/* COREVA wordmark */}
      <text
        x="1"
        y="38"
        fontFamily="Manrope, sans-serif"
        fontWeight="800"
        fontSize="40"
        letterSpacing="-1"
        fill={wordmark}
      >
        COREVA
      </text>

      {/* Blue swoosh arrow — key brand mark */}
      <path
        d="M 3,51 C 78,45 155,42 224,42 L 244,34 L 235,50 C 155,57 78,62 3,63 Z"
        fill="url(#swoosh-grad)"
      />
      <defs>
        <linearGradient id="swoosh-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>

      {/* LOGISTICS subtext */}
      <text
        x="10"
        y="66"
        fontFamily="Manrope, sans-serif"
        fontWeight="500"
        fontSize="10.5"
        letterSpacing="5.5"
        fill={sub}
      >
        LOGISTICS
      </text>
    </svg>
  )
}

export default CorevaLogo
