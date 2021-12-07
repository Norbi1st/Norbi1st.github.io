const countdown = document.querySelector(".countdown");





const interval = setInterval(()=>{





    const deadline = new Date(2021,12,1,12,00,00);

    const current = new Date();
    
    const diff = deadline - current;
    
    const days =Math.floor(diff/(1000*60*60*24));
    
    const hours =Math.floor((diff/(1000*60*60*24))%24);
    
    const minutes = Math.floor((diff/(1000*60))%60);
    
    const seconds =Math.floor((diff/1000)%60);
    
    
    
    countdown.innerHTML =`
    
    <div>${days}</div>
    <div>${hours}</div>
    <div>${minutes}</div>
    <div>${seconds}</div>
    
    `;
    



},1000);





//console.lo/,,,g(seconds);//
 //   `\ === '`' // -->     backticks (`)//

