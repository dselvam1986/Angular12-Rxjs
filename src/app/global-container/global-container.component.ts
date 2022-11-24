import { Component, Input, OnInit } from '@angular/core';
import { GlobalContainerModuleService } from './global-container.service';

@Component({
  selector: 'app-global-container',
  templateUrl: './global-container.component.html',
  styleUrls: ['./global-container.component.scss'],
})
export class GlobalContainerComponent implements OnInit {
  isOpen: boolean = false;
  @Input() modalId: string = '';

  constructor(private globalModalService: GlobalContainerModuleService) {}

  ngOnInit(): void {
    this.globalModalService.registerModal(this);
  }

  hideModal() {
    console.log('Close click');
    this.globalModalService.close('globalContainer');
  }
}
