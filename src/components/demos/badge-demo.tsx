import { Example } from "@/components/example"
import { Badge } from "@/components/ui/badge"

export default function BadgeDemo() {
  return (
    <>
      <Example title="Variants" className="flex-row flex-wrap">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </Example>
    </>
  )
}
