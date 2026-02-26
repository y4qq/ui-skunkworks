import { Example } from "@/components/example"
import { Button } from "@/components/ui/button"
import { MailIcon, Loader2Icon } from "lucide-react"

export default function ButtonDemo() {
  return (
    <>
      <Example title="Variants" className="flex-row flex-wrap">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="destructive">Destructive</Button>
      </Example>
      <Example title="Sizes" className="flex-row flex-wrap items-center">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="icon"><MailIcon /></Button>
      </Example>
      <Example title="With Icon" className="flex-row flex-wrap">
        <Button>
          <MailIcon data-icon="inline-start" />
          Login with Email
        </Button>
        <Button disabled>
          <Loader2Icon className="animate-spin" data-icon="inline-start" />
          Please wait
        </Button>
      </Example>
    </>
  )
}
