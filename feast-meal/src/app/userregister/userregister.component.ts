import { Component, OnInit } from '@angular/core';
import { last } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService } from '../service/account.service';



@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {

    form: FormGroup;
    loading = false;
    submitted = false;
  
  constructor( private formBuilder: FormBuilder, private route: ActivatedRoute,
    private router: Router, private AccountService:AccountService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  get f() 
  { 
    return this.form.controls;
  }

  onSubmit() 
  {
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.form.invalid) {
          return;
  }

      this.loading = true;
      this.AccountService.register(this.form.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.alertService.success('Registration successful', { keepAfterRouteChange: true });
                  this.router.navigate(['../login'], { relativeTo: this.route });
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }
}

