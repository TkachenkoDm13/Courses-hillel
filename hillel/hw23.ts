class School implements ISchooFunctions  {
    
    constructor(public schoolName: string, public position: string, public salary: number){
        this.schoolName = schoolName;
        this.position = position;
        this.salary = salary;
    }
    
    public getPosSal (position, salary){
        return {
            position: this.position,
            salary:  this.salary
        }
    }

    public getMethodClassTs(schoolName): IGetMethodClassTs{
       return {
           schoolName: this.schoolName,
       } 
    }
}
interface IGetMethodClassTs{
    schoolName: string,
}

interface ISchooFunctions{
    getMethodClassTs(schoolName: string) : IGetMethodClassTs;
}

enum Positions {
    boss ='Vasia', 
    hrManager = 'Zina', 
    sales = 'Akakiy'
}