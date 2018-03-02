import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Babysitter } from '../entities/babysitter';

@Component({
  selector: 'app-babysitter-list',
  templateUrl: './babysitter-list.component.html',
  styleUrls: ['./babysitter-list.component.scss']
})
export class BabysitterListComponent implements OnInit {

  private babysitters: Babysitter[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.babysitters = this.dataService.getBabysitters();
  }

}
