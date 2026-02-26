"use client"

import { useEffect, useState } from "react"
import { Example } from "@/components/example"
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"

export default function ProgressDemo() {
  const [value, setValue] = useState(13)

  useEffect(() => {
    const timer = setTimeout(() => setValue(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Example title="Default">
        <Progress value={value} className="max-w-md" />
      </Example>
      <Example title="With Label">
        <Progress value={value} className="max-w-md">
          <ProgressLabel>Progress</ProgressLabel>
          <ProgressValue />
        </Progress>
      </Example>
    </>
  )
}
