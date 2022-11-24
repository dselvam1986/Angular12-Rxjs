import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { AlbumsModule } from '../jsonAPI/albums/albums.module';
import { GlobalContainerComponent } from './global-container.component';
import { GlobalContainerModuleService } from './global-container.service';

@NgModule({
  imports: [CommonModule, AlbumsModule],
  declarations: [GlobalContainerComponent],
  exports: [GlobalContainerComponent],
  providers: [GlobalContainerModuleService],
})
export class GlobalContainerModule {
  static forRoot(): ModuleWithProviders<GlobalContainerModule> {
    return {
      ngModule: GlobalContainerModule,
      providers: [GlobalContainerModuleService],
    };
  }
}
