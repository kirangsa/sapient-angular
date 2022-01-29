import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>Welcome to sapient interview</h1>

    <p>******* Users will be displayed Here ********</p>
    <br>

    <button>Show User</button>
  `,
})
export class HelloComponent {
  abc() {
    console.log('Hai I am abc function');
  }
}
