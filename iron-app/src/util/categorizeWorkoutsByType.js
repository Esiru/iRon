export default function categorizeWorkoutsByType(workouts, types) {
    const categorizedWorkouts = new Array(types.length).fill([])

    types.map((type) => {
        categorizedWorkouts[types.indexOf(type)] = workouts.filter(
          (workout) => workout.type === type
        );
    })
    return categorizedWorkouts
}