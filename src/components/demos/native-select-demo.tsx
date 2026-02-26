import { Example } from "@/components/example"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"

export default function NativeSelectDemo() {
  return (
    <>
      <Example title="Default">
        <NativeSelect className="max-w-xs">
          <NativeSelectOption value="">Select a fruit</NativeSelectOption>
          <NativeSelectOption value="apple">Apple</NativeSelectOption>
          <NativeSelectOption value="banana">Banana</NativeSelectOption>
          <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
          <NativeSelectOption value="dragonfruit">Dragon Fruit</NativeSelectOption>
        </NativeSelect>
      </Example>
    </>
  )
}
