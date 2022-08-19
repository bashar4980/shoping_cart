
document.getElementById("phoneIncrease").addEventListener("click" , ()=>{
    
     const numberOfPhone = setQuantitiy(true , "phoneQuantity") ;
     totalPrice(numberOfPhone , "mobilePrice" ,"phoneQuantity") ;
     cartSection()

    
}) 

document.getElementById("phoneDecrease").addEventListener("click" , ()=>{
    const numberOfPhone = setQuantitiy(false , "phoneQuantity") ;
    totalPrice(numberOfPhone , "mobilePrice" ,"phoneQuantity") ;
    cartSection()

   
})