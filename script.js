let btn = document.getElementById('button');
let input = document.getElementById('input');
let container = document.getElementById('ul');

btn.addEventListener('click',function(){
   if(input.value === ''){
   alert('Write Something Here');
   btn.style.backgroundColor = 'gray'
   }else{
    let li = document.createElement('li');
    li.innerHTML = input.value;
    container.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = 'X';
    li.appendChild(span)
    input.value = '';
    saveData()
    showData()
   }
})

container.addEventListener('click',function(dets){
   if(dets.target.tagName === 'SPAN'){
     dets.target.parentElement.remove()
   saveData()
   showData()
   }
})

function saveData(){
   localStorage.setItem('data',container.innerHTML)
}

function showData(){
   container.innerHTML = localStorage.getItem('data')
}

