"use client"

import { useState } from "react"
import { Menu, X, Search } from "lucide-react"
import useActiveSection from "../../hooks/useActiveSection"

export default function CheatMobileSidebar({
    sections,
    onSearchClick, // <-- new prop
}: {
    sections: any
    onSearchClick: () => void
}) {
    const [open, setOpen] = useState(false)
    const active = useActiveSection(sections.map((s: any) => s.id))
    return (
        <div className="md:hidden">

            {/* Top mobile bar */}
            <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between backdrop-blur bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800 px-4 py-3">
                <button onClick={() => setOpen(true)}>
                    <Menu />
                </button>

                <span className="font-semibold">🐼 Pandas</span>

                <div className="flex items-center gap-2">
                    <button
                        onClick={onSearchClick}
                        className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                    >
                        <Search size={18} />
                    </button>
                </div>
            </div>

            {/* Drawer */}
            {open && (
                <div className="fixed inset-0 z-50 bg-black/60">
                    <div className="w-72 h-full bg-gray-900 p-6">
                        <button className="mb-6" onClick={() => setOpen(false)}>
                            <X />
                        </button>

                        <nav className="space-y-3">
                            {sections.map((s: any) => (
                                <a
                                    key={s.id}
                                    href={`#${s.id}`}
                                    onClick={() => setOpen(false)}
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
                    </div>
                </div>
            )}
        </div>
    )
}