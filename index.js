let closedface = document.querySelector(".closed");
let openface = document.querySelector(".open");


closedface.addEventListener("click", function(){
    if(openface.classList.contains("open")){
        openface.classList.add('active');
        closedface.classList.remove('active');
    }  
})

openface.addEventListener("click", function(){
    if(closedface.classList.contains("closed")){
        closedface.classList.add('active')
        openface.classList.remove('active');
    }  
})

