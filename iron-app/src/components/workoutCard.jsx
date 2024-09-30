import LogExcerciseField from "./logExcerciseInput";

export default function WorkoutCard({name, type, id, excercises}) {
    return ( 
        <div className={"workout-card"}>
            <h2>{name}</h2>
            <h3>{type}</h3>
            {excercises.map((excercise, index) => (
                <LogExcerciseField key={index} name={excercise.name} excercise={excercise.expectedRepetitions}/>
            ))}
        </div>
    )
}