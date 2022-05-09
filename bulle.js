//tri par fusion
// tri a bulle, ramassage aleatoire.



function bulle(tab) {
    for (let i=0; i<tab.length-1; i++){
        if(tab[i] > tab[i+1]){
            let p = tab[i];
            tab[i] = tab[i+1];
            tab[i+1] = p;
        }
    }return tab; 
}
let tab = [ 5, 4 , 3 , 1]
console.log(bulle(tab));
