const getLastElement = function(array){
    return array[array.length - 1];
}

const nums = [10, 9, 6, 5];
const strs = ['t', 'm', 'u', 'z', 6, 'i'];
const strs2 = [['t','m','u'],['z',6,'i']]
const strs3 = [['t'],'m','u','z',6,['i']] 

// Question #4

const rainbowColors = [];
// push individually
rainbowColors.push('orange');
rainbowColors.push('red');
rainbowColors.push('yellow');

// push together
rainbowColors.push('green', 'blue', 'indigo', 'violet');


//length
rainbowColors.length;

// print scnd
console.log(rainbowColors[1]);

// print last item
console.log(rainbowColors[rainbowColors.length-1]);

// index of blue
console.log(rainbowColors.indexOf('blue'));

// Question #5

//declaration
const twoColors = rainbowColors.slice(1,6);

//declaration
const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];

//remove duplicates
nums.splice(3, 2);
nums.splice(4, 1);


// Question #6

//declaration
const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];

// access inner array first item
arrOfArrs[0][0]

// print third
arrOfArrs[1][arrOfArrs[1].indexOf('third')];