import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternalHCPComponent } from './src/app/admin/internal-hcp/internal-hcp.component';
import { ExternalHCPComponent } from './src/app/admin/external-hcp/external-hcp.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InternalHCPComponent, ExternalHCPComponent]
})
export class AdminModule { }
