



document.getElementById("caseIncrease").addEventListener("click" , ()=>{
   
    const currentCase =  setQuantitiy(true , 'caseNumber')
    totalPrice(currentCase , 'casePrice' , "caseNumber")

   cartSection()




   
});

document.getElementById("caseDecrease").addEventListener("click" , ()=>{
    const currentCase =  setQuantitiy(false , 'caseNumber')
    totalPrice(currentCase , 'casePrice' , 'caseNumber') ;

    cartSection()

    
   

   
})





