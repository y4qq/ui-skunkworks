import type { Meta, StoryObj } from "@storybook/react-vite"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const meta = {
  title: "UI/Tabs",
  component: Tabs,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Account</TabsTrigger>
        <TabsTrigger value="tab2">Password</TabsTrigger>
        <TabsTrigger value="tab3">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="tab2">
        Change your password here.
      </TabsContent>
      <TabsContent value="tab3">
        Manage your settings here.
      </TabsContent>
    </Tabs>
  ),
}

export const LineTabs: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList variant="line">
        <TabsTrigger value="tab1">Account</TabsTrigger>
        <TabsTrigger value="tab2">Password</TabsTrigger>
        <TabsTrigger value="tab3">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="tab2">
        Change your password here.
      </TabsContent>
      <TabsContent value="tab3">
        Manage your settings here.
      </TabsContent>
    </Tabs>
  ),
}
