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
document.addEventListener('click',function (e) {
    if(e.target.className=='rem')
    {
        e.target.parentNode.remove()
    }
})

function addPropertyOnBlur(obj,nid)
{
    text=obj.value
    spann=document.createElement('span')
    spann.innerText=text
    spann.id=`${id}`
    spann.className='spa'
    obj.parentNode.insertBefore(spann, obj);
    obj.remove()
}

document.addEventListener('click',function (e) 
{
    if(e.target.className=='edi')
    {
        nid=e.target.id.replace(/[^0-9]/g,"")
        id=nid+'s'
        spann=document.getElementById(id) 
        txt=spann.innerText
        inp=document.createElement('input')
        inp.value=txt
        spann.parentNode.insertBefore(inp, e.target);
        spann.remove()
        inp.setAttribute('onblur', 'addPropertyOnBlur(this,nid)');
        inp.focus()
    }
})
