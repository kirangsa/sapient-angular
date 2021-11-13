import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>Anand Mishra !</h1>
    <p>Welcome to sapient interview</p>
    <button>Add Hero</button>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `,
  ],
})
export class HelloComponent {
  abc() {
    console.log('Hai I am abc function');
  }
}
