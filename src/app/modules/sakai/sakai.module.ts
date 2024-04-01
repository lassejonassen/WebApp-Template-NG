import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SakaiRoutingModule } from './sakai-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, SakaiRoutingModule, SharedModule],
})
export class SakaiModule {}
