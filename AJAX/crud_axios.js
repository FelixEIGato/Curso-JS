
const d = document,
 $table = d.querySelector(".crud-table"),
 $form = d.querySelector(".crud-form"),
 $title = d.getElementById("crud-title"),
 $template = d.getElementById("crud-template").content,
 $fragment = d.createDocumentFragment();

const getAll = async () =>{
    try {
        let res = await axios.get("http://localhost:3000/gatos"),
         json = await res.data;

         json.forEach( el =>{
            $template.querySelector(".name").textContent = el.nombre;
            $template.querySelector(".age").textContent = el.edad;
            $template.querySelector(".edit").dataset.id = el.id;
            $template.querySelector(".edit").dataset.name = el.nombre;
            $template.querySelector(".edit").dataset.age = el.edad;
            $template.querySelector(".delete").dataset.id = el.id;

            let $clon = d.importNode($template,true);
            $fragment.appendChild($clon);
        });

        $table.appendChild($fragment);
    } catch (error) {
        let message = error.statusText || "Ocurrió un error";
        $table.insertAdjacentHTML("afterend", `<p><b>${error.status}: ${message}</b></p>`)
    }
}


d.addEventListener("DOMContentLoaded",getAll);

d.addEventListener("submit", async e =>{
    if(e.target === $form){
        e.preventDefault();
        if(!e.target.id.value){
            //Create - POST
            try {
                let options = {
                    method: "POST",
                    headers: {
                        "Content-Type" : "application/json; charset=utf-8"
                    },
                    data: JSON.stringify({
                        nombre: e.target.nombre.value,
                        edad: e.target.edad.value
                    })
                },
                 res = await axios("http://localhost:3000/gatos",options),
                 json = await res.data;

                 location.reload();
            } catch (error) {
                let message = error.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML("afterend", `<p><b>${error.status}: ${message}</b></p>`)
            }
        }else{
            try {
                let options = {
                    method: "PUT",
                    headers: {
                        "Content-Type" : "application/json; charset=utf-8"
                    },
                    data: JSON.stringify({
                        nombre: e.target.nombre.value,
                        edad: e.target.edad.value
                    })
                },
                 res = await axios(`http://localhost:3000/gatos/${e.target.id.value}`,options),
                 json = await res.data;
                 
                 location.reload();
            } catch (error) {
                let message = error.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML("afterend", `<p><b>${error.status}: ${message}</b></p>`)
            }
        }
    }
});

d.addEventListener("click", async e=>{
    if(e.target.matches(".edit")){
        $title.textContent = "Editar Gato";
        $form.nombre.value = e.target.dataset.name;
        $form.edad.value = e.target.dataset.age;
        $form.id.value = e.target.dataset.id;
    }

    if(e.target.matches(".delete")){
        let isDelete =  confirm(`¿Estás seguro de eliminar el id: ${e.target.dataset.id}`);

        if(isDelete){
            try {
                let options = {
                    method: "DELETE",
                    headers: {
                        "Content-Type" : "application/json; charset=utf-8"
                    },
                },
                 res = await axios(`http://localhost:3000/gatos/${e.target.dataset.id}`,options),
                 json = await res.data;
                 
                 location.reload();
            } catch (error) {
                let message = error.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML("afterend", `<p><b>${error.status}: ${message}</b></p>`)
            }
        }
    }
})
