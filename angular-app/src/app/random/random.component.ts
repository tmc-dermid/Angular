import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-random',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent {

  @Input() max: number = 100;

  private randomService = inject(RandomService);

  randomNumber: number = 0;
  comment: string = '';
  commentColor: string = '';

  ngOnInit() {
    this.generateRandom();
  }

  generateRandom() {
    this.randomNumber = this.randomService.getRandomNumber(this.max);

    if (this.randomNumber <= 0.5 * this.max) {
      this.comment = 'Liczba jest mniejsza lub równa połowie maksymalnej wartości.';
      this.commentColor = 'green';
    } else {
      this.comment = 'Liczba jest większa niż połowa maksymalnej wartości.';
      this.commentColor = 'red';
    }
  }
}
