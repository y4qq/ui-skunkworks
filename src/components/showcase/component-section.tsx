import { Suspense } from "react"
import { Spinner } from "@/components/ui/spinner"
import type { ComponentEntry } from "./component-registry"

export function ComponentSection({ entry }: { entry: ComponentEntry }) {
  const Component = entry.component
  return (
    <section id={entry.id} className="scroll-mt-8">
      <div className="mb-4">
        <h2 className="text-foreground text-xl font-semibold">{entry.name}</h2>
        <p className="text-muted-foreground text-sm">{entry.description}</p>
      </div>
      <Suspense
        fallback={
          <div className="flex h-32 items-center justify-center">
            <Spinner />
          </div>
        }
      >
        <Component />
      </Suspense>
    </section>
  )
}
