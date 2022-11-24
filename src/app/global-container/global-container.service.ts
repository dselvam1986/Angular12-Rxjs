import { Injectable } from '@angular/core';
import { GlobalContainerComponent } from './global-container.component';
import { GlobalContainerModule } from './global-container.module';

@Injectable()
export class GlobalContainerModuleService {
  private modals: Array<GlobalContainerComponent>;
  public isModalOpen = false;
  public albumId: number = 0;

  constructor() {
    this.modals = [];
  }

  /**
   * FindModal - Search through ModalsArray and find the given modal by modalId
   * return GlobalContainerComponent | null
   */
  findModal(modalId: string): any {
    for (let modal of this.modals) {
      if (modal.modalId == modalId) {
        return modal;
      }
    }
  }

  /**Close - Close the modal by searching in Modals Array and setting isOpen to False
   *
   * @modalId {string} - id of the modal to close
   */
  close(modalId: string): void {
    let modal = this.findModal(modalId);
    if (modal) {
      modal.isOpen = false;
      this.isModalOpen = false;
    }
  }

  /**
   * open - opens specified modal
   */
  open(modalId: string) {
    let modal = this.findModal(modalId);
    if (modal) {
      modal.isOpen = true;
    }
  }

  /**
   * registerModal - Registers all modal components being used on initialization
   * @param { Object } newModal The new modal to add to the array of available modals
   */
  registerModal(newModal: GlobalContainerComponent): void {
    let modal = this.findModal(newModal.modalId);
    // Delete existing to replace the modal
    if (modal) {
      this.modals.splice(this.modals.indexOf(modal), 1);
    }
    this.modals.push(newModal);
    console.log(this.modals);
  }
}
