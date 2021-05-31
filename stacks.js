// class Node{
//     constructor(color, number, next=null){
//       this.color = color;
//       this.number = number;
//       this.next = next;
//     }
//     getData(){
//       return `${this.color} - ${this.number}`;
//     }
//   }
//   class stack{
//       constructor(limit){
//       this.limit = limit;
//       this.size = 0;
//       this.topNode = null;
//       }
//   }
// const charCount = () => {
//   let chart = 0;
//   const filtered = chart.filter(function (chart) {
//     return x === chart;
//   });
//   return filtered.length;
// };

// console.log(charCount[("a", "laila")]);

// function charCount(x, characters) {
//   const filtered = characters.filter(function (character) {
//     return x === character;
//   });
//   return filtered.length;
// }
// console.log(charCount("a", ["ahaha"]));
// function char_count(str, letter) {
//   let counter = 0;
//   for (let x = 0; x < str.length; x++) {
//     if (str.charAt(x) == letter) {
//       counter += 1;
//     }
//   }
//   return counter;
// }

// // console.log(char_count("lailaaa", "a"));
// function keysAndValues(obj, keys) {
//   return [
//     (let keys = Object.keys(obj)),
//     keys.map(function (k) {
//       return obj[k];
//     }),
//   ];
// }

// let result = keysAndValues({ k: 11, l: 12, m: 13 });

// console.log(keysAndValues());

function keysAndValues(data) {
  let keys = Object.keys(data),
    values = keys.map(function (key) {
      return data[key];
    });

  return [keys, values];
}

console.log(keysAndValues({ k: 11, l: 12, m: 13 }));
