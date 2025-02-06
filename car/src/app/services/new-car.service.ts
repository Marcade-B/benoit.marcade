import { Injectable } from '@angular/core';
import { Car } from '../model/car.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewCarService {

  cars: Car[] = [
    { id: 1, brand: 'Citroen', model: 'C3', color: 'white'},
    { id: 2, brand: 'Citroen', model: 'C4', color: 'white'},
    { id: 3, brand: 'Audi', model: 'A3', color: 'white'},
    { id: 4, brand: 'Audi', model: 'A', color: 'darkblue'},
  ];

  private carUrl = 'http://localhost:3500/cars';

  constructor(private http: HttpClient) {}

  recupCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carUrl);
  }

  addVoiture(car: Car): Observable<Car> {
    return this.http.post<Car>(this.carUrl, car);
  }
  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.carUrl, car);
  }
  updateCars(car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.carUrl}/${car.id}`, car);
  }

  private carsSubject = new BehaviorSubject<Car[]>(this.cars);

  getCars(): Car[] {
    return this.cars;
  }

  getCars2(): Observable<Car[]> {
    return this.carsSubject.asObservable();
  }

  ajouterVoiture(car: Car): void {
    car.id = this.cars.length + 1;
    this.cars.push(car);
    this.carsSubject.next(this.cars);
  }

  supprimerVoiture(id: number): void {
    this.cars = this.cars.filter((car) => car.id !== id);
    this.carsSubject.next(this.cars);
  }

  rechercherVoitureParMarque(brand: string): Car | undefined {
    return this.cars.find((car) => car.brand.toLowerCase() === brand.toLowerCase());
  }

  rechercherVoiture(brand: string): Car[] {
    return this.cars.filter(car =>
      car.brand.toLowerCase().includes(brand.toLowerCase())
    );
  }

  searchCar(brand: string) {
    const filteredCars = this.cars.filter(p => p.brand.toLowerCase().includes(brand.toLowerCase()));
    this.carsSubject.next(filteredCars);
  }

  updateCar(car: Car): void {
    const index = this.cars.findIndex(p => p.id === car.id);
    if (index !== -1) {
      this.cars[index] = car;
    }
  }

  recupererVoitureById(id: number): Car | undefined {
    return this.cars.find((car) => car.id === id);
  }

  searchVoitureByBrand(brand: string): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.carUrl}?brand_like=${brand}`);
  }
}
