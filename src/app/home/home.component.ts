import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
HousingLocationComponent

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HousingLocationComponent],
  template: `<section>
              <form>
                <input type="text" placeholder="Filter by city">
                <button class="primary" type="button">Search</button>
              </form>
            </section>
            <section class="results">
              <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
            </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocation:Housinglocation={
    id:9999,
    name:"test home",
    city:"Test City",
    state:"ST",
    photo:"assets/example-house.jpg",
    availableUnits: 99,
    wifi: true,
    laundry: false,
  }
}
