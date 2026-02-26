import { useState } from "react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import {
  categories,
  getComponentsByCategory,
} from "./component-registry"
import { SearchIcon, SunIcon, MoonIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ShowcaseSidebarProps {
  activeId: string
  onNavigate: (id: string) => void
}

export function ShowcaseSidebar({ activeId, onNavigate }: ShowcaseSidebarProps) {
  const [search, setSearch] = useState("")
  const [dark, setDark] = useState(
    document.documentElement.classList.contains("dark")
  )

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark")
    setDark(!dark)
  }

  return (
    <aside className="bg-background border-border flex h-screen w-64 shrink-0 flex-col border-r">
      <div className="flex items-center gap-2 border-b px-4 py-3">
        <h1 className="text-foreground text-lg font-bold tracking-tight">
          shadcn/ui
        </h1>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto h-8 w-8"
          onClick={toggleDark}
        >
          {dark ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
        </Button>
      </div>
      <div className="px-3 py-2">
        <div className="relative">
          <SearchIcon className="text-muted-foreground pointer-events-none absolute left-2.5 top-2.5 h-4 w-4" />
          <Input
            placeholder="Search components..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-8 h-9 text-sm"
          />
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto px-3 pb-4">
        {categories.map((category) => {
          const items = getComponentsByCategory(category).filter((c) =>
            c.name.toLowerCase().includes(search.toLowerCase())
          )
          if (items.length === 0) return null
          return (
            <div key={category} className="mb-3">
              <div className="text-muted-foreground px-2 py-1.5 text-xs font-semibold uppercase tracking-wider">
                {category}
              </div>
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={cn(
                    "text-muted-foreground hover:text-foreground hover:bg-accent w-full text-left block rounded-md px-2 py-1 text-sm transition-colors",
                    activeId === item.id &&
                      "bg-accent text-foreground font-medium"
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>
          )
        })}
      </nav>
    </aside>
  )
}
