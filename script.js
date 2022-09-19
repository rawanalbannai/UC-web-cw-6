function BMI(weight,height) {
    let BMI =  weight/ (height*height);
    return BMI;
}
console.log(BMI(weight,height));

function Status(bmi){
    if (bmi < 18.5){
        return "under weight"
    } 

		else if (bmi >= 18.5 && bmi < 25){
            return "normal"
        }
			

		else {
            return "over weight"
        }
}

function calculate(){
    let height = document.getElementById("#height").value;
    let weight = document.getElementById("#height").value;
}