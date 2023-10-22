const LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.'

function justify(text, width) {
    let textArr = text.split(' '),
        temporaryArr = [],
        wordsLength = 0,
        blank,
        justifiedText = '',
        i = 0;

    const capacityChecker = () => {
        wordsLength += textArr[i].length
        blank = width - wordsLength

        // At least there should be a Space between each words (except after the last word)
        if (blank > temporaryArr.length - 1) {
            console.log('a')
            return (true)
        } else {
            console.log('b')
            // The variable's was reset because it has changed but the condition is false
            wordsLength -= textArr[i].length
            blank += textArr[i].length
            return (false)
        }
    }

    const justifying = () => {
        let j = 0
        while (blank > 0) {
            if (j == temporaryArr.length - 1) {
                j = 0
                continue
            }
            temporaryArr[j] += ' '
            j += 1
            blank -= 1
        }
    }

    const mergingWords = () => {
        temporaryArr.forEach((item) => {
            justifiedText += item
        })
        justifiedText += '\n'
    }

    const fixForAfterLine = () => {
        textArr.splice(0, temporaryArr.length)
        temporaryArr = []
        wordsLength = 0
    }

    do {
        if (capacityChecker()) {
            temporaryArr.push(textArr[i])
            i += 1
        } else {
            justifying()
            mergingWords()
            fixForAfterLine()
        }
    } while (i <= textArr.length);

    console.log(textArr)
    return justifiedText
}

console.log(justify(LIPSUM, 30)) 