import { MockAnimationDriver } from "@angular/animations/browser/testing"

export interface Root {
  coord: Coord
  weather: Weather[]
  base: string
  main: Main
  visibility: number
  wind: Wind
  clouds: Clouds
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
}

export interface Coord {
  lon: number;
  last: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

