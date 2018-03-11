import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit-baby',
  templateUrl: './edit-baby.component.html',
  styleUrls: ['./edit-baby.component.scss']
})
export class EditBabyComponent implements OnInit {

  private baby: Baby;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    // This way, each time the params in the URL change,
    // getBaby() will be executed
    // this is necessary because ngOnInit() is called only when the previous URL is not the same as the URL of component
    // solution from https://stackoverflow.com/a/38836773
    this.route.params.subscribe(param => {
      this.showBabyDetails();
    });
  }

  showBabyDetails(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.baby = this.dataService.getBaby(id);
  }
}
