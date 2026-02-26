import { useState } from "react"
import {
  categories,
  getComponentsByCategory,
} from "./component-registry"
import { SearchIcon, SunIcon, MoonIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar"

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
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2">
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
        <div className="relative">
          <SearchIcon className="text-muted-foreground pointer-events-none absolute left-2.5 top-2 h-4 w-4" />
          <SidebarInput
            placeholder="Search components..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-8"
          />
        </div>
      </SidebarHeader>
      <SidebarContent>
        {categories.map((category) => {
          const items = getComponentsByCategory(category).filter((c) =>
            c.name.toLowerCase().includes(search.toLowerCase())
          )
          if (items.length === 0) return null
          return (
            <SidebarGroup key={category}>
              <SidebarGroupLabel>{category}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton
                        isActive={activeId === item.id}
                        onClick={() => onNavigate(item.id)}
                        tooltip={item.name}
                      >
                        <span>{item.name}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          )
        })}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
