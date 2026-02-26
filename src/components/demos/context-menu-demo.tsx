import { Example } from "@/components/example"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export default function ContextMenuDemo() {
  return (
    <>
      <Example title="Right-click area">
        <ContextMenu>
          <ContextMenuTrigger className="border-border text-muted-foreground flex h-32 w-full max-w-xs items-center justify-center rounded-md border border-dashed text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent className="w-48">
            <ContextMenuItem>
              Back
              <ContextMenuShortcut>⌘[</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              Forward
              <ContextMenuShortcut>⌘]</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              Reload
              <ContextMenuShortcut>⌘R</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>
              Save As...
              <ContextMenuShortcut>⌘S</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>Print...</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </Example>
    </>
  )
}
