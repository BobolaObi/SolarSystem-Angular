import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  @Input() affect?: string;
  @Input() firstOrLast?: boolean;

  originalBorder: string;

  constructor(private elm: ElementRef) {
    this.originalBorder = this.elm.nativeElement.style.border;
  }

  @HostListener("mouseenter") onMouseEnter() {
    if (this.affect == "textDecoration") { // operating on type
      this.elm.nativeElement.style.textDecoration = "underline";
    }
    else if (this.affect == "fontWeight") { // operating on tags
      this.elm.nativeElement.style.fontWeight = "bold";
    }
    else if (this.affect == "border" && this.firstOrLast) { //operating on card
      this.elm.nativeElement.style.border = "4px dashed #00f";
    }
  }
  @HostListener("mouseleave") onMouseLeave() {
    if (this.affect == "textDecoration") { // operating on type
      this.elm.nativeElement.style.textDecoration = "initial";
    }
    else if (this.affect == "fontWeight") { // operating on tags
      this.elm.nativeElement.style.fontWeight = "normal";
    }
    else if (this.affect == "border" && this.firstOrLast) { //operating on card
      this.elm.nativeElement.style.border = this.originalBorder;
    }
  }
}


