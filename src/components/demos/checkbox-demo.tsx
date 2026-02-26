import { Example } from "@/components/example"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function CheckboxDemo() {
  return (
    <>
      <Example title="Default">
        <div className="flex items-center gap-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </Example>
      <Example title="Disabled">
        <div className="flex items-center gap-2">
          <Checkbox id="disabled" disabled />
          <Label htmlFor="disabled" className="opacity-50">Disabled</Label>
        </div>
      </Example>
    </>
  )
}
