function RandomPieceGenerator(){
    Math.seed
    this.bag = ['O', 'J', 'L', 'Z', 'S', 'T', 'I'];
    this.shuffleBag();
    this.index = -1;
};

RandomPieceGenerator.prototype.nextPiece = function(){
    this.index++;
    if (this.index >= this.bag.length){
        this.shuffleBag();
        this.index = 0;
    }
    return createMatrix(this.bag[this.index]);
};

RandomPieceGenerator.prototype.shuffleBag = function() {
    var currentIndex = this.bag.length
        , temporaryValue
        , randomIndex
        ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = this.bag[currentIndex];
        this.bag[currentIndex] = this.bag[randomIndex];
        this.bag[randomIndex] = temporaryValue;
    }
}
