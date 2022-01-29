import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>Welcome to sapient interview</h1>

    <p>******* Heros will be displayed Here ********</p>
    <br>

    <button>Show Hero</button>
  `,
})
export class HelloComponent {
  abc() {
    console.log('Hai I am abc function');
  }
}
