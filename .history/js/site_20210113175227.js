    // document.getElementById("btnSubmit").addEventListener("click", doJsWork)

    // hardCodedArray = [10, 15, 3, 7];
    // let numk = parseInt(document.getElementById("kInput").value)
    // let found = false;

    // //Regular program that is working without extra credit
    // function doJsWork(){
    //     for(let i = 0; i = hardCodedArray.length -1; i++){
    //         for (let j = 1; j < hardCodedArray.length; j++) {
    //             if( hardCodedArray[i] + hardCodedArray[j] == numK ){
    //                 output.innerText = `Your number was found! ${hardCodedArray[i]} + ${hardCodedArray[j]} = ${numK}`
    //                 found = true;
    //                 break;
    //             }
    //         }
    //     }
    //     if(!found){
    //         output.innerText = `Your number was not found!`
    //     }
    // }

    //-----------------------------------------------------------------------------------
    //Extra credit
    let numK = document.getElementById("kInput");
    let results = document.getElementById("output");
    let userArray = []
    let ARRAY_SIZE = 4
    document.getElementById("submitBtn").addEventListener("click", evaluateUserInput);
    /*
    Eaiser way to 
    */

  

    function evaluateUserInput(){
               //initialize the user inputs using a for loops
               for (let i = 0; i < ARRAY_SIZE; i++) {
                userArray[i] = document.getElementById(`${arrayInput[i]}`)
            }
    
            for(let i = 0; i = userArray.length -1; i++){
                for (let j = 1; j < userArray.length; j++) {
                    if( userArray[i] + userArray[j] == numK ){
                        output.innerText = `Your number was found! ${userArray[i]} + ${userArray[j]} = ${numK}`
                        found = true;
                        break;
                    }
                }
            }
            if(!found){
                output.innerText = `Your number was not found!`
            }
    }
    

    //generate array of length that will contain 20 elements
    //those 20 elements will all be random numbers 
    // function generateArray() {
    //     let ARRAY_LENGTH = 20                                   //parseInt(document.getElementById("arrayNum").value);
    //     let randomArray = []
    //     for (let i = 0; i < ARRAY_LENGTH; i++) {
    //         randomArray.push(Math.floor(Math.random() * 100) + 1)
    //     }
    //     return randomArray;
    // }

