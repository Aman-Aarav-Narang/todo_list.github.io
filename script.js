

let todotext = document.getElementById("text");
let todolist = document.getElementById("todolist");
let add = document.getElementById("btn");
let text = document.getElementById("text");

add.addEventListener('click', function () {
    let list = document.createElement('li');
    let icon = document.createElement('button');
    // let icon1 = document.createElement('button');
    icon.style.float="right";
    icon.style.alignSelf="center";
    
    icon.innerText="Delete";
    
    // icon1.style.float="right";
    // icon1.style.marginRight="5px";
    // icon1.innerText="Alter";

    icon.value="delete";

    list.innerText = text.value;
    list.style.border='1px solid aliceblue ';
    list.style.margin='5px';
  
   
    list.style.padding='5px';

    if (text.value != 0) {
        console.log(text.value);
        todolist.appendChild(list);

        list.appendChild(icon);
        // list.appendChild(icon1);

        text.value = " ";
    }

    else {
        alert('Please add todo list');
    }

    icon.addEventListener('click' ,function(){

        list.remove();
    })

    // icon1.addEventListener('click' ,function(){

    //   prompt("Please change your list",list.innerText);
    // })


    
});


// console.log(text.value);
// console.log(text.value);
// todolist.appendChild(text);
// document.body.appendChild(text);
// list.appendChild(todolist);
            
// todolist.appendChild(list);
// document.body.appendChild(list);
           
// let todolist = document.getElementById("todolist");
// let box = document.getElementsByClassName("container");           
           
// console.log(list);
// console.log(text.value);
// for(let i=0;i<text.length;i++){
//  console.log(text.value);
            
//     console.log(i);
            
// }