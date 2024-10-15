import WorkoutPreview from "@/components/workoutPreview";
import { workouts as staticWorkouts} from "./static-resources/static-workouts";
import categorizeWorkoutsByType from "@/util/categorizeWorkoutsByType";
import {log as staticLog} from "./static-resources/static-log";
import getNewestEntry from "@/util/getNewestEntry";
import getNewestEntryByWorkout from "@/util/getNewestEntryByWorkout";

export default function Home() {
  const workouts = staticWorkouts
  const log = staticLog
  const types = ['Resistance', 'Cardio']
  const newestEntry = getNewestEntry()

  const workoutsByType = categorizeWorkoutsByType(workouts, types)
  
  return (
    <>
      <h2>Last workout</h2>
      <div className="last-entry">
        <h4>{newestEntry.name}</h4>
        <h4>{newestEntry.date.toDateString()}</h4>
      </div>
      <h2>My workouts</h2>
      {workoutsByType.map((workouts, key) => (
        <>
          <div className="workout-preview-category">
            <h3>{types[key]}</h3>
            <div className={"workout-preview-list"}>
              {workouts.map((workout) => {
                let latestLoggedDate = getNewestEntryByWorkout(workout.id)
                return <WorkoutPreview
                  name={workout.name}
                  type={workout.type}
                  id={workout.id}
                  date={latestLoggedDate != undefined ? latestLoggedDate.date.toDateString() : null}
                  excercises={workout.excercises}
                />
              })}
            </div>
          </div>
        </>
      ))}
    </>
  );
}