import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  exports: [
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule
  ]
})
export class MaterialModule { }
