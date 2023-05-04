import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
//boostrap
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatBadgeModule,
    MatIconModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSliderModule,
    NgbPopoverModule
  ],
  exports:[
    MatGridListModule,
    MatCardModule,
    MatBadgeModule,
    MatIconModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSliderModule,
    NgbPopoverModule
  ]
})
export class MaterialModulesModule { }
