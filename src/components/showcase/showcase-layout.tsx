import { useCallback, useEffect, useState } from "react"
import { ShowcaseSidebar } from "./showcase-sidebar"
import { ShowcaseContent } from "./showcase-content"
import { registry } from "./component-registry"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/sonner"

function getInitialId() {
  const hash = window.location.hash.slice(1)
  if (hash && registry.some((c) => c.id === hash)) return hash
  return registry[0]?.id ?? ""
}

export function ShowcaseLayout() {
  const [activeId, setActiveId] = useState(getInitialId)

  const navigate = useCallback((id: string) => {
    setActiveId(id)
    history.replaceState(null, "", `#${id}`)
  }, [])

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash && registry.some((c) => c.id === hash)) {
        setActiveId(hash)
      } else {
        const fallback = registry[0]?.id ?? ""
        if (fallback) {
          setActiveId(fallback)
          history.replaceState(null, "", `#${fallback}`)
        }
      }
    }
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  return (
    <TooltipProvider>
      <div className="bg-background flex h-screen overflow-hidden">
        <ShowcaseSidebar activeId={activeId} onNavigate={navigate} />
        <ShowcaseContent activeId={activeId} />
      </div>
      <Toaster />
    </TooltipProvider>
  )
}
