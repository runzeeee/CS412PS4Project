import {Component, Input, OnInit} from '@angular/core';
import {WeatherData} from "../models/weather.model";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() weatherData?: WeatherData
  constructor() { }

  ngOnInit(): void {
  }

}
