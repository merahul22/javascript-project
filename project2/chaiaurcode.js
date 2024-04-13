

  const form=document.queryselector('form')

form.addEventListener('submit',(e)=>{
e.preventDefault()

const height=parseInt(document.queryselector('#height').value)
const weight=parseInt(document.queryselector('#weight').value)

//height and weight should be a number not less than 0 or should not be a empty string as it is a falsy 
//or we can say that height and weight column shoukd not be empty
if(height<0 || height===''|| isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
} else if (weight === '' || weight < 0 || isNaN(weight)) {
  results.innerHTML = `Please give a valid weight ${weight}`;
} else {
  const bmi = (weight / ((height * height) / 10000)).toFixed(2); //used for precision upto two decimal points

  results.innerHTML = `<span>${bmi}</span>`;
}


})
