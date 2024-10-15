import {log as staticLog} from "../app/static-resources/static-log"

export default function getNewestEntry() {
    const log = staticLog

    return log[log.length - 1]
}