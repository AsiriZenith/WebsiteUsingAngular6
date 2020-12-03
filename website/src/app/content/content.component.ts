import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../service/config.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  services = {};

  constructor(private config: ConfigService) { }

  ngOnInit(): void {
    this.services = this.getService();
  }

  getService() {
    return this.config.getConfig().services;
  }
}
