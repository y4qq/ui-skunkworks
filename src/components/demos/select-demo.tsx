import { Example } from "@/components/example"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Grape", value: "grape" },
  { label: "Pineapple", value: "pineapple" },
]

export default function SelectDemo() {
  return (
    <>
      <Example title="Default">
        <div className="w-full max-w-xs">
          <Select items={items} defaultValue={null}>
            <SelectTrigger>
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {items.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </Example>
    </>
  )
}
