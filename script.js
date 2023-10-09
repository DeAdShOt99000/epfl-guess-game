function guess(num, color){
    const secretNumber = 7
    const secretColor = "blue"

    const inpNumber = num
    const inpColor = color

    if (secretNumber == Number(inpNumber) && secretColor == inpColor){
        console.log("Congratulations! You figured out both secrets!")
    } else if (secretNumber == Number(inpNumber) || secretColor == inpColor){
        console.log("Great! You found one of the secrets!")
    } else{
        console.log("You didn't find any of the secrets...")
        console.log("Better luck next time!")
    }
    
    console.log("Try again!")
}

guess(7, 'red')