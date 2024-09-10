// https://api.edamam.com/api/nutrition-data?app_id=a475dabc&app_key=%20fa4836209297e866ee6c7c3517dc32dd&nutrition-type=cooking&ingr=1%20orange

const api={
    base:'https://api.edamam.com/api/nutrition-data?',
    id : 'a475dabc',
    key: 'fa4836209297e866ee6c7c3517dc32dd'
}

const  Name=document.getElementById("name")
const  errorMsg=document.getElementById("error-msg")


Name.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        getNutritionData();
    }
})

async function getNutritionData() {
    try {
      const response = await fetch(`https://api.edamam.com/api/nutrition-data?app_id=${api.id}&app_key=${api.key}&nutrition-type=cooking&ingr=${Name.value}`);
      const data = await response.json();
      console.log(data);

      document.getElementById('calorie').innerHTML=data.calories
      document.getElementById('Total-fat').innerHTML=data.totalNutrients.FAT.quantity.toFixed(1)
      document.getElementById('Saturated-fat').innerHTML=data.totalNutrients.FASAT.quantity.toFixed(1)
      document.getElementById('Trans-fat').innerHTML=data.totalNutrients.FATRN.quantity.toFixed(1)
      document.getElementById('Cholesterol').innerHTML=data.totalNutrients.CHOLE.quantity.toFixed(1)
      document.getElementById('Sodium').innerHTML=data.totalNutrients.NA.quantity.toFixed(1)
      document.getElementById('Total-carbohydrates').innerHTML=data.totalNutrients.CHOCDF.quantity.toFixed(1)
      document.getElementById('Dietary-fiber').innerHTML=data.totalNutrients.FIBTG.quantity.toFixed(1)
      document.getElementById('Sugars').innerHTML=data.totalNutrients.SUGAR.quantity.toFixed(1)
      document.getElementById('Protein').innerHTML=data.totalNutrients.PROCNT.quantity.toFixed(1)
      document.getElementById('Vitamin-D').innerHTML=data.totalNutrients.VITD.quantity.toFixed(1)
      document.getElementById('Calcium').innerHTML=data.totalNutrients.CA.quantity.toFixed(1)
      document.getElementById('Iron').innerHTML=data.totalNutrients.FE.quantity.toFixed(1)
      document.getElementById('Potassium').innerHTML=data.totalNutrients.K.quantity.toFixed(1)

// --------------- percent ---------------------
      
      document.getElementById('Total-fat-percent').innerHTML=data.totalDaily.FAT.quantity.toFixed(0)
      document.getElementById('Saturated-fat-percent').innerHTML=data.totalDaily.FASAT.quantity.toFixed(0)
      document.getElementById('Cholesterol-percent').innerHTML=data.totalDaily.CHOLE.quantity.toFixed(0)
      document.getElementById('Sodium-percent').innerHTML=data.totalDaily.NA.quantity.toFixed(0)
      document.getElementById('Total-carbohydrates-percent').innerHTML=data.totalDaily.CHOCDF.quantity.toFixed(0)
      document.getElementById('Dietary-fiber-percent').innerHTML=data.totalDaily.FIBTG.quantity.toFixed(0)
      document.getElementById('Protein-percent').innerHTML=data.totalDaily.PROCNT.quantity.toFixed(0)
      document.getElementById('Vitamin-D-percent').innerHTML=data.totalDaily.VITD.quantity.toFixed(0)
      document.getElementById('Calcium-percent').innerHTML=data.totalDaily.CA.quantity.toFixed(0)
      document.getElementById('Iron-percent').innerHTML=data.totalDaily.FE.quantity.toFixed(0)
      document.getElementById('Potassium-percent').innerHTML=data.totalDaily.K.quantity.toFixed(0)


      document.getElementById('Qty').innerHTML=data.ingredients[0].parsed[0].quantity
      document.getElementById('Unit').innerHTML=data.ingredients[0].parsed[0].measure
      document.getElementById('Food').innerHTML=data.ingredients[0].parsed[0].food
      document.getElementById('Kcal').innerHTML=data.calories.toFixed(2)
      document.getElementById('Weight').innerHTML=data.ingredients[0].parsed[0].weight

      document.getElementById('Name-box').style.display='block'
      document.getElementById('nutrition-box').style.display='block'


      errorMsg.innerText=''


    } catch (error) {
      console.error('Error:', error);
      errorMsg.innerText='We cannot calculate the nutrition for some ingredients. Please check the ingredient spelling or if you have entered a quantities for the ingredients.'
    }
  }
  
