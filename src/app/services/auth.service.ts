import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Instance to store parsed localStorage object.
  parsedRegisterUser: User;
  parsedLoginUser: User;

  // Check if Email Exist or not 
  validateEmail(email: string) {
    // Get User from localStorage by email key.
    var user = localStorage.getItem(email);
    // Parse localStorage object to User type.
    this.parsedRegisterUser = JSON.parse(user);
    // check if email exist or not 
    if (this.parsedRegisterUser == null) {
      // 0 means email not exist
      return 0;
    }
    else {
      // -1 means email exist
      return -1;
    }
  }


  registerUser(newUser: User) {
    return this.validateEmail(newUser.Email);
  }

  

  // Validate login data
  checkLoginData(email: string, password: string) {
    // Get User from localStorage by email key.
    var loginUser = localStorage.getItem(email);
    // Parse localStorage object to User type.
    this.parsedLoginUser = JSON.parse(loginUser);
    // check if user login success or not
    if (this.parsedLoginUser != null) {
      if (this.parsedLoginUser.Password == password) {
        // Login success
        return 0;
      } else {
        // Login failed
        return -1;
      }
    }
  }

  loginUser(email: string, password: string) {
    return this.checkLoginData(email, password);
  }

}
