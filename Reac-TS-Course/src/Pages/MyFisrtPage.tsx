import React from 'react';
import './FirstPage.css'

function FirstPage() {

  let vNumber: number = 10;
  let vString: string = "new String";
  let vsArray: string[] = ["string 1", "string 2"];
  let vnArray: number[] = [1, 2, 3, 4];
  let duple: [number, string] = [1, "string"];

  //defines de type "Person"
  type Person = {
    name: string;
    age: number | string;
    hobbies?: string[];
    role?: string;
  }

  //Creates an instance of type Person
  let person: Person = {
    name: "Person name",
    age: "twenty two",
    hobbies: ["skate", "parkour", "code"],
    role: "Admin"
  };

  //add function
  let myFunction = (firstNumber: number, seconNumber: number): number => {
    let result: number = firstNumber + seconNumber;
    console.log(result);
    return result;
  };

  //add aspace between array elements
  let myHobbies = (list: string[]): string => {
    let result: string = "";
    for (let i = 0; i < list.length; i++) {
      if (i == list.length - 1) {
        result = result.concat(list[i]);
      } else {
        result = result.concat(list[i].concat(" "));
      }
    }
    return result;
  };

  //define two interfaces and creates an instance of one
  interface X {
    atribute?: string;
  }

  interface Y extends X {
    value: number;
  }

  let usingI: Y = {
    value: 123
  }
  



  return (
    <>
      <div className="text-warning mt-3 mx-3">
        My first react APP
        {" " + myFunction(10, 20)}
        <ul className="list-group mt-3" id="table">
          <li className="list-group-item">
            {person.name}
          </li>
          <li className="list-group-item">
            {person.age}
          </li>
          <li className="list-group-item">
            {person.hobbies!.join(' ')}
          </li>
          <li className="list-group-item">
            {person.role}
          </li>
        </ul>
      </div>
    </>
  )
}

export default FirstPage;
