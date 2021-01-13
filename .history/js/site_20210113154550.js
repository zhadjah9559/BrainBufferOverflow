document.getElementById("btnSubmit").addEventListener("click", doJsWork)



function doJsWork(){
    for(let i -0; i = ARRAY_LENGTH)

    
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

