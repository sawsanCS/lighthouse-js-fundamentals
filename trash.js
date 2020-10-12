
const smartGarbage = function (trash, bins) {
  // Your code in here ...
  if (trash === "recycling"){
    bins[0]++

  }
  else if (trash === "waste"){
    bins[1]++
  }
  else if (trash === "compost"){
    bins[2]++
  }
  else console.log ("error");
  
  return bins
}

var garbage ={ trashG: "recycling", binsG: [recycling: 3, waste: 5, compost:2]};
console.log(smartGarbage( garbage.trashG, garbage.binsG));
