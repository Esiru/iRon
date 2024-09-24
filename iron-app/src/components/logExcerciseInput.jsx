export default function logExcerciseField(name, expectedRepetitions) {
    return (
      <>
        <div className="log-excercise-field">
          <label>{name}</label>
          <input 
            defaultValue={expectedRepetitions} 
            pattern={"[0-9]*"} />
        </div>
      </>
    );
}