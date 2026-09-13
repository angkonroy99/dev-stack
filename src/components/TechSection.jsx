import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import TechnologyCard from './TechnologyCard'

function TechSection() {
  const [technologies, setTechnologies] = useState([])
  const [stack, setStack] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(new URL('../data/technologies.json', import.meta.url))
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
        toast.error('Failed to load technologies.')
      })
  }, [])

  function addToStack(technology) {
    const alreadyAdded = stack.some((item) => item.id === technology.id)

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`)
      return
    }

    setStack([...stack, technology])
    toast.success(`${technology.name} added to your stack!`)
  }

  function removeFromStack(id) {
    const technology = stack.find((item) => item.id === id)

    const updatedStack = stack.filter((item) => item.id !== id)

    setStack(updatedStack)
    toast.info(`${technology.name} removed from your stack!`)
  }

  function removeAll() {
    if (stack.length === 0) {
      return
    }

    setStack([])
    toast.info('All technologies removed from your stack!')
  }

  return (
    <section
      id="technologies"
      className="mx-auto w-full max-w-[1280px] px-4 pb-[112px] md:px-8"
    >
      {/* Section Heading */}
      <div className="mb-10">
        <h2 className="text-[30px] font-extrabold leading-[1.1] tracking-[-0.75px] text-slate-900 md:text-[36px] md:tracking-[-0.9px]">
          Explore the{' '}
          <span className="bg-gradient-to-r from-[#ec4899] to-[#8b5cf6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500 md:text-base">
          Explore modern technologies and choose the tools you need for your
          development stack.
        </p>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="py-10 text-center">
          <p className="text-sm text-slate-500">
            Loading technologies...
          </p>
        </div>
      ) : (
        /* Main Content */
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[904px_280px]">
          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                onAdd={addToStack}
                isAdded={stack.some((item) => item.id === technology.id)}
              />
            ))}
          </div>

          {/* Your Stack */}
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5">
            {/* Stack Heading */}
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Your Stack
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                {stack.length}{' '}
                {stack.length === 1
                  ? 'Technology Selected'
                  : 'Technologies Selected'}
              </p>
            </div>

            {/* Empty State */}
            {stack.length === 0 ? (
              <div className="mt-4 rounded-xl bg-slate-50 px-4 py-5 text-center">
                <p className="text-sm leading-6 text-slate-500">
                  No technologies added yet.
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Add technologies from the list to build your stack.
                </p>
              </div>
            ) : (
              <div className="mt-4">
                {/* Stack Items */}
                <div className="space-y-3">
                  {stack.map((technology) => (
                    <div
                      key={technology.id}
                      className="flex items-center gap-3 rounded-xl border border-slate-100 p-3"
                    >
                      <img
                        src={technology.icon}
                        alt={technology.name}
                        className="h-8 w-8 object-contain"
                      />

                      <span className="flex-1 text-sm font-semibold text-slate-700">
                        {technology.name}
                      </span>

                      <button
                        onClick={() => removeFromStack(technology.id)}
                        aria-label={`Remove ${technology.name}`}
                        className="flex h-7 w-7 items-center justify-center rounded-full text-lg text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>

                {/* Remove All */}
                <button
                  onClick={removeAll}
                  className="mt-4 w-full rounded-lg border border-red-200 bg-red-50 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-100"
                >
                  Remove All
                </button>
              </div>
            )}
          </aside>
        </div>
      )}
    </section>
  )
}

export default TechSection