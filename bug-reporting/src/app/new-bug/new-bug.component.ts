import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { BugService } from 'src/services/bug.service';

@Component({
  selector: 'app-new-bug',
  templateUrl: './new-bug.component.html',
  styleUrls: ['./new-bug.component.css']
})
export class NewBugComponent implements OnInit {


  form!: FormGroup;

  constructor(private bugService: BugService, private router: Router) {
  }

  ngOnInit(): void {
    this.setFormInitialValues();
    this.form.controls['reporter'].valueChanges.subscribe(value => {
      if (value === 'QA') {
        this.form.controls['status'].setValidators([Validators.required]);
        this.form.controls['status'].updateValueAndValidity();
        this.form.controls['status'].markAsTouched()
      } else {
        this.form.controls['status'].clearValidators();
        this.form.controls['status'].updateValueAndValidity();
      }
    });
  
  }

  private setFormInitialValues() {
    this.form = new FormGroup<any>({

      title: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      priority: new FormControl("", Validators.required),
      reporter: new FormControl("", Validators.required),
      status: new FormControl(),
      created: new FormControl(new Date)
    }
    );

  }


  customValidator() {
    return (control: any) => {
      if (!control.parent) return null;

      let reporter = this.form.get('reporter')?.value;
      return reporter == 'QA' && !control.value ? { required: true } : null;
    };
  }

  // customValidatorForm() {
  //   return (form: FormGroup) => {
  //     const error =
  //       form.get('reporter')?.value == 'QA' && !form.get('status')?.value ? { required: true } : null;
  //     form.get('status')?.setErrors(error); //<--see the setErrors
  //     return error;
  //   };
  // }


  onSubmit() {
    if (this.form.valid) {
      // send data to the backend

      this.bugService.saveBug(this.form.value).subscribe({
        next: () => {
          console.log("Ticket saved");
          //this.router.navigate(['bug-list']);
        },
        error: (error) => {
          console.log(error);
        }
      });

    } else {

      this.form.markAllAsTouched()
    }
    console.log(this.form);
  }




  get title() {
    return this.form.get('title') as FormControl;
  }

  get description() {
    return this.form.get('description') as FormControl;
  }

  get priority() {
    return this.form.get("priority") as FormControl;
  }

  get reporter() {
    return this.form.get("reporter") as FormArray;
  }

  get status() {
    return this.form.get("status") as FormArray;
  }

}
