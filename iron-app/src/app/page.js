import WorkoutPreview from "@/components/workoutPreview";
import { workouts as staticWorkouts} from "./static-resources/static-workouts";
import categorizeWorkoutsByType from "@/util/categorizeWorkoutsByType";

export default function Home() {
  const workouts = staticWorkouts
  const types = ['Resistance', 'Cardio']

  const workoutsByType = categorizeWorkoutsByType(workouts, types)
  
  return (
    <>
      {workoutsByType.map((workouts, key) => (
        <>
          <h3>{types[key]}</h3>
          <div className={"workout-preview-list"}>
            {workouts.map((workout) => (
              <WorkoutPreview
                name={workout.name}
                type={workout.type}
                id={workout.id}
                excercises={workout.excercises}
              />
            ))}
          </div>
        </>
      ))}
    </>
  );
}