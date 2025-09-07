
function add(click){
 event.preventDefault();
const input= document.getElementsByClassName("input")[0];
const save=document.getElementsByClassName("set-btn")[0];
const task=document.getElementById("new-task");


const addTask=input.value;
if(input.value==="") return;

const li = document.createElement("li");
li.innerText=addTask;
li.classList.add("li")

const delEte= document.createElement("button");
delEte.innerText="❌";
delEte.classList.add("del")

delEte.addEventListener("click",()=>{
    li.remove();
})

li.appendChild(delEte);

task.appendChild(li);
}