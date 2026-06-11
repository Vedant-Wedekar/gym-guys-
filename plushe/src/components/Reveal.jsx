import { motion } from 'framer-motion'

const variants = {
  up: { hidden: { opacity: 0, y: 36 }, show: { opacity: 1, y: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.92 }, show: { opacity: 1, scale: 1 } },
  left: { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0 } },
}

/** Fade/slide/scale in once the element scrolls into view. */
export function Reveal({ children, variant = 'up', delay = 0, className = '', as = 'div' }) {
  const Tag = motion[as] || motion.div
  return (
    <Tag
      className={className}
      variants={variants[variant]}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Tag>
  )
}

/** Stagger container — children animate in sequence. */
export function Stagger({ children, className = '', stagger = 0.08 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  )
}

export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

/** Consistent eyebrow + title + lead intro for each section. */
export function SectionHeading({ eyebrow, title, lead, align = 'center', accent }) {
  const alignCls = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start'
  return (
    <div className={`flex max-w-2xl flex-col ${alignCls}`}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-6" style={{ background: accent || '#FFB8D4' }} />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-base text-ink-soft text-balance dark:text-white/60 sm:text-lg">{lead}</p>
        </Reveal>
      )}
    </div>
  )
}
