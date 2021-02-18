const d = document;

export default function darkTheme(btn,classDark){

    const $themeBtn = d.querySelector(btn),
     $selector = d.querySelectorAll("[data-dark]"); 
    
    console.log($selector);

    let moon = "🌙",
     sun = "☀️";

     d.addEventListener("click",e=>{
        if(e.target.matches(btn)){
            console.log($themeBtn.textContent)
            if($themeBtn.textContent === moon){
                $selector.forEach(el =>{
                    el.classList.add(classDark);
                });
                $themeBtn.textContent = sun;
            } else{
                $selector.forEach(el =>{
                    el.classList.remove(classDark);
                });
                $themeBtn.textContent = moon;
            }
        }
     });
}