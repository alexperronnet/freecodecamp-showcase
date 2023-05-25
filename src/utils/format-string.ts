export const formatString = {
  // Format name for a better consistency in API calls
  name: (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
  },

  date: (date: string) => {
    const dateObject = new Date(date)
    const year = dateObject.getFullYear()
    const month = dateObject.getMonth() + 1
    const day = dateObject.getDate()
    const hours = dateObject.getHours().toString().padStart(2, '0')
    const minutes = dateObject.getMinutes().toString().padStart(2, '0')

    return `${month}/${day}/${year} ${hours}:${minutes}`
  }
}
