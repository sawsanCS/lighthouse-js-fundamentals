
const instructorWithLongestName = function(instructors) {
  // Put your solution here
  let max ="";
  for (let i=0; i< instructors.length; i++){
  if (instructors[i].name.length> max.length){
  max = instructors[i].name;}
  }
  return instructors.name=max;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

