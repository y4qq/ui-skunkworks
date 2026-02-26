import { Example } from "@/components/example"
import { Input } from "@/components/ui/input"

export default function InputDemo() {
  return (
    <>
      <Example title="Default">
        <Input type="email" placeholder="Email" className="max-w-sm" />
      </Example>
      <Example title="Disabled">
        <Input type="email" placeholder="Email" disabled className="max-w-sm" />
      </Example>
    </>
  )
}
