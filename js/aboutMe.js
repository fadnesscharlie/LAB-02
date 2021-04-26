
//####### 5 questions about me  ###########

// First Quiz will be if I like Cats
var quizOne = function() {
    let response = prompt("Do you think I like Cats? Please enter Yes or No")
    catLower = response.toLowerCase()
    // console.log(catLower + "1")
    while (catLower != 'no' && catLower != 'yes' && catLower != 'y' && catLower != 'n') {
        catLower = prompt('I\'m sorry, please enter a Yes or No.')
        catLower = catLower.toLowerCase()
        // console.log(catLower + "2")
    }
    // console.log(catLower + "3")
    if (catLower == "yes" || catLower == 'y') {
        alert("That's amazing! You are spot on!")
    } else if (catLower == "no" || catLower == 'n') {
        alert("I'm so sorry you got this wrong... You must be a dog person huh...")
    } else {
        alert("It went to else...")
    }
}

// Second Quix will be if I like to bake
var quizTwo = function() {
    let response = prompt("Do you think I like to Bake? Please enter Yes or No")
    bake = response.toLowerCase()
    console.log(bake + "1")
    while (bake != 'no' && bake != 'yes' && bake != 'y' && bake != 'n') {
        bake = prompt('I\'m sorry, please enter a Yes or No.')
        bake = bake.toLowerCase()
        console.log(bake + "2")
    }
    console.log(bake + "3")
    if (bake == "yes" || bake == 'y') {
        alert("That's amazing! I love Pastries!")
    } else if (bake == "no" || bake == 'n') {
        alert("I'm so sorry you got this wrong... You need some fun in your life...")
    } else {
        alert("It went to else...")
    }
}

// Third Quiz will be if I live in bothell
var quizThree = function() {
    let response = prompt("Do I live in Bothell, WA? Please enter Yes or No")
    live = response.toLowerCase()
    console.log(live + "1")
    while (live != 'no' && live != 'yes' && live != 'y' && live != 'n') {
        live = prompt('I\'m sorry, please enter a Yes or No.')
        live = live.toLowerCase()
        console.log(live + "2")
    }
    console.log(live + "3")
    if (live == "yes" || live == 'y') {
        alert("Your correct! I actually live in Renton!")
    } else if (live == "no" || live == 'n') {
        alert("You... You didn't read... my... about me... Seriously?")
    } else {
        alert("It went to else...")
    }
}

// Fourth Quiz will be if I like outdoors
var quizFour = function() {
    let response = prompt("Do you think I like the outdoors? Please enter Yes or No")
    outDoor = response.toLowerCase()
    console.log(outDoor + "1")
    while (outDoor != 'no' && outDoor != 'yes' && outDoor != 'y' && outDoor != 'n') {
        outDoor = prompt('I\'m sorry, please enter a Yes or No.')
        outDoor = outDoor.toLowerCase()
        console.log(outDoor + "2")
    }
    console.log(outDoor + "3")
    if (outDoor == "yes" || outDoor == 'y') {
        alert("Your correct! I actually like the outdoors!")
    } else if (outDoor == "no" || outDoor == 'n') {
        alert("Looks like you need to go outdoors more then me... I like going outdoors..?")
    } else {
        alert("It went to else...")
    }
}

// Fifth Quiz will be if I have 10 Cats
var quizFive = function() {
    let response = prompt("Do you think I have over 10 cats? Please enter Yes or No")
    catMany = response.toLowerCase()
    console.log(catMany + "1")
    while (catMany != 'no' && catMany != 'yes' && catMany != 'y' && catMany != 'n') {
        catMany = prompt('I\'m sorry, please enter a Yes or No.')
        catMany = catMany.toLowerCase()
        console.log(catMany + "2")
    }
    console.log(catMany + "3")
    if (catMany == "yes" || catMany == 'y') {
        alert("Your correct! I do not have 10! I just have 2!")
    } else if (catMany == "no" || catMany == 'n') {
        alert("Although it would be great to have 10, I do not have 10!")
    } else {
        alert("It went to else...")
    }
}