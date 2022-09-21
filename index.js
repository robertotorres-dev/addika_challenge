// Escribe tu solución aquí //

const { reservedWords, dbPatterns } = require('./dbLogger')

const isAlphaNumeric = str => /^[a-z0-9]+$/gi.test(str);

const Logger = (inputPattern) => {

  const method = inputPattern.substring(0, inputPattern.indexOf(' '))
  const words = inputPattern.split('/')

  let newPattern = `${method} `
  for (let i = 1; i < words.length; i++) {
    if (reservedWords.includes(words[i])) {
      newPattern += `/${words[i]}`
    } else {
      if (!isAlphaNumeric(words[i])) {
        throw new Error('The id is not alphanumeric');
      }
      newPattern += `/<ID>`
    }
  }

  const matchPattern = dbPatterns.find((patternObject) => {
    let pattern = patternObject.pattern;
    if (pattern === newPattern) {
      return patternObject
    }
  })

  return matchPattern.endpoint

}

/* console.log(Logger('GET /users/bcdd098'))
console.log(Logger('GET /users/543sdf'))
console.log(Logger('GET /investmentAccount/thisidlookslikewords/comments'))
console.log(Logger('GET /investmentAccount/thisisanidfortest/notifications')) */


module.exports = { Logger }