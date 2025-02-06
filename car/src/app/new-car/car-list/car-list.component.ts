import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from '../../model/car.model';

@Component({
  selector: 'app-car-list',
  standalone: false,
  
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent {

  @Input() cars: Car[] = [];
  @Output() deleteCar = new EventEmitter<Car>();
  @Output() updateCar = new EventEmitter<Car>();
  @Output() searchCar = new EventEmitter<string>()

  searchValue: string = '';

  constructor() {}

  onDelete(car: Car) {
    this.deleteCar.emit(car);
  }

  onUpdate(car: Car) {
    this.updateCar.emit(car);
  }

  onSearch() {
    this.searchCar.emit(this.searchValue);
  }

  ngOnInit(): void {}

}
