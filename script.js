document.querySelector("#push").onclick = function () {
  const input = document.querySelector("#newtask input");

  if (input.value.trim().length === 0) {
    alert("Please Enter Task");
  } else {
    document.querySelector('#tasks').innerHTML += `
      <div class="task">
        <span class="taskname">${document.querySelector('#newtask input').value}
        </span>
        <button class="delete"><i class="fa-regular fa-trash-can"></i></button>
      </div>
    `;

     var current_task = document.querySelectorAll(".delete");
     for(var i=0;i<current_task.length;i++){
        current_task[i].onclick = function(){
            this.parentNode.remove();
        }
     }

     var tasks = document.querySelectorAll('.task')
     for(var i=0;i<tasks.length;i++){
        tasks[i].onclick = function(){
            this.classList.toggle('completed');
        }
     }

     document.querySelector("#newtask input").value='';
  }
};
