import { Example } from "@/components/example"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"

const frameworks = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
] as const

export default function ComboboxDemo() {
  return (
    <>
      <Example title="Default">
        <div className="w-full max-w-xs">
          <Combobox items={frameworks}>
            <ComboboxInput placeholder="Select a framework" />
            <ComboboxContent>
              <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
              <ComboboxList>
                {(item) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>
      </Example>
    </>
  )
}
