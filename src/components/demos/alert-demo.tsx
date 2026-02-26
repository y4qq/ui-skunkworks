import { Example } from "@/components/example"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { InfoIcon, AlertTriangleIcon, CheckCircleIcon } from "lucide-react"

export default function AlertDemo() {
  return (
    <>
      <Example title="Default">
        <Alert>
          <InfoIcon />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the CLI.
          </AlertDescription>
        </Alert>
      </Example>
      <Example title="Destructive">
        <Alert variant="destructive">
          <AlertTriangleIcon />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </Alert>
      </Example>
      <Example title="Success (custom styling)">
        <Alert className="border-green-500/50 text-green-700 dark:text-green-400 [&>svg]:text-green-600">
          <CheckCircleIcon />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>
            Your changes have been saved successfully.
          </AlertDescription>
        </Alert>
      </Example>
    </>
  )
}
