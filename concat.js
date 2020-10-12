
function concat (myarr1, myarr2){
for (let i=0; i< myarr2.length; i++){
myarr1.push(myarr2[i]);
}
return myarr1;}
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]));

