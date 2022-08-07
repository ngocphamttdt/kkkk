const a = {name: 'ngoc', phone: '123', comp: {sign:'idea', country: 'NE'}}
const b = {...a}
b.comp.sign = 'reactjs'

const deepJson = JSON.parse(JSON.stringify(a))
deepJson.comp.sign = 'angular'

console.log(deepJson)
console.log(deepJson.comp, a.comp, b.comp)