import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternalHCPComponent } from './internal-hcp/internal-hcp.component';
import { ExternalHCPComponent } from './external-hcp/external-hcp.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InternalHCPComponent, ExternalHCPComponent]
})
export class AdminModule { }
