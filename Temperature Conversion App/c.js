/* 1. Getting Elements first */

//Error Messages
let inputError = document.getElementById('input-error');
let selectionError = document.getElementById('selection-error');

//Radio buttons
let celsius = document.getElementById('celsius-input');
let fahrenheit = document.getElementById('fahrenheit-input');

//Submit button
let ConvertBtn = document.getElementById('convert-btn');

//Dispalying result 
let Result = document.getElementById('Answer');


/* 2. Script for validation */

ConvertBtn.onclick = function(){

    let inputValue = document.getElementById('input-value').value;
    let ans;

    //when the page is loaded again the previous error messages must be erased from the screen. And to do it, this script is written.
    inputError.innerHTML = "";
    selectionError.innerHTML = "";
    Result.innerHTML = "Result";

        //checks whether user has inputed value or not.
        if(inputValue == "")
        {
            inputError.innerHTML = " * Enter units..";

        }
        
        inputValue = Number(inputValue); //as our input element is of type = text , thats is why we are converting it to number format.

        if(celsius.checked){
        
            //if user selects celsius unit
            ans = to_Celsius(inputValue).toLocaleString(undefined,{style: 'unit', unit:'celsius', minimumFractionDigits:2 , maximumFractionDigits:2})
        
        }else if(fahrenheit.checked){
            
            //Or if user selects fahrenheit unit
            ans = to_Fahrenheit(inputValue).toLocaleString(undefined, {style: 'unit', unit:'fahrenheit',minimumFractionDigits:2, maximumFractionDigits:2})
        
        }else{
            
            //Shows the error message because of not selecting the unit type
            selectionError.innerHTML = "* Error in selection.";
        }

        //Displaying Results
        if(ans == undefined){
            Result.innerHTML = "Result";
        }else{
            Result.innerHTML = ans;
        }

}

/* 3. Script for calculation */

//Function to convert the unit into celsius.
function to_Celsius(temp)
{
    return (temp - 32) * (5/9);
}

//Funtion to convert the unit into fahrenheit.
function to_Fahrenheit(temp)
{
    return temp * 9 / 5 + 32;
}