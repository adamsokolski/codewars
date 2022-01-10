/* 
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59

The maximum time never exceeds 359999 (99:59:59)
*/

const humanReadable = (sec) => {
  if (sec > 359999) return 'Exceeded time limit (359999s)'
  let hours = parseInt(sec / 3600)
  let minutes = parseInt((sec - hours * 3600) / 60)
  let seconds = parseInt(sec - (hours * 3600 + minutes * 60))
  return `${fromatTime(hours)}:${fromatTime(minutes)}:${fromatTime(seconds)}`
}

const fromatTime = (time) => {
  time = time.toString()
  return time.length === 1 ? '0' + time : time
}

console.log(humanReadable(86399))
