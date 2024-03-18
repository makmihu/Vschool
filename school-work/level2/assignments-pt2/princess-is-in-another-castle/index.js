class player{
    // totalCoins = 0;
    // hasStar = false;
    constructor(name, totalCoins, status, hasStar){
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
    };
    setName(){

    };
    gotHit(){

    };
    gotPowerup(){

    };
    addCoin(){

    };
    print(){
        console.log(`Name:${this.name}
Status:${this.status}
Total Coins: ${this.totalCoins}`
        );
        if(this.hasStar === true){
            console.log(`You have a star`);
        };
    };
}
const player1 = new player("Mario", 0, "small", false)
const player2 = new player("Luigi", 0, "small", false)
player1.print()