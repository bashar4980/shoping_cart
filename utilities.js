function setQuantitiy(isIncrease , inputField){
    const quantityInputField = document.getElementById(inputField);
    const previousQuantity  = parseInt(quantityInputField.value) ;
    let currentQuantity ;
    if(isIncrease === true){
        currentQuantity = previousQuantity + 1 ;
    }else{
        currentQuantity = previousQuantity - 1 ;
    }
    quantityInputField.value = currentQuantity ;
    return currentQuantity ;
}

//

function totalPrice(productQuantity , product ,inputField){
    const productPrice = document.getElementById(product);
    if(productQuantity >= 0){
        let totalPrice = productQuantity * 59 ;
        if(product === 'casePrice'){
            totalPrice = productQuantity * 59 ;
        }else{
            totalPrice = productQuantity * 1219 ;
            
        }
       productPrice.innerText = totalPrice ;
     }
     else{
        const quantityInputField = document.getElementById(inputField);
        quantityInputField.value = 0
     }
}

function inputFieldValue(id){
    const PriceString = document.getElementById(id) ;
    const Price = parseInt(PriceString.innerText);
    return Price ;
}
function cartSection(){


    const mobilePrice = inputFieldValue("mobilePrice")
   
    const casePrice =inputFieldValue("casePrice")

   const total = mobilePrice + casePrice ;
   const subtotalString = document.getElementById("subtotal");
   
    subtotalString.innerText = total ;
    const subtotal =parseInt(subtotalString.innerText);
    

   const taxString= document.getElementById("tax") ;
   const tax = (subtotal * 0.1 ).toFixed(2); 
   taxString.innerText = tax ;
   const totalValuestring = document.getElementById("total")
   const totalValue = subtotal - tax ;   
   totalValuestring.innerText = totalValue ;
}