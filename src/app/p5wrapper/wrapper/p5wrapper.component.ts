import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-p5wrapper',
  templateUrl: './p5wrapper.component.html',
  styleUrls: ['./p5wrapper.component.css']
})
export class P5wrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void  {
    const sketch = (s: p5) => {

      s.preload = () => {
        // preload code
      }

      s.setup = () => {
        s.createCanvas(window.innerWidth-40 , window.innerHeight);
      };

      s.draw = () => {
        s.background(128);
        s.rect(100, 100, 100, 100).fill(128, 0, 0);
        s.rect(200, 200, 100, 100).fill(128, 0, 0);;
        s.rect(100, 300, 100, 100).fill(128, 0, 0);;
      };
    }

    let canvas = new p5(sketch);
  }
}
