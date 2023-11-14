const LIPSUM = 'Sunt dolore occaecat deserunt qui irure labore excepteur quis magna do in. Velit occaecat proident occaecat id commodo commodo non fugiat velit proident laborum. Ut nostrud minim fugiat sunt quis proident aliquip excepteur id non amet deserunt nisi voluptate. Proident laborum tempor deserunt sint ut. Mollit ea culpa consequat Lorem labore elit officia adipisicing cupidatat commodo consectetur.'

function justify(text, width) {
    let i = 0,
        splitedText = text.split(' '),
        justifiedText = '',
        // Temporary Variables For Each Line 
        temporaryArr = [],
        wordsLength = 0,
        blankSpace;

    const capacityChecker = () => {
        wordsLength += splitedText[i].length
        blankSpace = width - wordsLength


        if (blankSpace > temporaryArr.length - 1) {
            // in this condition, we want to check whether there is enough space between words. 
            // remember the last word doesn't have space after himself.
            return (true)
        } else {
            // The variables were reset because they changed but the conditions were incorrect
            wordsLength -= splitedText[i].length
            blankSpace += splitedText[i].length

            return (false)
        }
    }

    const justifying = () => {
        let j = 0
        while (blankSpace > 0) {
            if (j == temporaryArr.length - 1) {
                j = 0
                continue
            }
            temporaryArr[j] += ' '
            j += 1
            blankSpace -= 1
        }
    }

    const mergingWords = (lastLine) => {
        temporaryArr.forEach((item , index) => {
            if (lastLine == true) {
                if (index == temporaryArr.length - 1) {
                    justifiedText += item
                } else {
                    justifiedText += (item + ' ')
                }
                
            } else {
                justifiedText += item
            }
        })

        if (lastLine == false) {
            justifiedText += '\n'
        }
    }

    const fixForAfterLine = () => {
        splitedText.splice(0, temporaryArr.length)
        temporaryArr = []
        wordsLength = 0
        i = 0
    }

    do {
        if (splitedText[i] == undefined) {
            mergingWords(true)
            break
        }

        if (capacityChecker()) {
            temporaryArr.push(splitedText[i])
            i += 1
        } else {
            justifying()
            mergingWords(false)
            fixForAfterLine()
        }
    } while (i <= splitedText.length);

    return justifiedText
}

console.log(justify(LIPSUM, 30)) 