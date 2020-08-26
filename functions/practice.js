const calculateAgeInDogYears = (age) => {
    const ageInDogYears = age / 7

    return ageInDogYears
}

const dogAge = calculateAgeInDogYears(22)
console.log(dogAge)

const favBreed = dogBreed => {
    if (dogBreed === "meow") {
        return "I like cats"
    } else {
    return `my favorite dog breed is ${dogBreed}`;
    }
}
const myFav = favBreed("lab")
console.log("When it comes to pets,", myFav)

const add = (b, a, c) => a+c+b;

const sum = add(17, 4, 11)
console.log(sum)

const go = (direction, speed) => {
    let info = `The car is moving ${direction} at ${speed} mph.`
    if (speed > 75) {
        info += " SLOW DOWN!"
    }
    console.log(info)
    
}

go("backwards", 80)

const evenOrOdd = num => {
    if (num % 2 === 0 && num !== 0) {
        return "Even"
    } else if (num % 2 !== 0){
    return "Odd"
    }
    return "undefined"
}

const arrOfNums = [2,6,7,2,9,14,53,0];
for (let num of arrOfNums) {
    let numType = evenOrOdd(num)
    console.log(numType)
}

const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]

const filterWords = wordArray => {
    const filteredArray = wordArray.filter(word => !word.startsWith("k"))
    return filteredArray;
}

const makeSent = arrayOfWords => {
    const sentence = arrayOfWords.join(" ")
    return sentence
}

const newArray = filterWords(words)
const newSentence = makeSent(newArray)

console.log(newSentence)

const catchTuna = chance => {
    if (chance > 1) {
        return false
    } 
    return true
}

const randomNum = Math.random()*3;
const confirmCatch = catchTuna(randomNum)
if (confirmCatch) {
    console.log("Sven hooked a tuna! :)")
} else {
console.log("Sven came up empty-handed. :(")
}

const orderMeal = (sandwich, side, drink, dessert) => {
    return {
        "sandwich": sandwich,
        "side": side,
        "drink": drink,
        "dessert": dessert
    }
}
const takeOutBag = orderMeal("Ultimate Slammer", "Fudge sundae", "Mr. Pepper", "Potato wedges")
console.log(takeOutBag)

const perp = { firstName: "Doug", lastName: "Jones"}
const getGroceries = person => `${person.firstName} ${person.lastName} went to the grocery store`
const getGas = person => `${person.firstName} ${person.lastName} got gas for his car`
const getOilChanged = person => `${person.firstName} ${person.lastName} got the engine oil changed`
const cleanRoom = person => `${person.firstName} ${person.lastName} cleaned their room`
const vacuumLivingRoom = person => `${person.firstName} ${person.lastName} vacuumed the living room`
const takeOutTrash = person => `${person.firstName} ${person.lastName} took out the trash`

const dayPlanner = (firstChore, secondChore, thirdChore, person, day) => {
    return `On ${day}, ` + firstChore(person) + ", " + secondChore(person) + ", and " + thirdChore(person)
}
const task = dayPlanner(getGas, getGroceries, takeOutTrash, perp, "Wednesday")
console.log(task)
