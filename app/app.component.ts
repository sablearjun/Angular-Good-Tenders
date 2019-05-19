import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { 
  }
  public openModal(template: [any]) {
  this.modalRef = this.modalService.show(template); // {3}
  }
}