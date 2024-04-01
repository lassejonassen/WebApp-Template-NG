import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG
import { ToastModule } from 'primeng/toast';

const PRIME_NG_MODULES = [ToastModule];

@NgModule({
    declarations: [],
    imports: [...PRIME_NG_MODULES, CommonModule],
    exports: [...PRIME_NG_MODULES],
})
export class SharedModule {}
