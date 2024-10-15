import Link from "next/link";

export default function WorkoutPreview({name, type, id, excercises, date}) {
    return (
      <>
        <div className={"workout-preview"}>
          <Link href={{ pathname: "/workout", query: { id: id } }}>{name}</Link>
          {!date ? null : (
            <>
              <div className="last-performed-row">
                <p>Last performed:</p>
                <p>{date}</p>
              </div>
            </>
          )}

          {/* <div className="excercises-list">
          {excercises.map((excercise, index) => (
            <p key={index}>{excercise.name}</p>
          ))}
        </div> */}
        </div>
      </>
    );
}