let todo=document.querySelector("#input-box")


let list_container=document.querySelector("list-todo")
let todo_button=document.querySelector(".btn")
todo_button.addEventListener("click", function(){
    if(todo.value ===""){
        alert("You must write something!")
    }
    else{
    //    <div id="todo-holder">
    // <input type="checkbox" id="checkbox">
    // //      <h2 id= "todo-textHolder">hello from mirza</h2>
    // <i class="fa-solid fa-trash-can"></i>
    // //             </div> 
let todoList=document.querySelector(".list-todo")

        let todoHolder=document.createElement("div")
        todoHolder.setAttribute("id","todo-holder")

        let checkbox=document.createElement("input")
        checkbox.setAttribute("id","checbox")
        checkbox.setAttribute("type","checkbox")

        let todoText=document.createElement("h2")
        todoText.setAttribute("id","todo-textHolder")

        let icon=document.createElement("i")
        icon.setAttribute("class","fa-solid fa-trash-can",)
        // icon.setAttribute("#id","icon")

       
      

        todoText.innerText=todo.value;

       todoHolder.append(checkbox ) 
       todoHolder.append(todoText ) 
       todoHolder.append(icon) 
       todoList.append(todoHolder)
       todo.value=""
       debugger
       let currentTask=document.querySelectorAll(".fa-solid") 
       for (currentelement of currentTask){
         currentelement.onclick=function () {
            this.parentNode.remove()
         }
       }
       checkbox.addEventListener("click",function(){
        todoText.style.textDecoration="line-through"
       })
    }
  

})


