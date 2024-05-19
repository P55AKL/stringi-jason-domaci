
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString('Abc123deF')); 

//Zadatak 2 
var niz = ['jabuka', 'banana', 'naranca', 'trešnja'];
    ln = niz.reduce((r,s) => r > s.length ? r : s.length, 0);

const result = niz.filter(pl => pl.length == ln);

console.log(result); 

//Zadatak 3 
function getFrequency(str) {
    return str.split('').reduce( (prev, curr) => {
      prev[curr] = prev[curr] ? prev[curr] + 1 : 1;
      return prev;
    }, {});
  };
  
  console.log(getFrequency('program'));
  