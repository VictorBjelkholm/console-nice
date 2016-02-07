
module.exports = (consoleObj) => {
  if (consoleObj === undefined) {
    throw new Error('Need to pass in which console object to use!')
  }
  function Nice (value, label) {
    label = label === undefined ? '' : label + ' = '
    consoleObj.log(label + value)
    return value
  }
  const konsole = {
    nice: Nice
  }

  return Object.assign({}, consoleObj, konsole)
}
