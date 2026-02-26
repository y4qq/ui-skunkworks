import { Example } from "@/components/example"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export default function ButtonGroupDemo() {
  return (
    <>
      <Example title="Default">
        <ButtonGroup>
          <Button variant="outline">Left</Button>
          <Button variant="outline">Center</Button>
          <Button variant="outline">Right</Button>
        </ButtonGroup>
      </Example>
    </>
  )
}
