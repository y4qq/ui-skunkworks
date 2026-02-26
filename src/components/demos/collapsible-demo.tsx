"use client"

import { useState } from "react"
import { Example } from "@/components/example"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { ChevronsUpDownIcon } from "lucide-react"

export default function CollapsibleDemo() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Example title="Default">
        <Collapsible open={open} onOpenChange={setOpen} className="w-full max-w-sm space-y-2">
          <div className="flex items-center justify-between rounded-md border px-4 py-2">
            <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
            <CollapsibleTrigger render={<Button variant="ghost" size="sm" />}>
              <ChevronsUpDownIcon className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border px-4 py-2 text-sm">@radix-ui/primitives</div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-2 text-sm">@radix-ui/colors</div>
            <div className="rounded-md border px-4 py-2 text-sm">@stitches/react</div>
          </CollapsibleContent>
        </Collapsible>
      </Example>
    </>
  )
}
