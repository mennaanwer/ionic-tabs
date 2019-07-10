import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
// tslint:disable-next-line:variable-name
private _places: Place[] = [
  new Place(
    'p1',
    'Paris',
    'Place no. one',
    'https://www.telegraph.co.uk/content/dam/Travel/2018/May/paris.jpg?imwidth=1400',
    149.99
  ),
  new Place(
    'p2',
    'Italy',
    'Place no. two',
    'https://www.tripsavvy.com/thmb/1JB0BrE0vAUJwgboi7vnhBcOodw=/950x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/italy--venice--elevated-view-of-canal-in-city-543346423-59812f179abed50010eeb207.jpg',
    149.99
  ),
  new Place(
    'p3',
    'China',
    'Place no. three',
    'https://www.azernews.az/media/pictures/china_view.jpg',
    149.99
  )
];
get places() {
  return [...this._places];
}
  constructor() { }
  
  getPlace(id: string) {
    return {...this.places.find(p => p.id === id)};
  }
}
