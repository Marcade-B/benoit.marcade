import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Car } from '../../model/car.model';

@Component({
  selector: 'app-car-form',
  standalone: false,
  
  templateUrl: './car-form.component.html',
  styleUrl: './car-form.component.css'
})
export class CarFormComponent implements OnInit {

  public carForm!:FormGroup;
  @Input()
  car:  Car | null = null;

  @Output() addCar = new EventEmitter<Car>();

  constructor(private fb: FormBuilder,  private router: Router) {}

  ngOnInit(): void {
      this.initForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['car'] && this.car) {
      this.carForm.patchValue(this.car);
    }
  }

  initForm() {
    this.carForm=this.fb.group({
      brand : this.fb.control('', [Validators.required]),
      model : this.fb.control('',[Validators.required]),
      color : this.fb.control('',[Validators.required]),
    });

    if (this.car) {
      this.carForm.patchValue(this.car);
    }
  }

  onSubmit() {
    if (this.carForm.valid) {
      const updatedCar: Car = { ...this.car, ...this.carForm.value };
      this.addCar.emit(updatedCar);
      this.carForm.reset();
    }
  }

  saveCar(): void {
    console.log(this.carForm.value);
  }
  
}

