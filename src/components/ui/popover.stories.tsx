import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

const meta = {
  title: "UI/Popover",
  component: Popover,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        Open Popover
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Popover Title</PopoverTitle>
          <PopoverDescription>
            This is a popover description with some helpful context.
          </PopoverDescription>
        </PopoverHeader>
        <div className="grid gap-2">
          <div className="grid grid-cols-3 items-center gap-4">
            <span className="text-sm">Width</span>
            <span className="col-span-2 text-sm text-muted-foreground">
              100%
            </span>
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <span className="text-sm">Height</span>
            <span className="col-span-2 text-sm text-muted-foreground">
              25px
            </span>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}
