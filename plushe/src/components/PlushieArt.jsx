/**
 * PlushieArt — the signature element of Plushé.
 * A single, recolorable kawaii plushie illustration rendered as inline SVG.
 * No external images means a tiny bundle, instant load, and perfect crispness.
 *
 * props:
 *   type    'bear' | 'bunny' | 'cat' | 'duck'
 *   main    body color (hex)
 *   accent  ear/tummy color (hex)
 *   cheek   cheek blush color (hex)
 */
export default function PlushieArt({
  type = 'bear',
  main = '#FFC4A3',
  accent = '#FFE4D4',
  cheek = '#FFB8D4',
  className = '',
}) {
  const eye = '#3a2f4a'
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-hidden="true"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <radialGradient id={`body-${main}`} cx="42%" cy="34%" r="75%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="55%" stopColor={main} stopOpacity="0" />
        </radialGradient>
      </defs>

      {type === 'bunny' && (
        <>
          <ellipse cx="78" cy="34" rx="14" ry="40" fill={main} />
          <ellipse cx="122" cy="34" rx="14" ry="40" fill={main} />
          <ellipse cx="78" cy="38" rx="7" ry="28" fill={accent} />
          <ellipse cx="122" cy="38" rx="7" ry="28" fill={accent} />
        </>
      )}

      {type === 'bear' && (
        <>
          <circle cx="66" cy="58" r="22" fill={main} />
          <circle cx="134" cy="58" r="22" fill={main} />
          <circle cx="66" cy="58" r="11" fill={accent} />
          <circle cx="134" cy="58" r="11" fill={accent} />
        </>
      )}

      {type === 'cat' && (
        <>
          <path d="M52 78 L48 40 L86 62 Z" fill={main} />
          <path d="M148 78 L152 40 L114 62 Z" fill={main} />
          <path d="M56 70 L55 50 L74 62 Z" fill={accent} />
          <path d="M144 70 L145 50 L126 62 Z" fill={accent} />
        </>
      )}

      {type === 'duck' && (
        <>
          <path d="M86 30 q14 -16 28 0 q-14 8 -28 0" fill={accent} />
        </>
      )}

      {/* body / head */}
      <circle cx="100" cy="108" r="64" fill={main} />
      <ellipse cx="100" cy="126" rx="40" ry="34" fill={accent} />
      <circle cx="100" cy="108" r="64" fill={`url(#body-${main})`} />

      {/* cheeks */}
      <circle cx="68" cy="116" r="11" fill={cheek} opacity="0.75" />
      <circle cx="132" cy="116" r="11" fill={cheek} opacity="0.75" />

      {/* eyes */}
      <circle cx="80" cy="102" r="6.5" fill={eye} />
      <circle cx="120" cy="102" r="6.5" fill={eye} />
      <circle cx="82" cy="100" r="2" fill="#fff" />
      <circle cx="122" cy="100" r="2" fill="#fff" />

      {/* nose + mouth */}
      {type === 'duck' ? (
        <path d="M88 116 q12 12 24 0 q-12 6 -24 0" fill="#FF9E6B" />
      ) : (
        <>
          <ellipse cx="100" cy="116" rx="5" ry="3.6" fill={eye} />
          <path
            d="M100 119 q-7 8 -14 3 M100 119 q7 8 14 3"
            stroke={eye}
            strokeWidth="2.4"
            fill="none"
            strokeLinecap="round"
          />
        </>
      )}

      {/* little feet */}
      <ellipse cx="74" cy="168" rx="16" ry="11" fill={main} />
      <ellipse cx="126" cy="168" rx="16" ry="11" fill={main} />
      <ellipse cx="74" cy="170" rx="8" ry="5" fill={cheek} opacity="0.7" />
      <ellipse cx="126" cy="170" rx="8" ry="5" fill={cheek} opacity="0.7" />
    </svg>
  )
}
