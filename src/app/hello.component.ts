import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>Welcome to sapient interview</h1>
    <h2>Aniket Sharma</h2>
    <p></p>
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
