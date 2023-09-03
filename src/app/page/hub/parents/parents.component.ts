import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.scss']
})
export class ParentsComponent implements OnInit {

  formGroup!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  criarFormulario(): void {
    this.formGroup = this.formBuilder.group({
      fullname: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      kinship: ['', Validators.required],
    })
  }

  handleVisitor(): void {
    const { fullname, phoneNumber, kinship} = this.formGroup.value;

    console.log(fullname)
    console.log(phoneNumber)
    console.log(kinship)
  }

  ngOnInit(): void {
    this.criarFormulario()
  }

}
