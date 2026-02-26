import type { Meta, StoryObj } from "@storybook/react-vite"
import { FileTextIcon } from "lucide-react"

import {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
} from "@/components/ui/item"
import { Button } from "@/components/ui/button"

const meta = {
  title: "UI/Item",
  component: Item,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Item className="w-[400px]">
      <ItemContent>
        <ItemTitle>Item title</ItemTitle>
        <ItemDescription>Item description</ItemDescription>
      </ItemContent>
    </Item>
  ),
}

export const WithMedia: Story = {
  render: () => (
    <Item className="w-[400px]">
      <ItemMedia variant="icon">
        <FileTextIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Document</ItemTitle>
        <ItemDescription>A document item with an icon</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm">
          View
        </Button>
      </ItemActions>
    </Item>
  ),
}

export const Outline: Story = {
  render: () => (
    <Item variant="outline" className="w-[400px]">
      <ItemContent>
        <ItemTitle>Outline variant</ItemTitle>
        <ItemDescription>Item with an outline border</ItemDescription>
      </ItemContent>
    </Item>
  ),
}

export const Group: Story = {
  render: () => (
    <ItemGroup className="w-[400px]">
      <Item>
        <ItemContent>
          <ItemTitle>First item</ItemTitle>
          <ItemDescription>Description for the first item</ItemDescription>
        </ItemContent>
      </Item>
      <Item>
        <ItemContent>
          <ItemTitle>Second item</ItemTitle>
          <ItemDescription>Description for the second item</ItemDescription>
        </ItemContent>
      </Item>
      <Item>
        <ItemContent>
          <ItemTitle>Third item</ItemTitle>
          <ItemDescription>Description for the third item</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
}
