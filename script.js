function addComment(){

let name=document.getElementById("name").value;
let text=document.getElementById("comment").value;

let li=document.createElement("li");

li.innerText=name+": "+text;

document.getElementById("list").appendChild(li);

}
