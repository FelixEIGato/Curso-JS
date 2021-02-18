const d=document,
 w = window;

export default function scrollTopButton(btn){
    const $scrollBtn = d.querySelector(btn);

    
    w.addEventListener("scroll",e=>{
        
        let scrollTop = w.pageYOffset || d.scrollTop;

        if(scrollTop > 600){
            d.querySelector(btn).classList.remove("hidden");
        }else{
            d.querySelector(btn).classList.add("hidden");
        }
       // console.log(w.pageYOffset, d.documentElement.scrollTop);
        
    });
    d.addEventListener("click",e=>{
        if(e.target.matches(btn)){
            w.scrollTo({
                behavior: "smooth",
                top: 0
            });
        }
    });
}