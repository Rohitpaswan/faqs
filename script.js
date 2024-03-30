 
 document.querySelectorAll('.accordion-container').forEach(accordion =>{
    const btn = accordion.querySelector('.btn');
    console.log(btn);
    const ans = accordion.querySelector('.ans');
    const plus = accordion.querySelector(".plus");
     const minus = accordion.querySelector(".min");
    btn.addEventListener("click" ,(e) =>{

        //close other acco
       


        if (plus.style.display !== "none") {
            plus.style.display = "none";  // Hide the plus element
            minus.style.display = "block";  // Show the minus element
            ans.style.display ="block"
            ans.style.maxHeight = ans.scrollHeight + 'px'
             // Hide the answer
          } else {
            plus.style.display = "block";  // Show the plus element
            minus.style.display = "none";  // Hide the minus element
            ans.style.display ="none"
          }     
    })

 })


 
      // Select the next sibling element which is the answer
 
   