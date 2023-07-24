let show=document.getElementsByClassName("show");
let solution=document.getElementsByClassName("solution");



    for(let i=0;i<10;i++){
        show[i].addEventListener('click', function(e){
            if (solution[i].style.display=="block") {
                solution[i].style.display="none";
            } else {
                solution[i].style.display="block";
            }
                
        })
        
        // console.log(solution[i]);
        // solution[i].style.display="block";
    }
