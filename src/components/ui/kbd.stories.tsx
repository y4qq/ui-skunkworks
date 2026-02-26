import type { Meta, StoryObj } from "@storybook/react-vite"

import { Kbd, KbdGroup } from "@/components/ui/kbd"

const meta = {
  title: "UI/Kbd",
  component: Kbd,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { children: "\u2318" },
}

export const WithText: Story = {
  args: { children: "Ctrl+C" },
}

export const Group: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>{"\u2318"}</Kbd>
      <Kbd>Shift</Kbd>
      <Kbd>P</Kbd>
    </KbdGroup>
  ),
}
