function makeInputVerifier(minVal, maxVal) {
    return function verify(input) {
        if (input < minVal) return 'Input is less than minimum value'
        else if (input > maxVal) return 'Input is greater than maximum value'
        else return 'Input is in range'
    }
}

function alltest(minVal, maxVal, inputVal) {
    const verify = makeInputVerifier(minVal, maxVal)
    const data = verify(inputVal)
    return data
}

const res = alltest(3, 10, 3)

//console.log('res', res);



const testFor = () =>{
    console.log('hois', i);
    for(var i = 0; i < 3; i++){
        console.log(i, 'var')
       // setTimeout(() => {console.log(i, 'var')}, 1000)
    }
    
    
    // for(let i = 0; i < 3; i++){
    //     setTimeout(() => {console.log(i, 'let')}, 1000)
    // }
} 


//sayHi()
function sayHi(){
    var name = un
    console.log(name)
    console.log(age)
    var name = 'Ngoc Pham'
    let age = 40

}
console.log(name)
var name = 'vi'

//console.log('sayhi', sayHi());



