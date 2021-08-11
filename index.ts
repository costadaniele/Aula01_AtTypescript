// Import stylesheets
import './style.css';

import { Person } from './person';

// Write TypeScript code!

let person = new Person('');

const appIntroduction: HTMLElement = document.getElementById(
  'app.introduction'
);
const appFullname: HTMLElement = document.getElementById('app.fullname');
const appAge: HTMLElement = document.getElementById('app.age');

appIntroduction.innerHTML = person.getIntrodution();
appFullname.innerHTML = person.getFullName();
appAge.innerHTML = person.getBirthdayYear();
