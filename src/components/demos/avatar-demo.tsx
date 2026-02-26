import { Example } from "@/components/example"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AvatarDemo() {
  return (
    <>
      <Example title="Default" className="flex-row">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      </Example>
    </>
  )
}
