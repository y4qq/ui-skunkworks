"use client"

import { useState } from "react"
import { Example } from "@/components/example"
import { Calendar } from "@/components/ui/calendar"

export default function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <>
      <Example title="Default" className="items-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </Example>
    </>
  )
}
