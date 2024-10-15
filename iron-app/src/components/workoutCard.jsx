import LogExcerciseField from "./logExcerciseInput"
import ExcerciseLogTable from "./excerciseLogTable"

export default function WorkoutCard({name, type, id, excercises}) {
    return (
      <>
        <h2>{name}</h2>
        <h3>{type}</h3>
        <div className="log-excercise-table">
          <ExcerciseLogTable excercises={excercises} />
        </div>
      </>
      // <div className={"workout-card"}>
      //     <h2>{name}</h2>
      //     <h3>{type}</h3>
      //     {excercises.map((excercise, index) => (
      //         <LogExcerciseField key={index} name={excercise.name} excercise={excercise.expectedRepetitions}/>
      //     ))}
      // </div>
    );
}