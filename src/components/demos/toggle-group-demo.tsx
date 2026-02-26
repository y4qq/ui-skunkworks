import { Example } from "@/components/example"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { AlignLeftIcon, AlignCenterIcon, AlignRightIcon } from "lucide-react"

export default function ToggleGroupDemo() {
  return (
    <>
      <Example title="Default">
        <ToggleGroup>
          <ToggleGroupItem value="left" aria-label="Align left">
            <AlignLeftIcon className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">
            <AlignCenterIcon className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">
            <AlignRightIcon className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </Example>
      <Example title="Outline Variant">
        <ToggleGroup variant="outline">
          <ToggleGroupItem value="left" aria-label="Align left">
            <AlignLeftIcon className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">
            <AlignCenterIcon className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">
            <AlignRightIcon className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </Example>
    </>
  )
}
