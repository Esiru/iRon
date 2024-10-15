import {log as staticLog} from "../app/static-resources/static-log"

export default function getNewestEntryByWorkout(workoutID) {
    const log = staticLog

    const filteredLog = log.filter((entry) => entry.workoutID === workoutID)
    console.log(filteredLog)

    return filteredLog[filteredLog.length - 1]
}