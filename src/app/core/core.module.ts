import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CookieModule, CookieService } from 'ngx-cookie';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [],
    imports: [CommonModule, CoreRoutingModule, FormsModule, RouterModule],
    providers: [
        MessageService,
        ConfirmationService,
        CookieService,
        FormsModule,
        RouterModule,
    ],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        // throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
