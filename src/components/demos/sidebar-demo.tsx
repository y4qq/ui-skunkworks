import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import {
  HomeIcon,
  InboxIcon,
  CalendarIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon,
  FileTextIcon,
  ChevronDownIcon,
} from "lucide-react"
import { useState } from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const mainNav = [
  { icon: HomeIcon, label: "Home" },
  { icon: InboxIcon, label: "Inbox", badge: "12" },
  { icon: CalendarIcon, label: "Calendar" },
  { icon: SearchIcon, label: "Search" },
]

const projectItems = [
  { label: "Design System" },
  { label: "Marketing Site" },
  { label: "Mobile App" },
]

export default function SidebarDemo() {
  const [active, setActive] = useState("Home")

  return (
    <div className="flex flex-col gap-8">
      <div className="border rounded-lg overflow-hidden h-[500px]">
        <SidebarProvider
          style={{ "--sidebar-width": "16rem" } as React.CSSProperties}
          className="min-h-0 h-full"
        >
          <Sidebar collapsible="none" className="border-r">
            <SidebarHeader className="border-b px-4 py-3">
              <span className="text-sm font-semibold">Acme Inc</span>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {mainNav.map((item) => (
                      <SidebarMenuItem key={item.label}>
                        <SidebarMenuButton
                          isActive={active === item.label}
                          onClick={() => setActive(item.label)}
                        >
                          <item.icon />
                          <span>{item.label}</span>
                        </SidebarMenuButton>
                        {item.badge && (
                          <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                        )}
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <SidebarGroup>
                <Collapsible defaultOpen>
                  <SidebarGroupLabel>
                    <CollapsibleTrigger className="flex w-full items-center gap-1">
                      Projects
                      <ChevronDownIcon className="ml-auto h-4 w-4 transition-transform group-data-[state=closed]:-rotate-90" />
                    </CollapsibleTrigger>
                  </SidebarGroupLabel>
                  <CollapsibleContent>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton>
                            <FileTextIcon />
                            <span>All Projects</span>
                          </SidebarMenuButton>
                          <SidebarMenuSub>
                            {projectItems.map((item) => (
                              <SidebarMenuSubItem key={item.label}>
                                <SidebarMenuSubButton
                                  isActive={active === item.label}
                                  onClick={() => setActive(item.label)}
                                >
                                  <span>{item.label}</span>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="border-t">
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <UsersIcon />
                    <span>Team</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <SettingsIcon />
                    <span>Settings</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
          </Sidebar>
          <main className="flex-1 p-6">
            <h3 className="text-lg font-semibold">{active}</h3>
            <p className="text-muted-foreground mt-1 text-sm">
              Content for the {active} section.
            </p>
          </main>
        </SidebarProvider>
      </div>
    </div>
  )
}
