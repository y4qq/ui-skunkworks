import { Example } from "@/components/example"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  CalculatorIcon,
  CalendarIcon,
  CreditCardIcon,
  SettingsIcon,
  SmileIcon,
  UserIcon,
} from "lucide-react"

export default function CommandDemo() {
  return (
    <>
      <Example title="Default">
        <Command className="rounded-lg border shadow-md w-full max-w-md">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <CalendarIcon />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <SmileIcon />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <CalculatorIcon />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <UserIcon />
                <span>Profile</span>
              </CommandItem>
              <CommandItem>
                <CreditCardIcon />
                <span>Billing</span>
              </CommandItem>
              <CommandItem>
                <SettingsIcon />
                <span>Settings</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </Example>
    </>
  )
}
