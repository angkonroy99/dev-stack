function TechnologyCard({ technology, onAdd, isAdded }) {
  return (
    <div
      className={`w-full rounded-2xl border p-4 transition md:p-5 ${
        isAdded
          ? 'border-pink-300 bg-pink-50/30'
          : 'border-slate-200 bg-white'
      }`}
    >
      {/* Icon and Badge */}
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-7 w-7 object-contain"
          />
        </div>

        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-500">
          {technology.badge}
        </span>
      </div>

      {/* Technology Name */}
      <h3 className="mt-4 text-lg font-bold text-slate-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm leading-6 text-slate-500">
        {technology.description}
      </p>

      {/* Category */}
      <div className="mt-4">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {technology.category}
        </span>
      </div>

      {/* Difficulty and Rating */}
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-slate-500">
          {technology.difficulty}
        </span>

        <span className="flex items-center gap-1 text-sm text-slate-600">
          <span className="text-amber-500">★</span>
          {technology.rating}
        </span>
      </div>

      {/* Add Button */}
      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-5 flex h-10 w-full items-center justify-center rounded-lg border text-sm font-semibold transition ${
          isAdded
            ? 'cursor-not-allowed border-pink-200 bg-pink-50 text-pink-500'
            : 'cursor-pointer border-slate-900 bg-slate-900 text-white hover:bg-slate-800'
        }`}
      >
        {isAdded ? 'Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  )
}

export default TechnologyCard