import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car.model';
import { NewCarService } from '../services/new-car.service';
import { ComponentFixtureNoNgZone } from '@angular/core/testing';

@Component({
  selector: 'app-new-car',
  standalone: false,
  
  templateUrl: './new-car.component.html',
  styleUrl: './new-car.component.css'
})
export class NewCarComponent implements OnInit{

  
  carsLists: Car[] = [];
  carSelected: Car | null = null;

  constructor(private carService:NewCarService){}
  ngOnInit(): void {
      this.getCars();
      this.carService.getCars2().subscribe(data => {
        this.carsLists = data;
      });
  }

  getCars(){
    this.carsLists = this.carService.getCars();
  }

  loadCars(): void {
    this.carService.recupCars().subscribe(data => (this.carsLists = data));
  }

  onAddCar(car: Car) {
    const index = this.carsLists.findIndex(c => c.id === car.id);

    if (index !== -1) {
      this.carsLists[index] = car;
      this.carService.updateCar(car);
    }
    else
      this.carService.ajouterVoiture(car);

    this.carSelected = null;
  }

  onAddCarAutre(car: Car): void {
    this.carService.addCar(car).subscribe(() => {
    });
  }

  onUpdateCar(car: Car) {
    this.carSelected = { ...car };
  }

  onDeleteCar(car: Car) {
    this.carService.supprimerVoiture(car.id);
  }

  onSearchCarInit(brand: string) {
    this.carService.searchCar(brand);
  }

  onSearchCar(brand: string) {
    this.carsLists = this.carService.rechercherVoiture(brand)
  }

  onSearchCar1(brand: string) {
    this.carService.searchCar(brand);
  }

}
