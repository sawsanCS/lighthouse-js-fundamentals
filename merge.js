function merge (myarr1, myarr2){

let myarr =[];
let count_1=0;
let count_2=0;
for (let count =0; count<myarr1.length+myarr2.length; count++)
{
if (myarr1[count_1]>myarr2[count_2]){
   myarr[count]=myarr2[count_2];
   count_2++;
}
else {
myarr[count]=myarr1[count_1];
   count_1++;}
}
return myarr;}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));

