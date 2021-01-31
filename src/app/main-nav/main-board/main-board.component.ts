import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { Subscription } from 'rxjs';
import { MainBoardService } from '../../services/main-board.service';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.css']
})
export class MainBoardComponent implements OnInit {

  typeSubscription: Subscription;
  type: string;

  constructor(private route: ActivatedRoute, private mainBoardService: MainBoardService) {
    this.type = this.route.snapshot.params['type'];
    this.mainBoardService.setType(this.type);
  }

  ngOnInit(): void {
    this.typeSubscription = this.mainBoardService.diagramTypeSubject
      .subscribe(type => {
        this.type = type;
      })
  }

}
