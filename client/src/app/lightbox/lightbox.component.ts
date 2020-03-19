import { Component, OnInit } from '@angular/core';

import { LightboxService } from './lightbox.service';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent implements OnInit {

  public data: any;

  constructor(private lightboxService: LightboxService) { }

  ngOnInit(): void {
    this.lightboxService.getData().subscribe(data => this.data = data);
  }

}
