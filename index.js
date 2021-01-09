// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    drivers.push("Ralph")
}

function destructivelyPrependDriver(name) {
    drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver() {
    drivers.pop()
}

function destructivelyRemoveFirstDriver() {
    drivers.shift()
}

function appendDriver(name) {
    return [...drivers.slice(), name]
}

function prependDriver(name) {
    return [name, ...drivers.slice()]
}

function removeLastDriver() {
    return drivers.slice(0, drivers.length -1)
}

function removeFirstDriver() {
    return drivers.slice(1)
}