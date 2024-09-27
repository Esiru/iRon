export default function WorkoutPreview({name, type, id, excercises}) {
    return (
      <a href={`/workouts/${id}`}>
        <div className={"workout-preview"}>
          <h2>{name}</h2>
          <h3>{type}</h3>
          {excercises.map((excercise) => (
            <h4>{excercise.name}</h4>
          ))}
        </div>
      </a>
    );
}