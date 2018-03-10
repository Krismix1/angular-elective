import { Injectable } from '@angular/core';
import { Baby } from './entities/baby';
import { Babysitter } from './entities/babysitter';


@Injectable()
export class DataService {

  private babies: Baby[] = [
    {
      "firstName": "Oliver",
      "picture": "N/A",
      "postalCode": "2620",
      "age": 9,
      "gender": "Male"
    },
    {
      "firstName": "Alice",
      "picture": "http://google.com",
      "postalCode": "2000",
      "age": 12,
      "gender": "Female"
    }
    /*
    {
      "firstName": "",
      "picture": "",
      "postalCode": "",
      "age": 0,
      "gender": ""
    }
    */
  ];

  private babysitters: Babysitter[] = [
    {
      "firstName": "Hank",
      "lastName": "Aaron",
      "age": 19,
      "yearsOfExperience": 5,
      "region": "Copenhagen",
      "picture": "http://facebook.com",
      "gender": "Male",
      "phone": "+451234"
    },
    {
      "firstName": "Celaena",
      "lastName": "Sardothien",
      "age": 19,
      "yearsOfExperience": 3,
      "region": "Andarlan",
      "picture": "N/A",
      "gender": "Female",
      "phone": "+12390"
    }
    /*
    {
      "firstName": "",
      "lastName": "",
      "age": 0,
      "yearsOfExperience": 0,
      "region": "",
      "picture": "",
      "gender": "",
      "phone": ""
    }
    */
  ];

  constructor() { }

  getBabies(): Baby[] {
    return this.babies;
  }

  getBabysitters(): Babysitter[] {
    return this.babysitters;
  }

  addBaby(baby: Baby): void {
    this.babies.push(baby);
  }

  addBabysitter(babysitter: Babysitter): void {
    this.babysitters.push(babysitter);
  }

  deleteBaby(baby: Baby): void {
    let index = this.babies.findIndex(el => el.firstName == baby.firstName);
    this.babies.splice(index, 1);
    console.log(this.babies);
  }

  deleteBabysitter(babysitter: Babysitter): void {
    let index = this.babysitters.findIndex(el => el.firstName == babysitter.firstName);
    this.babysitters.splice(index, 1);
  }

  editBaby(baby: Baby): void {
    console.log("editing", baby);
  }

  editBabysitter(babysitter: Babysitter): void {
    console.log("editing", babysitter);
  }
}
