const dailySchedules = [
  "wake up",
  "exercise",
  "breakfast",
  "work",
  "lunch",
  "work",
  "snacks",
  "work",
  "dinner",
  "sleep",
]

// // 
const meetingObj = { 'meeting': ['friends']}
const dailyScheduleSet = new Set(
 [ "wake up",
  "exercise",
  "breakfast",
  "work",
  "lunch",
  "work",
  "snacks",
  "work",
  "dinner",
  "sleep",]
  )
dailyScheduleSet.add("play")
dailyScheduleSet.add(meetingObj)

console.log(dailySchedules, dailyScheduleSet);

// Properties
console.log(dailyScheduleSet.size)

// // Set Methods
console.log(dailyScheduleSet.has('play'));
console.log(dailyScheduleSet.entries()); 
console.log(dailyScheduleSet.keys());
console.log(dailyScheduleSet.values());

dailyScheduleSet.delete(meetingObj)
console.log('after deleting', dailyScheduleSet);

// clear()	Removes all elements from a Set
// forEach()	Invokes a callback for each element
// values()	Returns an Iterator with all the values in a Set
// keys()	Same as values()
// entries()	Returns an Iterator with the [value,value] pairs from a Set

// example solution
const resultOlEl = document.querySelector("#result")

dailyScheduleSet.forEach(schedule => {
  console.log(schedule);
  resultOlEl.innerHTML += '<li>' + schedule + '</li>'
})