import { Example } from "@/components/example"
import { Kbd } from "@/components/ui/kbd"

export default function KbdDemo() {
  return (
    <>
      <Example title="Default" className="flex-row flex-wrap items-center">
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </Example>
      <Example title="In context">
        <p className="text-muted-foreground text-sm">
          Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to open the command palette.
        </p>
      </Example>
    </>
  )
}
