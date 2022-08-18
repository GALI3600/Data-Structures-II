const { performance } = require('perf_hooks');




let inputArr = []
var numbers = 100000
while(inputArr.length < numbers){
    var r = Math.floor(Math.random() * 100) + 1;
    inputArr.push(r)
}
function insertionSort(inputArr) {
    let n = inputArr.length;
    for (let i = 1; i < n; i++) {
        // Choosing the first element in our unsorted subarray
        let current = inputArr[i];
        // The last element of our sorted subarray
        let j = i-1; 
            console.log();
        while ((j > -1) && (current < inputArr[j])) {
            inputArr[j+1] = inputArr[j];
            j--;
        }
        inputArr[j+1] = current;
    }
    return inputArr;
}

    
var startTime = performance.now()
sec1 = (startTime/1000) % 60;
insertionSort(inputArr);
var endTime = performance.now()
sec2 = (endTime/1000) % 60;
    
    console.log(`${numbers} numeros em ${sec2 - sec1} segundos`)