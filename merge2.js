function mergeTwo(arr1, arr2) {
  let merged = [];
  let index1 = 0;
  let index2 = 0;
  let current = 0;

  while (current < (arr1.length + arr2.length)) {

    let isArr1Depleted = index1 >= arr1.length;
    let isArr2Depleted = index2 >= arr2.length;

    if (!isArr1Depleted && (isArr2Depleted || (arr1[index1] < arr2[index2]))) {
      merged[current] = arr1[index1];
      index1++;
    } else {
      merged[current] = arr2[index2];
      index2++;
    }

    current++;
  }

  return merged;
}


function getUniqueCharacter(s) {
  let result = []
  let a = s.split('');
  a.forEach(element => {
    if (result.indexOf(element) === -1) {
      result.push(element)
    }
    else {
      result.splice(result.indexOf(element), 1)
    }
  })
  
  if (result.length > 0) {
    const first = result[0]
    return a.indexOf(first)
  }
  else return -1
}

const data = getUniqueCharacter('ahackerank')
console.log('res1', data);

