import { Component, OnInit } from '@angular/core';
import { NewCarService } from '../services/new-car.service';
import { Car } from '../model/car.model';

@Component({
  selector: 'app-view-car',
  standalone: false,
  
  templateUrl: './view-car.component.html',
  styleUrl: './view-car.component.css'
})
export class ViewCarComponent implements OnInit {

  carsLists: Car[] = [];
  carSelected: Car | null = null;

  constructor(private carService: NewCarService){}
  ngOnInit(): void {
      this.getCars();
      this.carService.getCars2().subscribe(data => {
        this.carsLists = data;
      })
  }

  getCars(){
    this.carsLists = this.carService.getCars();
  }

}
