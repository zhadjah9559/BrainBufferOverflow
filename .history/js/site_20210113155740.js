document.getElementById("btnSubmit").addEventListener("click", doJsWork)

hardCodedArray = [10, 15, 3, 7];
let numk = parseInt(document.getElementById("kInput").value)

function doJsWork(){
    for(let i = 0; i = hardCodedArray.length -1; i++){
        for (let j = 1; j < hardCodedArray.length; j++) {
            if( hardCodedArray[i] + hardCodedArray[j] == numk )
                output.innerText = `your num was found ${} {}
                break;
            
        }
    }    
}

//generate array of length that will contain 20 elements
//those 20 elements will all be random numbers 
function generateArray() {
    let ARRAY_LENGTH = 20                                   //parseInt(document.getElementById("arrayNum").value);
    let randomArray = []
    for (let i = 0; i < ARRAY_LENGTH; i++) {
        randomArray.push(Math.floor(Math.random() * 100) + 1)
    }
    return randomArray;
}

