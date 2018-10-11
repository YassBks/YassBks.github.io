import { Component, OnInit, Output } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subject} from 'rxjs/Subject';
import { NavigationService } from '../services/navigation.service'; 

@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.css']
})
export class AdminContentComponent implements OnInit {
  constructor(private navigation:NavigationService, private route:ActivatedRoute) { }

  ngOnInit() {
  }
  
  public routerOutletActivate(){
     this.navigation.navigationData(this.route.children[0].component.name);  
  }

}
