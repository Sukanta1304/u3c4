// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar() ;

let url="https://masai-mock-api.herokuapp.com/news/top-headlines?country=in";

fetch(url).then(function(res){
    return res.json();
}).then(function(res){
    let data= res.articles;
    append(data)
}).catch(function(err){
    console.log(err)
});

function append(data){
    data.forEach(function(el){
        let div = document.createElement("div");
        div.setAttribute("class","news");
        let img= document.createElement("img");
        img.src= el.urlToImage;

        let div2= document.createElement("div")
        let p= document.createElement("h3");
        p.innerText=el.title ;
        let des= document.createElement("p");
        des.innerText=el.description;
        div2.append(p,des)
        div.append(img,div2);
        document.getElementById("results").append(div)
    })
}
let categories = document.getElementById("sidebar").children;

function show(){
    let q= this.id;
    let url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${q}`
    fetch(url).then(function(res){
        return res.json()
    }).then(function(res){
        let data= res.articles;
        append(data)
    }).catch(function(err){
        console.log(err)
    });
    function append(data){
        document.getElementById("results").innerHTML= null;
        data.forEach(function(el){
            
            let div = document.createElement("div");
            div.setAttribute("class","news");
            let img= document.createElement("img");
            img.src= el.urlToImage;
    
            let div2= document.createElement("div")
            let p= document.createElement("h3");
            p.innerText=el.title ;
            let des= document.createElement("p");
            des.innerText=el.description;
            div2.append(p,des)
            div.append(img,div2);
            document.getElementById("results").append(div)
        })
    }


}
for(let el of categories){
    el.addEventListener("click",show)
}



let search=(e)=>{
    if(e.key==="Enter"){
        let value = document.getElementById("search_input").value ;

        let link = `https://masai-mock-api.herokuapp.com/news?q=${value}`
        
        fetch(link).then(function(res){
            return res.json()
        }).then(function(res){
            let data= res.articles
            localStorage.setItem("news",JSON.stringify(data))
        }).catch(function(err){
            console.log(err)
        });
        window.location.href="search.html"
    }
}
document.getElementById("search_input").addEventListener("keydown",search)


