import Link from "next/link";

export default function WorkoutPreview({name, type, id, excercises}) {
    return (
      <div className={"workout-preview"}>
        <Link href={{ pathname: "/workout", query: { id: id } }}>
          {name}
        </Link>
        <div className="excercises-list">
          {excercises.map((excercise, index) => (
            <p key={index}>{excercise.name}</p>
          ))}
        </div>
      </div>
    );
}