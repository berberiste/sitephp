let moyenne = document.getElementById('moyenne')   
let mention = document.getElementById('mention')    
let miao1 = document.getElementById('miao1')            
let miao2 = document.getElementById('miao2')  

function lancer(){
    afaire()
let btn = document.getElementById('lanceur') 

    btn.style.opacity=0
    btn.style.zIndex=-2
}

function afaire(){
setTimeout(function(){
    document.querySelector('div').style.opacity=3
    miao1.style.left=0+'%'
    miao1.style.opacity='1'
},3000)

setTimeout(function(){
    miao2.style.left=60+'%'
    miao2.style.opacity='1'
},5000)



setTimeout(function(){
    moyenne.style.left=0+'%'
    moyenne.style.opacity='1'
},6500)
}
