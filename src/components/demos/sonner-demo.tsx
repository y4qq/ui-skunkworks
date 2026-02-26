import { Example } from "@/components/example"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default function SonnerDemo() {
  return (
    <>
      <Example title="Toast Types" className="flex-row flex-wrap">
        <Button
          variant="outline"
          onClick={() => toast("Event has been created.")}
        >
          Default
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.success("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
            })
          }
        >
          Success
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.error("Event has been deleted.")}
        >
          Error
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >
          With Action
        </Button>
      </Example>
    </>
  )
}
