import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
} from "@/components/ui/combobox"

const meta = {
  title: "UI/Combobox",
  component: ComboboxInput,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof ComboboxInput>

export default meta
type Story = StoryObj<typeof meta>

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "nuxt", label: "Nuxt" },
  { value: "svelte", label: "SvelteKit" },
]

export const Default: Story = {
  render: function Render() {
    return (
      <Combobox>
        <ComboboxInput placeholder="Search frameworks..." />
        <ComboboxContent>
          <ComboboxList>
            {frameworks.map((framework) => (
              <ComboboxItem key={framework.value} value={framework.value}>
                {framework.label}
              </ComboboxItem>
            ))}
          </ComboboxList>
          <ComboboxEmpty>No results found.</ComboboxEmpty>
        </ComboboxContent>
      </Combobox>
    )
  },
}
