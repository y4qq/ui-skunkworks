import { Example } from "@/components/example"
import { Input } from "@/components/ui/input"
import { InputGroup } from "@/components/ui/input-group"
import { SearchIcon } from "lucide-react"

export default function InputGroupDemo() {
  return (
    <>
      <Example title="With Icon">
        <InputGroup className="max-w-sm">
          <SearchIcon className="text-muted-foreground absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
          <Input placeholder="Search..." className="pl-9" />
        </InputGroup>
      </Example>
    </>
  )
}
