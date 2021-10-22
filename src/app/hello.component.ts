import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>Hello I am kiran !</h1>
    <p>I am a FE developer in sapient</p>
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
  @Input() name: string;

  abc() {
    console.log('Hai I am abc function');
  }
}
