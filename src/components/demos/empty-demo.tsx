import { Example } from "@/components/example"
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyMedia,
} from "@/components/ui/empty"
import { InboxIcon } from "lucide-react"

export default function EmptyDemo() {
  return (
    <>
      <Example title="Default">
        <Empty>
          <EmptyHeader>
            <EmptyMedia>
              <InboxIcon />
            </EmptyMedia>
            <EmptyTitle>No results found</EmptyTitle>
            <EmptyDescription>
              Try adjusting your search or filter to find what you&apos;re looking for.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      </Example>
    </>
  )
}
