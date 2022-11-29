import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[colorful]",
})
export class ColorfulDirective {
  @HostListener("mouseenter") onMouseEnter() {
    this.colorful("0");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.colorful("");
  }

  constructor(private element: ElementRef) {}

  private colorful(value?: string) {
    this.element.nativeElement.style.filter = `grayscale(${value})`;
  }
}
