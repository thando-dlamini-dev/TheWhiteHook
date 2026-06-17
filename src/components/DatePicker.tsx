import { useState } from "react"
import { DatePicker } from "@/components/DatePicker"

export const DatePickerPresetsExample = () => {
    const [date, setDate] = useState<Date | undefined>(undefined)
    const presets = [
        {
            label: "Today",
            date: new Date(),
        },
        {
            label: "Tomorrow",
            date: new Date(new Date().setDate(new Date().getDate() + 1)),
        },
        {
            label: "A week from now",
            date: new Date(new Date().setDate(new Date().getDate() + 7)),
        },
        {
            label: "A month from now",
            date: new Date(new Date().setMonth(new Date().getMonth() + 1)),
        },
        {
            label: "6 months from now",
            date: new Date(new Date().setMonth(new Date().getMonth() + 6)),
        },
        {
            label: "A year from now",
            date: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
        },
    ]
    return (
        <div className="flex flex-col items-center gap-y-4">
            <DatePicker
                presets={presets}
                value={date}
                onChange={setDate}
                className="w-60"
            />
            <p className="flex items-center rounded-md bg-gray-100 p-2 text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-300">
                Selected Date: {date ? date.toLocaleDateString() : "None"}
            </p>
        </div>
    )
}