export let workouts = [
  {
    id: 1,
    name: "Workout A",
    type: "Resistance",
    excercises: [
      { name: "Squats", type: "Push", repetitions: 5, superSet: false },
      { name: "Bench press", type: "Push", repetitions: 5 , superSet: false},
      { name: "Pull-ups", type: "Pull", repetitions: 5, superSet: false},
      { name: "Bicep curls", type: "Pull", repetions: 8, superSet: true},
      { name: "Skull crushers", type: "Push", repetions: 8, superSet: true}
    ],
  },
  {
    id: 2,
    name: "Workout B",
    type: "Resistance",
    excercises: [
      { name: "Deadlifts", type: "Pull", repetitions: 5, superSet: false },
      { name: "Military press", type: "Push", repetitions: 5 , superSet: false},
      { name: "Bent-over row", type: "Pull", repetitions: 5, superSet: false},
      { name: "Hammer curls", type: "Pull", repetions: 8, superSet: true},
      { name: "Tricep pushdown", type: "Push", repetions: 8, superSet: true}
    ],
  },
];