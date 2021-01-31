import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in-component',
  templateUrl: './sign-in-component.component.html',
  styleUrls: ['./sign-in-component.component.scss']
})
export class SignInComponentComponent implements OnInit {

  userForm: FormGroup;

  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      name: '',
      password: ''
    });
  }

  onSubmitForm() {
    const formValue = this.userForm.value;
    this.userService.connect({
      name: formValue.name,
      password: formValue.password
    }).subscribe((isConnected) => {
        if (isConnected) {
          this.router.navigate(['/']);
        } else {
          this.errorMessage = 'Erreur lors de la connexion';
        }
      }
    );
  }

}
