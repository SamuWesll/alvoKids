import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotImplementationComponent } from './components/not-implementation/not-implementation.component';

@NgModule({
  declarations: [
    NotImplementationComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NotImplementationComponent,
  ]
})
export class SharedModule { }
