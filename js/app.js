const privateNames = ['בטי המפוזרת', 'מדונה', 'רווית', 'מטולה', 'ביצי איצי', 'רפי רפינזון',]
const slogenPlural = ['מציצות', 'גויאבות', 'טריקים', 'שטיחים', 'פדלפון',]

const proxyAdjNames = ['פצצת', 'השתעלתי', 'חביתת', 'קבוטת', 'צפצפת',]
const nouns = ['עמבה', 'חירמונים', 'ריח', 'אשליות',]
const adjs = ['רטובה', 'בשקל', 'משובחת', 'מטורפת', 'מתלהבת', 'מתפוצצת', 'מתרטבת', 'מתלקחת', 'מתגרדת', 'בתולה',]

const verbBody = ['החלקתי', 'בקבקתי', 'שכחנו', 'השתעלתי', 'השתעלתי', 'שכחתי', 'קיבעתי', 'הרווחתי',]
const subjs = ['קליפס', 'קלמארי', 'חרא',]
const places = ['בשסק', 'אצל באבי', 'בכותל', 'לאמא', 'לאבא שלך', 'ביפו', 'בתל מונד', 'בחוג', 'באליאנס', 'במעלה הגרדום', 'בעברי',]

const quants = ['שליש ', 'רבע', 'בקבוק', 'שני קנקנים', 'ים',]

const slot1 = {
    privateNames,
    quants,
    verbBody,
    proxyAdjNames
}

const slot2 = {
    nouns,
    subjs,
    slogenPlural,
}

const slot3 = {
    adjs,
    places,
}

function onGenerateName() {
    const name = generateName()
    const elH1 = document.querySelector('.container h1')
    elH1.innerText = name
}

function generateName() {
    const nameLength = getRandomIntInclusive(2, 3)
    const wordPools = [slot1, slot2, slot3]
    let str = ''
    console.log('Generated name length:', nameLength)

    for (let i = 0; i < nameLength; i++) {
        const slot = wordPools[i]
        const keys = Object.keys(slot)
        // console.log('keys:', keys)
        const randomKey = keys[getRandomIntInclusive(0, keys.length - 1)]
        // console.log('randomKey:', randomKey)
        const words = slot[randomKey]
        // console.log('words:', words)
        const randomWord = words[getRandomIntInclusive(0, words.length - 1)]
        // console.log('randomWord:', randomWord)
        str += randomWord + ((i === nameLength - 1) ? '' : ' ')
    }
    console.log('Generated name:', str)
    return str

}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}


// OLD:
// const words = [
//     ['מדונה', 'רווית', 'נבטי', 'ביצי'],
//     ['עמבה', 'בקבוק', 'רבע', 'שליש'],
//     ['קולולו', 'יען', 'בקן', 'פיתה']
// ]
// '', 

// var options = [
//     [privateNames, slogenPlural],
//     [proxyAdjNames, nouns, adjs],
//     [verbBody, subjs, places]
// ]

// function generateName2() {
//     var option = options[getRandomIntInclusive(0, options.length - 1)]
//     var wordsLength = getRandomIntInclusive(2, 3)
//     var str = ''
//     for (let i = 0; i < wordsLength; i++) {
//         str += option[i][getRandomIntInclusive(0, option[i].length - 1)] + ' '
//     }
//     return str
// }

// function generateName() {
//     let str = ''
//     const length = getRandomIntInclusive(1, 3)
//     for (let i = 0; i < length; i++) {
//         str += words[i][getRandomIntInclusive(0, words[i].length - 1)] + ' '
//     }
//     return str
// }