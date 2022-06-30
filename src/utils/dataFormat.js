export default function getNowDateFormat () {
  const date = new Date()
  console.log(date)
  const y = date.getFullYear()
  const m = fullZero(date.getMonth() + 1)
  const d = fullZero(date.getDate())
  const hh = fullZero(date.getHours())
  const mm = fullZero(date.getMinutes())
  const ss = fullZero(date.getSeconds())
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

function fullZero(num) {
  if (num <= 9) {
    return `0${num}`
  } else {
    return num
  }
}