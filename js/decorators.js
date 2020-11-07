function Frog(name) {
  this.name = name
}
Frog.prototype.getTeeths = function() {
  return 2
}
Frog.prototype.lick = function(target) {
  console.log(`I'm going lick you, ${target.name}. You better taste delicious`)
}

// Или с классами
// class Frog {
//   constructor(name) {
//     this.name = name
//   }
//   getTeeths() {
//     return 2
//   }
//   lick(target) {
//     console.log(
//       `I'm going lick you, ${target.name}. You better taste delicious`,
//     )
//   }
// }