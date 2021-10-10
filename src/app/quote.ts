export class Quote {
    moreDetails:boolean;

    constructor(id:number, title:string, quote:string,author:string, datePosted:Date ){
        this.moreDetails=false;
    }
}
