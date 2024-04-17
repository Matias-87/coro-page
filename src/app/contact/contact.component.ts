import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  copied = false;

  async copyEmail() {
    try {
      await navigator.clipboard.writeText('matuemendez89@gmail.com');
      this.copied = true;
    } catch (err) {
      console.error('Error al copiar en portapapeles: ', err);
      this.copied = false;
    }
  }
}
