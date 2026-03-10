import { pandasCheatsheet } from "../../data/pandasCheatsheet"
import CheatSidebar from "./CheatSidebar"
import CheatMobileSidebar from "./CheatMobileSidebar"
import CheatSection from "./CheatSection"

import useCommandPalette from "../../hooks/useCommandPalette"
import CommandPalette from "../commandPalette/CommandPalette"

export default function CheatSheetLayout() {
  const { open, setOpen } = useCommandPalette()

  const handleSearchClick = () => setOpen(true)

  return (
    <div className="flex h-screen bg-gray-950 text-gray-200">

      {/* Desktop sidebar */}
      <div className="hidden md:block">
        <CheatSidebar sections={pandasCheatsheet} onSearchClick={handleSearchClick} />
      </div>

      {/* Mobile navbar */}
      <CheatMobileSidebar sections={pandasCheatsheet} onSearchClick={handleSearchClick} />

      <main className="flex-1 overflow-y-auto p-6 md:p-10 mt-16 md:mt-7 scroll-smooth">
        {pandasCheatsheet.map(section => (
          <CheatSection key={section.id} section={section} />
        ))}
      </main>

      <CommandPalette open={open} setOpen={setOpen} />
    </div>
  )
}