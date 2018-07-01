export class Ingredient {

    constructor(private name:string,private amount: number){}

    getName(){
        return this.name;
    }

    getAmount(){
        return this.amount;
    }
}