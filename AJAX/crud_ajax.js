const d = document,
 $table = d.querySelector(".crud-table"),
 $form = d.querySelector(".crud-form"),
 $title = d.getElementById("crud-title"),
 $template = d.getElementById("crud-template").content,
 $fragment = d.createDocumentFragment();

const ajax = option =>{
    let {url,method, success, error, data} = option;
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", (e)=>{
        if(xhr.readyState !==4) return

        if(xhr.status >= 200 && xhr.status < 300){
            let json = JSON.parse(xhr.responseText);
            success(json);
        } else{
            let message = xhr.statusText || "Ocurrió un error";
            error(`Error ${xhr.status}: ${message}`);
        }
    });

    xhr.open(method||"GET",url);
    xhr.setRequestHeader("Content-Type","application/json; charset=utf-8");
    xhr.send(JSON.stringify(data));
}

const getAll = () =>{
    ajax({
        method: "GET",
        url: "http://localhost:3000/gatos",
        success: (res) =>{
            res.forEach(el => {
                $template.querySelector(".name").textContent = el.nombre;
                $template.querySelector(".age").textContent = el.edad;
                $template.querySelector(".edit").dataset.id = el.id;
                $template.querySelector(".edit").dataset.name = el.nombre;
                $template.querySelector(".edit").dataset.age = el.edad;
                $template.querySelector(".delete").dataset.id = el.id;

                let $clone = d.importNode($template,true);
                $fragment.appendChild($clone);
            });

            $table.querySelector("tbody").appendChild($fragment);
        },
        error: (err) => {
            $table.insertAdjacentElement("afterend",`<p><b>${err}</b></p>`);
        },
        data: null
    })
}

d.addEventListener("DOMContentLoaded",getAll);

d.addEventListener("submit", e=>{
    if(e.target === $form){
        e.preventDefault();

        if(!e.target.id.value){
            ajax({
                url:"http://localhost:3000/gatos",
                method:"POST",
                success: (res) => location.reload(),
                error: () => $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
                data: {
                    nombre: e.target.nombre.value,
                    edad: e.target.edad.value
                }
            });
        }else{
            ajax({
                url:`http://localhost:3000/gatos/${e.target.id.value}`,
                method: "PUT",
                success: (res) => location.reload(),
                error: ()=> $form.insertAdjacentHTML("afterend",`<p><b>${err}</b></p>`),
                data:{
                    nombre : e.target.nombre.value,
                    edad: e.target.edad.value
                }
            });
        }
    }
});

d.addEventListener("click",e=>{
    if(e.target.matches(".edit")){
        $title.textContent = "Editar Gato";
        $form.nombre.value = e.target.dataset.name;
        $form.edad.value = e.target.dataset.age;
        $form.id.value = e.target.dataset.id;
    }

    if(e.target.matches(".delete")){
        let isDelete =  confirm(`¿Estás seguro de eliminar el id: ${e.target.dataset.id}`);

        if(isDelete){
            ajax({
                url: `http://localhost:3000/gatos/${e.target.dataset.id}`,
                method: "DELETE",
                success: (res) => location.reload(),
                error: (err) => alert (err)
            });
        }
    }
})