import { Suspense } from "react"
import { registry } from "./component-registry"
import { Spinner } from "@/components/ui/spinner"

interface ShowcaseContentProps {
  activeId: string
}

export function ShowcaseContent({ activeId }: ShowcaseContentProps) {
  const entry = registry.find((c) => c.id === activeId)
  if (!entry) return null

  const Component = entry.component

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="mx-auto flex min-h-full max-w-5xl flex-col px-6 py-10 sm:px-10 lg:px-16">
        <div className="mb-6">
          <h2 className="text-foreground text-2xl font-semibold tracking-tight">
            {entry.name}
          </h2>
          <p className="text-muted-foreground mt-1 text-sm">
            {entry.description}
          </p>
        </div>
        <div className="flex-1">
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
      </div>
    </main>
  )
}
