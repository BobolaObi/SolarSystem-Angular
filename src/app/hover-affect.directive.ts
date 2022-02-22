import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective implements OnInit {
  @Input() colour?: string;
  constructor(private elm: ElementRef) { }

  ngOnInit(): void {
  }

  @HostListener("click") onClick(btn: any) {
    this.hover(this.colour);
  }

  private hover(colourValue?: string) {
    this.elm.nativeElement.style.backgroundColor = colourValue ?? "green";
  }
}


