// le coeur ; le client aime le produit ou non
var like = document.querySelectorAll('#like');
var originalTextColor = window.getComputedStyle(like[0]).color;


window.addEventListener("scroll", ()=>{
    // if(window.innerHeight){
    //     console.log("ok");
    // }

    if(window.innerHeight>400){

        console.log("bienv");
    }
})

like.forEach(function(btn){
    btn.addEventListener('click',changeTextColor)
})

function changeTextColor() {
    if (this.style.color === 'red') {
        this.style.color = originalTextColor;
    } else {
        this.style.color = 'red';
    }
}
like.forEach(function(btn){
    btn.addEventListener('click',changeTextColor)
})

// Commander
var commander=document.querySelector('.commander')
function commande(){
    alert("Votre commande a bien été prise en compte , merci de votre fidelité")
}
commander.addEventListener('click',commande)


// bouton + ; bouton -;panier
var plus=document.querySelectorAll('.plus');
var moins=document.querySelectorAll('.moins');
var prix=document.querySelectorAll('.prix');
var resume=document.querySelectorAll('.resume');
var panierTotal = 0; 

function panier1(){
    let total=parseFloat(prix.textContent);
    panierTotal += total;
    resume.textContent=panierTotal+" $"
   
}
plus.forEach(function(somme){
somme.addEventListener()

}
)
if(plus){
    plus.addEventListener('click',panier1)
}
function panier2(){
    let total=parseFloat(prix.textContent);
    panierTotal -= total;
    if(panierTotal>=0){
       resume.textContent=panierTotal+" $"        
    }   
}
if(moins){
    moins.addEventListener('click',panier2)
}
var supprimer=document.querySelectorAll('.supprimer')
function supprime(){
        resume.textContent=panierTotal-panierTotal +" $"
}
supprimer.addEventListener('click',supprime);


