export const formatString = {
  name: (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
  },
  date: (date: string) => {
    const dateObject = new Date(date)
    const year = dateObject.getFullYear()
    const month = dateObject.getMonth() + 1
    const day = dateObject.getDate()
    const hours = dateObject.getHours()
    const minutes = dateObject.getMinutes()
    const seconds = dateObject.getSeconds()

    return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`
  }
}
