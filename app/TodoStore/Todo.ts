export class Todo{
     Description:string;
    Completed:boolean;
    
    constructor(description:string){
        this.Description=description;
        this.Completed=false;
    }
}