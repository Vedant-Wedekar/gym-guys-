import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus } from 'react-icons/fi'
import { SectionHeading } from './Reveal'
import { faqs } from '../data/content'

function Item({ item, open, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`overflow-hidden rounded-4xl border transition-colors ${
        open ? 'glass-card border-transparent' : 'border-ink/8 dark:border-white/10'
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        data-cursor="hover"
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-lg font-semibold">{item.q}</span>
        <motion.span
          animate={{ rotate: open ? 135 : 0 }}
          transition={{ duration: 0.3 }}
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${
            open ? 'bg-blush text-white' : 'bg-ink/5 text-ink dark:bg-white/10 dark:text-white'
          }`}
        >
          <FiPlus size={18} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="px-6 pb-6 text-ink-soft dark:text-white/60">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState('f1')

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Good to know"
          title="Questions, gently answered"
          lead="Everything you might wonder before bringing a Plushé companion home."
          accent="#9FEFCE"
        />
        <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-3">
          {faqs.map((f, i) => (
            <Item
              key={f.id}
              item={f}
              index={i}
              open={open === f.id}
              onToggle={() => setOpen(open === f.id ? null : f.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
