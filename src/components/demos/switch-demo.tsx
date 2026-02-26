import { Example } from "@/components/example"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function SwitchDemo() {
  return (
    <>
      <Example title="Default">
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      </Example>
      <Example title="Small">
        <div className="flex items-center space-x-2">
          <Switch id="small-switch" size="sm" />
          <Label htmlFor="small-switch">Compact</Label>
        </div>
      </Example>
    </>
  )
}
