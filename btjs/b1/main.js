function getDateTime() {
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    const day = now.getDate()
    const hour = now.getHours()
    const minute = now.getMinutes()
    const second = now.getSeconds()
    return `Now is: ${hour}:${minute} ${day}/${month}/${year}`
}

const now = getDateTime()
console.log(now) // Now is: 23:30 28/12/2022