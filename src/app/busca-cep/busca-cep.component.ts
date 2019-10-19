import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'has-busca-cep',
  templateUrl: './busca-cep.component.html',
  styleUrls: ['./busca-cep.component.css']
})
export class BuscaCepComponent implements OnInit {

cepForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.cepForm = this.formBuilder.group({

      cep : this.formBuilder.control('')

    })

  }

  onConsultar(){

    let cep : string = this.cepForm.value.cep;

    alert(cep);

  }

}
