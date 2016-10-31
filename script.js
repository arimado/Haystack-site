const concatenateValuesOf = ( obj ) => {
  let result = ''
  for (let key in obj) {
    result += `${obj[key].reduce((p, c) => { return p += c + " " })}`
  }
  console.log(result)
  return result
}

const generateCard = ( number ) => {
  return {
    baseClasses: [`slide-in`, `card`]
  , cardNumber: [`${number}`]
  }
}

const createCard = ( cardData ) => {
  const card = document.createElement('div')
  card.className = concatenateValuesOf(cardData)
}

const renderCard = ( cardElement ) => {
}


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(generateCard)
const cardElements = cards.map(createCard)
