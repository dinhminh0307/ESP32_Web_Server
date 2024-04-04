const people = [1,2,3,4]

//console.log(people[1])

function print(tmp) {
    console.log(tmp)
}


class animal{ // create a class animal with methods
    constructor() {
        this.name = "Dog"
        this.age = 0
    }

    ageNew() {
        return this.age
    }

    bark() {
        console.log("Barking")
    }
}

const meo = new animal() // create a class 
module.exports = (meo) // pass class to other file

//built in export itself
const os = require("os")
console.log(os.platform())

/*File system */
