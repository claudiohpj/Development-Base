const arr = [1,2,3,4,5,6,7,8,9];

const filter = arr.filter(function(item){
    return item %2 === 0;
});

console.log(filter);