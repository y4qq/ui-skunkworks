import { Example } from "@/components/example"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export default function SheetDemo() {
  return (
    <>
      <Example title="Default (Right)">
        <Sheet>
          <SheetTrigger render={<Button variant="outline" />}>
            Open Sheet
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when done.
              </SheetDescription>
            </SheetHeader>
            <div className="p-4">
              <p className="text-muted-foreground text-sm">Sheet content goes here.</p>
            </div>
          </SheetContent>
        </Sheet>
      </Example>
    </>
  )
}
