const d = document,
 n = navigator;
export default function webCam(id){
    const $video = d.getElementById(id);
    //console.log(n.mediaDevices.getUserMedia)

    if(n.mediaDevices.getUserMedia){
        n.mediaDevices
         .getUserMedia({video:true,audio:false})
         .then(strem=>{
             console.log(strem);
             $video.srcObject = strem;
             $video.play();
         })
         .catch(err=>{
            $video.insertAdjacentHTML(
                "beforebegin",
                `<p><mark>${err}</mark></p>`
            );
            console.log(err)
            });
    }
}