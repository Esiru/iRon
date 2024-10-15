"use client"
import { useSearchParams } from "next/navigation"
import { workouts as staticWorkouts } from "../static-resources/static-workouts"
import WorkoutCard from "@/components/workoutCard"
import "./styles.modules.css"

export default function Page() {
    const searchParams = useSearchParams()
    const id = searchParams.get("id")
    const workout = staticWorkouts[id-1]
    return (
    <>
        <WorkoutCard name={workout.name} type={workout.type} id={workout.id} excercises={workout.excercises}/>
    </>
    )
}