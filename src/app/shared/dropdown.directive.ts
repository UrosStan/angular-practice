import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
    
    @HostBinding('class.open') isDropdownOpen = false;

    @HostListener('click') onClicked() {
       this.isDropdownOpen = !this.isDropdownOpen;
    }
   
    ngOnInit(): void {
    }
}