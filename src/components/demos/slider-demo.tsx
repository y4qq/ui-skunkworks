import { Example } from "@/components/example"
import { Slider } from "@/components/ui/slider"

export default function SliderDemo() {
  return (
    <>
      <Example title="Default">
        <Slider defaultValue={[50]} max={100} className="max-w-sm" />
      </Example>
      <Example title="Range">
        <Slider defaultValue={[25, 75]} max={100} className="max-w-sm" />
      </Example>
    </>
  )
}
