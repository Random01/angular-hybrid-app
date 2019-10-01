import { Directive, ElementRef, Injector, Input } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
    selector: 'upgraded-simple'
})
export class UpgradedSimpleDirective extends UpgradeComponent {

    @Input() message: string;

    constructor(elementRef: ElementRef, injector: Injector) {
        super('gfSimple', elementRef, injector);
    }
}