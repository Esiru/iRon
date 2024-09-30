export default function LogExcerciseField({name, expectedRepetitions}) {
    return ( 
        <div className="log-excercise-field">
          {name}
          <label>
            Repetitions
            <input
              defaultValue={expectedRepetitions}
            type={"number"}
            />
          </label>
          <label>
            Weight
            <input
            type={"number"}
            />
          </label>
        </div>
    );
}