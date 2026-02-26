import { Example } from "@/components/example"
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

export default function PopoverDemo() {
  return (
    <>
      <Example title="Default">
        <Popover>
          <PopoverTrigger render={<Button variant="outline" />}>
            Open Popover
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>Dimensions</PopoverTitle>
              <PopoverDescription>Set the dimensions for the layer.</PopoverDescription>
            </PopoverHeader>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <span className="text-sm">Width</span>
                <span className="text-muted-foreground col-span-2 text-sm">100%</span>
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <span className="text-sm">Height</span>
                <span className="text-muted-foreground col-span-2 text-sm">25px</span>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </Example>
    </>
  )
}
