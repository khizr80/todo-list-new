// var addb = document.getElementById("add");
// var remb=document.getElementById('remove')
var inputf=document.querySelector('#input')
var num=1;
inputf.addEventListener('keydown',function (e) {
    if(e.key=='Enter')
    {
        var input = document.getElementById("input").value;
        let newitem=document.createElement('div')
        newitem.className='item'
        let text=document.createElement('span')
        let newremb=document.createElement('button')
        let neweditb=document.createElement('button')
        neweditb.innerText='edit'
        neweditb.id=`${num+'e'}`
        text.id=`${num+'s'}`
        newremb.id=`${num+'r'}`
        newremb.innerText='remove'
        newremb.className='rem'
        neweditb.className='edi'
        text.className='spa'
        newremb.id=num
        newitem.appendChild(text)
        newitem.appendChild(neweditb)
        newitem.appendChild(newremb)
        text.innerText=input
        newitem.id=num
        num++;
        document.getElementById('list').append(newitem)
        
    }
})
// remb.addEventListener('click',function (e) {
//     snum=toString(num)
//    let elem=document.querySelectorAll('.item')
//    console.log(elem);
//    console.log(num);
//     elem[elem.length-1].remove()
//    num--;
    
// });
document.addEventListener('click',function (e) {
    if(e.target.className=='rem')
    {
        console.log(e.target.parentNode);
        e.target.parentNode.remove()
    }
})
document.addEventListener('click',function (e) 
{
    if(e.target.className=='edi')
    {
        nid=e.target.id.replace(/[^0-9]/g,"")
        id=nid+'s'
        spann=document.getElementById(id)
        txt=spann.innerText
        console.log(spann);
        spann.innerHTML=`<input onblur='spanReset(this,spann)'value='${txt}'id='${nid+'i'}' />`;
        document.getElementById(nid+'i').focus();
    }
})

function spanReset(e,obj) {
    let txt = e.value;
    let element = obj
    element.innerHTML = `<span > ${txt} </span>`;
  }


