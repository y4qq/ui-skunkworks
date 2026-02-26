import { Example } from "@/components/example"
import { Spinner } from "@/components/ui/spinner"

export default function SpinnerDemo() {
  return (
    <>
      <Example title="Default" className="flex-row items-center gap-4">
        <Spinner />
      </Example>
    </>
  )
}
