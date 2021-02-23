export const getDayOfMonth = (num) => {
    //Convert reddit's 'created' unix timestamp to ISO date
 const isoDateString = new Date(num * 1000)
 //format iso date to "YYYY-MM-DD"
 const dateStringFormat = isoDateString.toISOString().substring(0, 10);
 console.log("dateStringFormat",dateStringFormat)
 //extract day from string
 let day = dateStringFormat.split("-")
 //get posted date from today
 const today = getCurrentDate()
 const postedDay = today - parseInt(day[day.length - 1])
return postedDay === 0 || postedDay < 0 ? "today" : postedDay 
}

export const getCurrentDate = () => {
    const date = new Date();
    const today = date.getDate()
    return today
}