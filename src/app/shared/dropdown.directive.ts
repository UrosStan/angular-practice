import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
    isOpen = false;
    constructor(private elRef: ElementRef, private renderer: Renderer2) { }
    ngOnInit(): void {
    }

    @HostListener('click') onClicked() {
        if(this.isOpen){
            this.renderer.removeClass(this.elRef.nativeElement, 'open')
            this.isOpen = false;

        }else {
            this.renderer.addClass(this.elRef.nativeElement, 'open')
            this.isOpen = true;
        }
    }

}