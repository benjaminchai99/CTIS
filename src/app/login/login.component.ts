import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector : 'app-header',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {username = new FormControl('', [Validators.required]);

hide = true;
getErrorMessage() {
  if (this.username.hasError('required')) {
    return 'You must enter a value';
  }
}
}

