import { Example } from "@/components/example"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function FieldDemo() {
  return (
    <>
      <Example title="Default">
        <FieldGroup className="w-full max-w-sm">
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input id="email" type="email" placeholder="you@example.com" />
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input id="password" type="password" placeholder="Enter password" />
          </Field>
        </FieldGroup>
      </Example>
    </>
  )
}
