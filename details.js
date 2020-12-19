

var q = new URLSearchParams(location.search);
var cid = q.get('rid');
var alldata;
var detalisdata = [];
var imgsrc = document.getElementById("imgsrc");
var tit = document.getElementById("tit")
var rank = document.getElementById("rank");
var urlpublisher = document.getElementById("urlpublisher");
var myUl = document.getElementById("myUl")

// document.getElementById("ff").innerHTML = cid;

var req = new XMLHttpRequest();
req.open("GET", `https://forkify-api.herokuapp.com/api/get?rId=${cid}`);
req.addEventListener("readystatechange", function (e) {

    if (req.readyState == 4 && req.status == 200) {
        alldata = JSON.parse(req.response).recipe;
        detalisdata = alldata.ingredients;
        imgsrc.setAttribute("src", alldata.image_url)
        tit.innerHTML = alldata.title;
        rank.innerHTML = "Socail-Rank :" + " " + alldata.social_rank;
        dis();
    }
})

req.send();

function dis() {
    var cart = ``;
    for (var i = 0; i < detalisdata.length; i++) {

        cart += `<dd>${detalisdata[i]}</dd>`;
    }
    myUl.innerHTML =` <dt>Components :-</dt>`+" "+ cart;
}
