export default function ExcerciseLogTable({excercises}) {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Excercise</th>
              <th>Sets</th>
              <th>Repetitions</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            {excercises.map((excercise) => (
              <tr>
                <td>{excercise.name}</td>
                <td>
                  <input></input>
                </td>
                <td>
                  <input></input>
                </td>
                <td>
                  <input></input>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
}