import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  newItem: string = '';
  items: string[] = [];

  addItem() {
    if (this.newItem.trim().length === 0) return;

    this.items.push(this.newItem.trim());
    this.newItem = '';
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
