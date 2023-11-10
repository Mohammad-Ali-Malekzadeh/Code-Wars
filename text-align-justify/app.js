const LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.'

function justify(text, width) {
    let i = 0,
        splitedText = text.split(' '),
        justifiedText = '',
        // Temporary Variables For Each Line 👇
        temporaryArr = [],
        wordsLength = 0,
        blankSpace;

    const capacityChecker = () => {
        wordsLength += splitedText[i].length
        blankSpace = width - wordsLength

        // in this condition, we want to check whether there is enough space between words. 
        // remember last word doesn't have space after himself.
        if (blankSpace > temporaryArr.length - 1) {
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

    const mergingWords = () => {
        temporaryArr.forEach((item) => {
            justifiedText += item
        })
        justifiedText += '\n'
    }

    const fixForAfterLine = () => {
        splitedText.splice(0, temporaryArr.length)
        temporaryArr = []
        wordsLength = 0
    }

    do {
        if (capacityChecker()) {
            temporaryArr.push(splitedText[i])
            i += 1
        } else {
            justifying()
            mergingWords()
            fixForAfterLine()
        }
    } while (i <= splitedText.length);

    console.log(splitedText)
    return justifiedText
}

console.log(justify(LIPSUM, 30)) 