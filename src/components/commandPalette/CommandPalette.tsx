import { useState, useEffect, useRef } from "react"
import { pandasCheatsheet } from "../../data/pandasCheatsheet"

export default function CommandPalette({
  open,
  setOpen
}: {
  open: boolean
  setOpen: (v: boolean) => void
}) {

  const [query, setQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const commands = pandasCheatsheet.flatMap((s) => s.items)

  const filtered = commands.filter((c) =>
    (c.title + c.description + c.code)
      .toLowerCase()
      .includes(query.toLowerCase())
  )

  // focus input when opening
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  // close with ESC
  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }

    window.addEventListener("keydown", handle)
    return () => window.removeEventListener("keydown", handle)
  }, [setOpen])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-9999 flex items-start justify-center bg-black/60 pt-32"
      onClick={() => setOpen(false)}
    >

      {/* Panel */}
      <div
        className="w-150px max-w-[90%] rounded-xl border border-gray-700 bg-gray-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Input */}
        <input
          ref={inputRef}
          placeholder="Search pandas command..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border-b border-gray-800 bg-transparent p-4 outline-none"
        />

        {/* Results */}
        <div className="max-h-100 overflow-y-auto">

          {filtered.length === 0 && (
            <div className="p-4 text-gray-400">
              No results
            </div>
          )}

          {filtered.map((cmd) => (
            <a
              key={cmd.id}
              href={`#${cmd.id}`}
              onClick={() => setOpen(false)}
              className="block p-3 hover:bg-gray-800 transition"
            >
              <div className="font-medium">{cmd.title}</div>
              <div className="text-xs text-gray-400">
                {cmd.description}
              </div>
            </a>
          ))}

        </div>

      </div>

    </div>
  )
}