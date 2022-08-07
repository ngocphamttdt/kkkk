// const sumReduce = (numList) => numList.reduce((sum, number) => (sum + number), 2)
// console.log(sumReduce([1, 2, 3]))

const getLongestWord = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return null

  return arr.reduce((currentLongtest, currentWord) =>
    currentLongtest.length > currentWord.length ? currentLongtest : currentWord
    , arr[0])
}

//console.log(getLongestWord(['ngoc', 'nguyen', 'thi']))

const arrayToObject = (arr) => {
  return arr.reduce((itemMap, item) => {
    itemMap[item.id] = item.name
    return itemMap
  }, {})
}

const marvel = [
  { id: 'key1', name: 'icron man' },
  { id: 'key2', name: 'wonder woman' },
  { id: 'key3', name: 'thor' }

]
const addProp = () =>{
  const person = {id: '1', name: 'ngoc'}
  person['age'] = 29
  return person
}


console.log(addProp())
