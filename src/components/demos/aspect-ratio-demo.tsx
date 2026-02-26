import { Example } from "@/components/example"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function AspectRatioDemo() {
  return (
    <>
      <Example title="16:9">
        <div className="w-full max-w-md overflow-hidden rounded-lg">
          <AspectRatio ratio={16 / 9}>
            <div className="bg-muted flex h-full w-full items-center justify-center rounded-lg">
              <span className="text-muted-foreground text-sm">16:9</span>
            </div>
          </AspectRatio>
        </div>
      </Example>
      <Example title="4:3">
        <div className="w-full max-w-md overflow-hidden rounded-lg">
          <AspectRatio ratio={4 / 3}>
            <div className="bg-muted flex h-full w-full items-center justify-center rounded-lg">
              <span className="text-muted-foreground text-sm">4:3</span>
            </div>
          </AspectRatio>
        </div>
      </Example>
    </>
  )
}
