document.getElementById("btnSubmit").addEventListener("click", doJsWork)



function doJsWork(){
    //wire up all values
    let kInput = parseInt( document.getElementById("kInput").value )
    let arrayInput1 = parseInt( document.getElementById("arrayInput1").value )
    let arrayInput2 = parseInt( document.getElementById("arrayInput2").value )
    let arrayInput3 = parseInt( document.getElementById("arrayInput3").value )
    let arrayInput4 = parseInt( document.getElementById("arrayInput4").value )

    let arrayInput = []; 

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
    }
}

//generate array of numbers to evaluate 
function generateArray(len) {
    const ARRAY_LENGTH = 20                                   //parseInt(document.getElementById("arrayNum").value);
    const randomArray = [];
    for (let i = 0; i < ARRAY_LENGTH; i++) {
        randomArray.push(Math.floor(Math.random() * 100) + 1);
    }
    return randomArray;
}

