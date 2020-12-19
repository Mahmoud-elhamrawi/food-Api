


var data;
var sel = document.getElementById("sel");



sel.addEventListener("change",function(e){
    var val = sel.value;
    gatdata(val);
})
gatdata('Pizza')
function gatdata(meal){
    var req = new XMLHttpRequest();
    req.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${meal}`);
    req.send();
    
    req.addEventListener("readystatechange", function () {
        if (req.readyState == 4 && req.status == 200) {
            data = JSON.parse(req.response).recipes;
            displayData();
        }
    })
}



function displayData() {
    var cartona = '';
    for (var i = 0; i < data.length; i++) {
        cartona += `
            <div class="col-md-4 my-5">
               <div class="content my-3 text-center">
                  <img src="`+ data[i].image_url + `" class="w-100"/>
                  <h3>`+ data[i].title + `</h3>
                  <p>social_rank :  `+ Math.round(data[i].social_rank) + `</p>
 <button class="btn btn-info"><a href="`+ data[i].source_url + `" target="_blank" class="text-white"> Visit Site</a>  </button>
<button class="btn btn-primary"><a class="text-white" target="_blank" href="detalis.html?rid=`+ data[i].recipe_id + `">Detalis</a></button>

               </div>
           </div>
        `
    }
    document.getElementById("rowData").innerHTML = cartona;
}





