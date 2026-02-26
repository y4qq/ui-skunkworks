import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card"

const meta = {
  title: "UI/Card",
  component: Card,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">
            Action
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>This is the card content area. You can place any content here.</p>
      </CardContent>
      <CardFooter>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  ),
}

export const Small: Story = {
  render: () => (
    <Card className="w-[380px]" size="sm">
      <CardHeader>
        <CardTitle>Small Card</CardTitle>
        <CardDescription>A compact card variant.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card uses the small size variant with reduced padding and gaps.</p>
      </CardContent>
      <CardFooter>
        <Button size="sm">Submit</Button>
      </CardFooter>
    </Card>
  ),
}
