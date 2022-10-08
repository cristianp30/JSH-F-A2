import { runCode } from "./exercise";

describe("tests", () => {
  it("should return an array with the names", () => {
    const array = [
      {
      name: 'Nicolas',
      lastName: 'Molina',
      age: 28
    },
    {
      name: 'Valentina',
      lastName: 'Molina',
      age: 19
    }
  ];
    const rta = runCode(array);
    expect(rta).toEqual(['Nicolas', 'Valentina']);
  });

 it("should return an array with the names", () =>{
  const array = [
    {
      name: 'camilo', 
      lastName: 'suarez',
      age: 20
    },
    {
      name: 'nicolas',
      lastName: 'molina', 
      age: 28
    },
    {
      name: 'cristian', 
      lastName: 'parra',
      age: 20
    }
  ];
  const rta = runCode(array);
    expect(rta).toEqual(['camilo', 'Nicolas', 'cristian']);
 });

 it("should return an array with the names", () => {
  const array =[

  ];
  const rta = runCode(array);
    expect(rta).toEqual([]);
 });
});
