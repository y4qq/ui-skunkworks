import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const meta = {
  title: "UI/NavigationMenu",
  component: NavigationMenu,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof NavigationMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
              <NavigationMenuLink href="#">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">Introduction</span>
                  <span className="text-muted-foreground text-xs">
                    Learn the basics and get up to speed quickly.
                  </span>
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">Installation</span>
                  <span className="text-muted-foreground text-xs">
                    Step-by-step guide to install dependencies.
                  </span>
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">Typography</span>
                  <span className="text-muted-foreground text-xs">
                    Styles for headings, paragraphs, and lists.
                  </span>
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">CLI</span>
                  <span className="text-muted-foreground text-xs">
                    Add components using the command line.
                  </span>
                </div>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
              <NavigationMenuLink href="#">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">Alert Dialog</span>
                  <span className="text-muted-foreground text-xs">
                    A modal dialog that interrupts the user.
                  </span>
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">Hover Card</span>
                  <span className="text-muted-foreground text-xs">
                    Preview content available behind a link.
                  </span>
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">Tabs</span>
                  <span className="text-muted-foreground text-xs">
                    Layered sections of content with tab triggers.
                  </span>
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">Tooltip</span>
                  <span className="text-muted-foreground text-xs">
                    A popup displaying info on hover or focus.
                  </span>
                </div>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#"
            className={navigationMenuTriggerStyle()}
          >
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}

export const SimpleLinks: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#"
            className={navigationMenuTriggerStyle()}
          >
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#"
            className={navigationMenuTriggerStyle()}
          >
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#"
            className={navigationMenuTriggerStyle()}
          >
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}
