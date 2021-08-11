export class Person {
  firstname: string;
  middlename: string;
  lastname: string;
  age: number;

  constructor(message: string) {
    this.firstname = 'José';
    this.middlename = 'Fulano';
    this.lastname = 'de Tal';
    this.age = 33;
  }

  getFullName() {
    return ` Nome Completo: ${this.firstname} ${this.middlename} ${
      this.lastname
    }`;
  }

  getIntrodution() {
    return `Descrição de Perfil:`;
  }

  getBirthdayYear() {
    return `Idade: ${this.age}`;
  }
}
