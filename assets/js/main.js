// Array
const dailySchedule = [
  'wakeup',
  'walking',
  'breakfast',
  'work',
  'dinner',
  'work',
  'sleep',
]

// Doesn't have duplicate
const dailyScheduleSet = new Set([
  'wakeup',
  'walking',
  'breakfast',
  'work',
  'dinner',
  'work',
  'sleep',
])

console.log(dailySchedule, dailyScheduleSet)

// Properties
console.log(dailyScheduleSet.size)

// Set Methods
dailyScheduleSet.add('play')
dailyScheduleSet.add({ meeting: ['friends'] })

console.log(dailyScheduleSet.has('work')) // to check, if i had worked.

dailyScheduleSet.delete('walking') // remove

// clear()	Removes all elements from a Set
// forEach()	Invokes a callback for each element
// values()	Returns an Iterator with all the values in a Set
// keys()	Same as values()
// entries()	Returns an Iterator with the [value,value] pairs from a Set

console.log(dailyScheduleSet)
