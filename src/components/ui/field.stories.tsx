import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldContent,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const meta = {
  title: "UI/Field",
  component: Field,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Field className="w-[350px]">
      <FieldLabel>Email</FieldLabel>
      <FieldContent>
        <Input placeholder="Enter email" />
        <FieldDescription>Your email address</FieldDescription>
      </FieldContent>
    </Field>
  ),
}

export const WithError: Story = {
  render: () => (
    <Field className="w-[350px]" data-invalid="true">
      <FieldLabel>Email</FieldLabel>
      <FieldContent>
        <Input placeholder="Enter email" aria-invalid="true" />
        <FieldDescription>Your email address</FieldDescription>
        <FieldError>This field is required</FieldError>
      </FieldContent>
    </Field>
  ),
}
