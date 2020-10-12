function judgeVegetable(veg, met){
let best =0;
let i;
for (i=1; i<veg.length; i++){
      if (veg[i].met>veg[best].met){ best =i;}}
return best 
              }



const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'redness';

let n= judgeVegetable(vegetables, metric);
console.log(vegetables[n].submitter);

