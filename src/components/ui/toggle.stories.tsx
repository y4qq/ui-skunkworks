import type { Meta, StoryObj } from "@storybook/react-vite"
import { BoldIcon } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

const meta = {
  title: "UI/Toggle",
  component: Toggle,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    children: <BoldIcon />,
    "aria-label": "Toggle bold",
  },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Outline: Story = {
  args: { variant: "outline" },
}

export const Small: Story = {
  args: { size: "sm" },
}

export const WithText: Story = {
  args: {
    children: (
      <>
        <BoldIcon />
        Bold
      </>
    ),
  },
}
