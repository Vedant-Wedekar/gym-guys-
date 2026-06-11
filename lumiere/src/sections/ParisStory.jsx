import { STORY, IMAGES } from '../data/content'
import { Eyebrow, FadeUp, ParallaxImage, TextMask } from '../components/ui/motion'

export default function ParisStory() {
  return (
    <section id="story" className="wash-royal relative overflow-hidden pb-20 pt-20 md:pb-28 md:pt-28">
      {/* ghost year */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-6 right-0 select-none font-display text-[34vw] leading-none text-royal-deep opacity-4 md:text-[22vw]"
      >
        {STORY.year}
      </span>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Eyebrow className="text-royal-deep">Nº 04 — Notre Histoire</Eyebrow>

        <h2 className="mt-5 max-w-4xl font-display display-tight text-4xl sm:text-5xl md:text-6xl">
          <TextMask lines={['A love letter to', 'Paris, written in']} />
          <span className="block overflow-hidden">
            <span className="italic grad-text-royal">butter and espresso.</span>
          </span>
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* overlapping images */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <FadeUp>
              <ParallaxImage
                src={IMAGES.parisStreet}
                alt="The Louvre at blue hour"
                className="grain relative aspect-[4/5] w-4/5 rounded-[2rem] shadow-2xl shadow-royal-deep/15"
                strength={10}
              />
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="absolute -bottom-10 right-0 w-3/5 overflow-hidden rounded-[2rem] border-4 border-ivory shadow-2xl shadow-royal-deep/15">
                <img
                  src={IMAGES.cafeInterior}
                  alt="Inside LUMIÈRE"
                  loading="lazy"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>
            </FadeUp>
          </div>

          {/* narrative */}
          <div className="pt-6 lg:pt-2">
            {STORY.paragraphs.map((p, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <p className="mb-6 leading-relaxed text-stone md:text-lg">{p}</p>
              </FadeUp>
            ))}
            <FadeUp delay={0.35}>
              <blockquote className="mt-8 border-l-2 border-champagne pl-6">
                <p className="font-display text-2xl italic leading-snug text-royal-deep md:text-3xl">
                  “{STORY.pull}”
                </p>
                <cite className="mt-3 block text-xs uppercase tracking-widest2 not-italic text-stone">
                  {STORY.pullAuthor}
                </cite>
              </blockquote>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}
