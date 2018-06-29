export class Pokemon{
    public description: string;
    public imagePath: string;

    private name: string;

    constructor(name: string, desc: string, imgPath: string){
        this.name = name;
        this.description = desc;
        this.imagePath = imgPath;
    }

    public getName(){
        return this.name;
    }
}