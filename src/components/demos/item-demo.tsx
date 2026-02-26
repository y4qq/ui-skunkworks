import { Example } from "@/components/example"
import {
  Item,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemMedia,
} from "@/components/ui/item"
import { FileIcon, FolderIcon, ImageIcon } from "lucide-react"

export default function ItemDemo() {
  return (
    <>
      <Example title="Default">
        <div className="w-full max-w-md space-y-1">
          <Item>
            <ItemMedia>
              <FolderIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Documents</ItemTitle>
              <ItemDescription>Contains 12 files</ItemDescription>
            </ItemContent>
          </Item>
          <Item>
            <ItemMedia>
              <ImageIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Photos</ItemTitle>
              <ItemDescription>Contains 84 files</ItemDescription>
            </ItemContent>
          </Item>
          <Item>
            <ItemMedia>
              <FileIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>report.pdf</ItemTitle>
              <ItemDescription>2.4 MB</ItemDescription>
            </ItemContent>
          </Item>
        </div>
      </Example>
    </>
  )
}
