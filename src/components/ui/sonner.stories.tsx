import type { Meta, StoryObj } from "@storybook/react-vite"
import { Toaster as Sonner, toast } from "sonner"

import { Button } from "@/components/ui/button"

const meta = {
  title: "UI/Sonner",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div>
      <Sonner position="bottom-right" />
      <Button
        variant="outline"
        onClick={() => toast("Event has been created")}
      >
        Show Toast
      </Button>
    </div>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <div>
      <Sonner position="bottom-right" />
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Monday, January 3rd at 6:00pm",
          })
        }
      >
        Show Toast with Description
      </Button>
    </div>
  ),
}
