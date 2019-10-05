import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // Create FormGroup Instance
  registerForm: FormGroup;

  // Create User Instance 
  newUser: User;

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBulider: FormBuilder,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBulider.group({
      Username: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9._%+-]{1,}@[a-zA-Z0-9.-]{2,}[.]{1}[a-zA-Z]{2,}$")]],
      Password: ['', [Validators.required]],
      Gender: ['', [Validators.required]],
      ProfileImage: [''],
      BirthDate: ['']
    });
  }


  // onSubmit() {
  //   this.authService.registerClient(this.email, this.password)
  //     .then((res) => {
  //       this.flashMessagesService.show("New user registered", { cssClass: "alert-success", timeout: 4000 });
  //       this.router.navigate(["/"]);
  //     }).catch((err) => {
  //       this.flashMessagesService.show(err, { cssClass: "alert-danger", timeout: 4000 });
  //       this.router.navigate(["/register"]);
  //     });
  // }

  checkUsername(email: string) {

    console.log(this.authService.validateEmail(email));
  }

  register() {
    // Copy form data to instance of User.
    this.newUser = this.registerForm.value;

    // Register new User 
    let checkValidUsername = this.authService.registerUser(this.newUser);

    if (checkValidUsername == 0) {
      this.flashMessagesService.show("New user registered.", { cssClass: "alert-success", timeout: 4000 });
      this.router.navigate(["/login"]);
      localStorage.setItem(this.newUser.Email, JSON.stringify(this.newUser));
    }
    else {
      this.flashMessagesService.show("Email Already Exist.", { cssClass: "alert-danger", timeout: 4000 });
      this.router.navigate(["/register"]);
    }
  }

}
