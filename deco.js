


// le coeur ; le client aime le produit ou non
var like = document.querySelectorAll('#like');
var originalTextColor = window.getComputedStyle(like[0]).color;
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
var plus=document.querySelector('.plus');
var moins=document.querySelector('.moins');
var prix=document.querySelector('.prix');
var resume=document.querySelector('.resume');
var supprimer=document.querySelector('.supprimer')
var panierTotal = 0; 

// fonction associée au bouton+
function panier1(){
    let total=parseFloat(prix.textContent);
    panierTotal += total;
    resume.textContent=panierTotal+" $"
   
}

if(plus){
    plus.addEventListener('click',panier1)
}

// fonction associée au bouton -
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
// fonction associée au bouton supprimer
function supprime(){
        resume.textContent=panierTotal-panierTotal +" $"
}
supprimer.addEventListener('click',supprime);
