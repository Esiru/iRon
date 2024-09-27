import Link from "next/link";

export default function WorkoutPreview({name, type, id, excercises}) {
    return (
      <Link href={{ pathname: "/workout", query: { id: id } }}>
        {/* <Link href={`workout/${id}`}>*/}
        <div className={"workout-preview"}>
          <h2>{name}</h2>
          <h3>{type}</h3>
          {excercises.map((excercise) => (
            <h4>{excercise.name}</h4>
          ))}
        </div>
      </Link>
    );
}