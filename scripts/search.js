// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar() ;

let news= JSON.parse(localStorage.getItem("News"));
console.log(news)
// data.forEach(function(el){
//     let div = document.createElement("div");
//     div.setAttribute("class","news");
//     let img= document.createElement("img");
//     img.src= el.urlToImage;
//     let div2= document.createElement("div")
//     let p= document.createElement("h3");
//     p.innerText=el.title ;
//     let des= document.createElement("p");
//     des.innerText=el.description;
//     div2.append(p,des)
//     div.append(img,div2);
//     document.getElementById("results").append(div)
// })