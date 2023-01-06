import { Renderer2 } from '@angular/core';
import { HostListener } from '@angular/core';
import { OnInit } from '@angular/core';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHeaderDirective]'
})
export class HeaderDirectiveDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  @HostListener('mouseenter') mouseover(){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }
  @HostListener('mouseleave') mouseleave(){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
  }
}
