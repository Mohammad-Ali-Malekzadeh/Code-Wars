// V1: Before understanding 'split()'
function mostLikely(prob1, prob2) {
    const decimalNumber = (prob) => {
        let numerator = '',
            denominator = '',
            colonIndex = prob.search(':')
        for (let i in prob) {
            if (i < colonIndex) {
                numerator += prob[i]
            } else if (i > colonIndex) {
                denominator += prob[i]
            }
        }
        return numerator / denominator
    }

    if (decimalNumber(prob1) > decimalNumber(prob2)) {
        return true
    } else if (decimalNumber(prob2) > decimalNumber(prob1)) {
        return false
    }
}

// V2: After I understood 'splite()'
let mostLikely = (prob1, prob2) => {
    let prob1Array = prob1.split(':')
    let prob2Array = prob2.split(':')
    console.log(prob1Array, prob2Array)
    if (prob1Array[0] / prob1Array[1] > prob2Array[0] / prob2Array[1]) {
        return true
    } else {
        return false
    }
}