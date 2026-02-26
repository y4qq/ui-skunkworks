import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card"

const meta = {
  title: "UI/HoverCard",
  component: HoverCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof HoverCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger
        render={
          <a href="#" className="underline">
            Hover me
          </a>
        }
      />
      <HoverCardContent>
        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-semibold">HoverCard Content</h4>
          <p className="text-sm text-muted-foreground">
            This content appears when you hover over the trigger element. It can
            contain any content you want.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}
