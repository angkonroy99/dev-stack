import logo from '../assets/logo-text.png'

function Footer() {
  return (
    <footer className="w-full bg-white pb-12 pt-8 md:pt-16">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-10">
          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="Dev Stack"
              className="h-9 w-[139px] object-contain"
            />

            <p className="mt-4 max-w-[280px] text-sm leading-6 text-slate-500">
              Build your ideal development stack with modern and powerful
              technologies.
            </p>

            <div className="mt-5 flex items-center gap-4">
              <a
                href="#github"
                className="text-sm text-slate-500 transition hover:text-slate-900"
              >
                GitHub
              </a>

              <a
                href="#linkedin"
                className="text-sm text-slate-500 transition hover:text-slate-900"
              >
                LinkedIn
              </a>

              <a
                href="#twitter"
                className="text-sm text-slate-500 transition hover:text-slate-900"
              >
                Twitter
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Product
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <a href="#technologies" className="text-sm text-slate-500 transition hover:text-slate-900">
                Technologies
              </a>
              <a href="#projects" className="text-sm text-slate-500 transition hover:text-slate-900">
                Projects
              </a>
              <a href="#features" className="text-sm text-slate-500 transition hover:text-slate-900">
                Features
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Company
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <a href="#about" className="text-sm text-slate-500 transition hover:text-slate-900">
                About
              </a>
              <a href="#contact" className="text-sm text-slate-500 transition hover:text-slate-900">
                Contact
              </a>
              <a href="#careers" className="text-sm text-slate-500 transition hover:text-slate-900">
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Legal
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <a href="#privacy" className="text-sm text-slate-500 transition hover:text-slate-900">
                Privacy Policy
              </a>
              <a href="#terms" className="text-sm text-slate-500 transition hover:text-slate-900">
                Terms of Service
              </a>
              <a href="#license" className="text-sm text-slate-500 transition hover:text-slate-900">
                License
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-slate-200 pt-8">
          <div className="flex flex-col gap-3 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Dev Stack. All rights reserved.</p>

            <div className="flex items-center gap-4">
              <a href="#privacy" className="transition hover:text-slate-900">
                Privacy
              </a>
              <a href="#terms" className="transition hover:text-slate-900">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer