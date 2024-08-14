import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({ selector: '[userImg]' })
export class UserImageDirective {
  private _pathToNoImage = 'assets/img/no-image-avatar.jpg';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}
  @HostListener('error') onError() {
    this.renderer.setAttribute(
      this.el.nativeElement,
      'src',
      this._pathToNoImage
    );
  }
}
