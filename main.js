let table=document.querySelector('.content');
function getpost(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        headers: {
            accept:'application/json'
        }
    })

.then(res => res.json())
.then(j => {
    if(j.length>0){
        temp=''
    }

for(let i=0;i<j.length;i++){
    temp+='<tr>';
    temp+='<td>'+j[i].userId+'</td>'
    temp+='<td>'+j[i].id+'</td>'
    temp+='<td>'+j[i].title+'</td>'
    temp+='<td>'+j[i].body+'</td>'
    table.innerHTML=temp;
}
}
)
}
getpost()




