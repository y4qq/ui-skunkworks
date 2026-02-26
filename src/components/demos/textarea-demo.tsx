import { Example } from "@/components/example"
import { Textarea } from "@/components/ui/textarea"

export default function TextareaDemo() {
  return (
    <>
      <Example title="Default">
        <Textarea placeholder="Type your message here." className="max-w-sm" />
      </Example>
      <Example title="Disabled">
        <Textarea placeholder="Disabled" disabled className="max-w-sm" />
      </Example>
    </>
  )
}
