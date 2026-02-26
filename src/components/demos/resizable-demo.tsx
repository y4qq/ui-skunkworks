import { Example } from "@/components/example"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function ResizableDemo() {
  return (
    <>
      <Example title="Horizontal">
        <ResizablePanelGroup className="max-w-md rounded-lg border">
          <ResizablePanel defaultSize={50}>
            <div className="flex h-[200px] items-center justify-center p-6">
              <span className="font-semibold">One</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-[200px] items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </Example>
    </>
  )
}
