"use client"
import { useSearchParams } from "next/navigation"

export default function Page() {
    const searchParams = useSearchParams()
    const id = searchParams.get("id")
    return (
    <>
        <p>Hello, this is a workout page for workout associated with id {id}</p>
    </>
    )
}