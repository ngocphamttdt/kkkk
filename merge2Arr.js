const mergeArrays2 = (arrA, arrB) => {
    let indA = 0
    let indB = 0
    let mergedInd = 0
    let mergedArr = []
    while (mergedInd < (arrA.length + arrB.length)) {
        const isArrAFinished = indA >= arrA.length
        const isArrBFinished = indB >= arrB.length
        if (isArrBFinished || arrA[indA] < arrB[indB]) {
            mergedArr.push(arrA[indA])
            indA++
        }
        else if (isArrAFinished || arrA[indA] >= arrB[indB]) {
            mergedArr.push(arrB[indB])
            indB++
        }
        mergedInd++
    }
    return mergedArr
}

const ar = [1, 2, 3]
const br = [2,5 ,5, 9]
const res = mergeArrays2(ar, br)
console.log('res: ', res);