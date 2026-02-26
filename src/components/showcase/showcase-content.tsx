import { Suspense } from "react"
import { registry } from "./component-registry"
import { Spinner } from "@/components/ui/spinner"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

interface ShowcaseContentProps {
  activeId: string
}

export function ShowcaseContent({ activeId }: ShowcaseContentProps) {
  const entry = registry.find((c) => c.id === activeId)
  if (!entry) return null

  const Component = entry.component

  return (
    <>
      <header className="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-10 flex h-12 shrink-0 items-center gap-2 border-b px-4 backdrop-blur">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <h2 className="text-foreground text-sm font-medium">
          {entry.name}
        </h2>
      </header>
      <main className="overflow-y-auto">
        <div className="mx-auto max-w-5xl px-6 py-10 sm:px-10 lg:px-16">
          <div className="mb-6">
            <h2 className="text-foreground text-2xl font-semibold tracking-tight">
              {entry.name}
            </h2>
            <p className="text-muted-foreground mt-1 text-sm">
              {entry.description}
            </p>
          </div>
          <Suspense
            fallback={
              <div className="flex h-48 items-center justify-center">
                <Spinner />
              </div>
            }
          >
            <Component key={entry.id} />
          </Suspense>
        </div>
      </main>
    </>
  )
}
