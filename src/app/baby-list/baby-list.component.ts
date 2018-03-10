import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Baby } from '../entities/baby';

@Component({
  selector: 'app-baby-list',
  templateUrl: './baby-list.component.html',
  styleUrls: ['./baby-list.component.scss']
})
export class BabyListComponent implements OnInit {

  private babies: Baby[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.babies = this.dataService.getBabies();
  }

  editBaby(baby: Baby): void {
    this.dataService.editBaby(baby);
  }

  deleteBaby(baby: Baby): void {
    this.dataService.deleteBaby(baby);
  }
}
