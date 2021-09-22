export class Employee {
  employeeId: number;
  firstName: string;
  lastName: string;


  constructor(id: number, firsName: string, lastName: string) {
    this.employeeId = id;
    this.firstName = firsName;
    this.lastName = lastName;
  }
}
