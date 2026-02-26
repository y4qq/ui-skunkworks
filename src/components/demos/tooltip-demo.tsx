import { Example } from "@/components/example"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

export default function TooltipDemo() {
  return (
    <>
      <Example title="Default">
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" />}>
            Hover me
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </Example>
    </>
  )
}
