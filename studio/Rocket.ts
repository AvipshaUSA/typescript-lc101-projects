import {Cargo} from './Cargo'
import {Astronaut} from './Astronauts';
import {Payload} from './Payload';

export class Rocket{
    name : string;
    totalCapacityKg : number;
    cargoItems : Cargo[] =[];
    astronauts : Astronaut[]=[];
    constructor(name:string, totalCapacityKg : number){
      this.name = name;
      this.totalCapacityKg = totalCapacityKg;
    }

    //sumMass( items: Payload[] ): number
    //Returns the sum of all items using each item's massKg property
//a
    sumMass(items: Payload[]): number {
        let sum: number= 0;
        for(let i =0 ; i<items.length ; i++){
           
         sum += items[i].massKg;
        }  
        return sum;
    }
//return total;

   // canAdd(item: Payload): boolean
   // b Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
currentMassKg() : number {
    return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems)
}
//c
canAdd(item: Payload): boolean{
    return this.currentMassKg()+ item.massKg <= this.totalCapacityKg

}
//d
addCargo(cargo: Cargo): boolean{
if(this.canAdd(cargo)){
    this.cargoItems.push(cargo)
    return true;
}
return false;
}


//e
addAstronaut(astronaut: Astronaut): boolean{
if(this.canAdd(astronaut)){
    this.astronauts.push(astronaut)
    
    return true;

}
return false;

    }
}