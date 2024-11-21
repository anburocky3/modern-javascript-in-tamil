function getStatusMessage(age, isMember) {
  return age >= 18
    ? isMember
      ? 'Adult member'
      : 'Adult Guest'
    : 'Access denied. Minors are not allowed.'
}

const user1 = { age: 20, isMember: true }
const user2 = { age: 20, isMember: false }
const user3 = { age: 16, isMember: true }

console.log(getStatusMessage(user1.age, user1.isMember))
// Output: Welcome, adult member!
console.log(getStatusMessage(user2.age, user2.isMember))
// Output: Welcome, adult guest!
console.log(getStatusMessage(user3.age, user3.isMember))
// Output: Access denied. Minors are not allowed.
