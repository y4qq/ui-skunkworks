import { Example } from "@/components/example"
import { Toggle } from "@/components/ui/toggle"
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

export default function ToggleDemo() {
  return (
    <>
      <Example title="Default" className="flex-row flex-wrap">
        <Toggle aria-label="Toggle bold">
          <BoldIcon className="h-4 w-4" />
        </Toggle>
        <Toggle aria-label="Toggle italic">
          <ItalicIcon className="h-4 w-4" />
        </Toggle>
        <Toggle aria-label="Toggle underline">
          <UnderlineIcon className="h-4 w-4" />
        </Toggle>
      </Example>
      <Example title="Outline" className="flex-row flex-wrap">
        <Toggle variant="outline" aria-label="Toggle bold">
          <BoldIcon className="h-4 w-4" />
        </Toggle>
        <Toggle variant="outline" aria-label="Toggle italic">
          <ItalicIcon className="h-4 w-4" />
        </Toggle>
      </Example>
    </>
  )
}
