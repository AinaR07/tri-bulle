//tri par fusion
// tri a bulle, ramassage aleatoire.



function bulle(tableau) {
    for (let i=0; i<tableau.length-1; i++){
        if(tableau[i] > tableau[i+1]){
            let p = tableau[i];
            tableau[i] = tableau[i+1];
            tableau[i+1] = p;
        }
    }return tableau; 
}
let tableau = [ 5, 4 , 3 , 1]
console.log(bulle(tableau));
