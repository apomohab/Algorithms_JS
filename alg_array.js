var tab = new Array(16, 9, 86, 48, 59, 2, 78, 240, 18);
// default
var min = tab[0];
var max = tab[0];
 
for (var i = 0; i < tab.length; i++) {
     
    if (min > tab[i]) {
        min = tab[i];
    }
   
    if (max < tab[i]) {
        max = tab[i];
    }
}
 
console.log("Min = " + min + ", Max = " + max);