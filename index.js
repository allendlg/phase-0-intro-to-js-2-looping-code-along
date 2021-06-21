//const names = [ 'Lisa', 'Kaitlin', 'Jan' ];
//const event = 'surprise';
let newArr = [];
function writeCards(names, event) {
  for (let i = 0; i < names.length; i++) {
    newArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    debugger;}
  

    return newArr;
  
}
function countDown(num) {
    let loop = num
    while (loop >= 0) {
        console.log(loop--);
    }
}