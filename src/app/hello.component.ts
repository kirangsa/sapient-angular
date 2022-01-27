import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>Welcome to sapient interview</h1>
    <h2>Jaykumar Chaudhary</h2>

    <br>
    <p>******* Heros will be displayed Here ********</p>
    <br>

    <button>Add Hero</button>
  `,
})
export class HelloComponent {
  abc() {
    console.log('Hai I am abc function');
  }
}
