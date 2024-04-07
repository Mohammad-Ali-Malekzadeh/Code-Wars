function sameCase(a, b) {
    const capitalCase = /^[A-Z]+$/
    const lowerCase = /^[a-z]+$/
    const noLetter = !/^[a-zA-Z]/
    if ((a.includes(lowerCase) && b.includes(lowerCase)) || (a.includes(capitalCase) && b.includes(capitalCase))) {
        return 1
    } else if ((a.includes(lowerCase) && b.includes(capitalCase)) || (a.includes(capitalCase) && b.includes(lowerCase))) {
        return 0
    } else if (!a.includes(noLetter) && !b.includes(noLetter)) {
        return -1
    }
}

console.log(sameCase('0', '?'))