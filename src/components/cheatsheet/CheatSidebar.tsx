import { Github, Search } from "lucide-react"
import useActiveSection from "../../hooks/useActiveSection"

export default function CheatSidebar({
    sections,
    onSearchClick, // <-- new prop
}: {
    sections: any
    onSearchClick: () => void
}) {
    const active = useActiveSection(sections.map((s: any) => s.id))

    return (
        <aside className="w-72 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 flex flex-col">

            {/* header */}
            <div className="flex items-center justify-between mb-8 gap-2">
                <h1 className="text-lg font-bold">🐼 Pandas</h1>

                <div className="flex items-center gap-2">
                    <button
                        onClick={onSearchClick}
                        className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                        title="Search (Cmd/Ctrl + K)"
                    >
                        <Search size={18} />
                    </button>
                </div>
            </div>

            {/* navigation */}
            <nav className="space-y-2 flex-1">
                {sections.map((s: any) => (
                    <a
                        key={s.id}
                        href={`#${s.id}`}
                        className={`block px-3 py-2 rounded-lg text-sm transition
              ${active === s.id
                                ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                                : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white"
                            }`}
                    >
                        {s.title}
                    </a>
                ))}
            </nav>
            <div className="mt-6 text-xs text-gray-500">
                Press <kbd className="px-1 bg-gray-800 rounded">Ctrl</kbd> +
                <kbd className="px-1 bg-gray-800 rounded">K</kbd> to search
            </div>

            {/* footer */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                <a
                    href="https://github.com/amineshx"
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-black dark:hover:text-white"
                >
                    <Github size={16} />
                    amineshx
                </a>
            </div>
        </aside>
    )
}