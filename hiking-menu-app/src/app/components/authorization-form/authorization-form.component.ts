import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Authorization } from 'src/app/common/models/interfaces';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-authorization-form',
  templateUrl: './authorization-form.component.html',
  styleUrls: ['./authorization-form.component.scss']
})
export class AuthorizationFormComponent implements OnInit {

  @Output() close = new EventEmitter<any>();

  public authForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)])
  })

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    localStorage.clear()
  }

  public login() {
    let isValid = true;
		Object.keys(this.authForm.controls).forEach((key) => {
			if (this.authForm.controls.hasOwnProperty(key)) {
				const control = this.authForm.controls[key];
				control.markAsTouched({onlySelf: true});
				control.markAsDirty({onlySelf: true});
			}

			if (this.authForm.controls[key].status === 'INVALID') {
				isValid = false;
			}
		});

    if (isValid) {
      const controls = this.authForm.controls;

      const authData: Authorization = {
        username: controls.email.value,
        password: controls.password.value
      }

      this.authService.logIn(authData)
        .subscribe((res) => {
          localStorage.setItem('token', res.access_token)
          this.close.emit({state: false});
          this.router.navigateByUrl('/about-me')
        })
    }
  }

}
