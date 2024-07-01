class Vehicle {
  // Private properties (conventionally use _ or #)
  #speed
  #fuel

  constructor(speed, fuel) {
    this.#speed = speed
    this.#fuel = fuel
  }

  // Public method to display vehicle status
  getStatus() {
    return `Speed: ${this.#speed} km/h, Fuel: ${this.#fuel} liters`
  }

  // Public method to drive the vehicle
  drive(distance) {
    const fuelNeeded = distance / 10
    if (fuelNeeded <= this.#fuel) {
      this.#fuel -= fuelNeeded
      this.#speed += 10
      console.log(`Drove ${distance} km. ${this.getStatus()}`)
    } else {
      console.log('Not enough fuel to drive the distance.')
    }
  }

  // Public method to refuel the vehicle
  refuel(amount) {
    this.#fuel += amount
    console.log(`Refueled ${amount} liters. ${this.getStatus()}`)
  }
}

// Creating an instance of the Vehicle class
const myCar = new Vehicle(60, 20)

// Interacting with the vehicle using public methods
myCar.drive(50) // Drove 50 km. Speed: 70 km/h, Fuel: 15 liters
myCar.refuel(10) // Refueled 10 liters. Speed: 70 km/h, Fuel: 25 liters
myCar.drive(200) // Not enough fuel to drive the distance.

new Object()
