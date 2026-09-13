import banner from '../assets/banner-stack.png'

function Hero() {
  return (
    <section
      className="mx-auto flex min-h-[600.6px] w-full max-w-[1216px] flex-col items-center gap-[11.3px] px-5 pb-10 pt-[31.25px] text-center md:min-h-[420px] md:flex-row md:items-center md:justify-between md:gap-8 md:px-0 md:py-12 md:text-left"
      id="home"
    >
      <div className="w-full max-w-[350px] md:w-[696px] md:max-w-none">
        <h1 className="font-inter text-[30px] font-bold leading-[1.25] tracking-[-0.75px] text-slate-900 md:text-[60px] md:leading-none md:tracking-[-1.5px]">
          Build Your Ideal
          <br />
          <span className="bg-brand bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="mt-3 max-w-[350px] text-[14px] leading-[1.625] text-slate-500 md:mt-6 md:max-w-[600px] md:text-base md:leading-[1.5]">
          Discover the technologies you need to build modern,
          scalable, and powerful applications.
        </p>

        <div className="mt-4 flex items-center justify-center gap-3 md:mt-8 md:justify-start">
          <a
            href="#technologies"
            className="flex h-10 w-[168px] items-center justify-center rounded-lg bg-brand text-sm font-semibold text-white"
          >
            Explore Technologies
          </a>

          <a
            href="#about"
            className="flex h-[42px] w-[170px] items-center justify-center rounded-lg border border-slate-300 bg-white text-sm font-semibold text-slate-600"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex w-full items-center justify-center md:w-[488px]">
        <img
          src={banner}
          alt="Development Stack"
          className="h-auto w-[327px] max-w-full object-contain md:h-[350px] md:w-[350px]"
        />
      </div>
    </section>
  )
}

export default Hero