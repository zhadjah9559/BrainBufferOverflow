document.getElementById("btnSubmit").addEventListener("click", doJsWork)



function doJsWork(){
    

    let arrayInput = []; 

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
    }
}

//generate array of length that will contain 20 elements
//those 20 elements will all be random numbers 
function generateArray() {
    const ARRAY_LENGTH = 20                                   //parseInt(document.getElementById("arrayNum").value);
    const randomArray = []
    for (let i = 0; i < ARRAY_LENGTH; i++) {
        randomArray.push(Math.floor(Math.random() * 100) + 1)
    }
    return randomArray;
}

