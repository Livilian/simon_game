function SimonGame (){
  this.colors = ["blue", "red", "orange", "purple"];
  this.sequence = [];
  this.round = 1;
  this.userAnswer = [];
  // this.userClickCount = 0;
  this.startGame = function(){
    createRandomColor();
    checkUserAnswer();
    nextRound();
  };
}

SimonGame.prototype.createRandomColor = function () {
  this.sequence.push(this.colors[Math.floor(Math.random()*this.colors.length)]);
};





// console.log(simon.createRandomColor());
