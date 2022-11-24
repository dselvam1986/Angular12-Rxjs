import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

class HideAfterContext {
  public hideAfter = 1000;
  public counter = 0;
}

@Directive({
  selector: '[hideAfter]',
})
export class HideAfterDirective implements OnInit {
  @Input('hideAfter')
  set delay(value: number | null) {
    this._delay = value ?? 0;
    this.context.hideAfter = this.context.counter = this._delay / 1000;
  }
  private _delay = 0;

  @Input('hideAfterThen') // hideAfter-Then using came case to specify the then case in HTML to use another template
  placeholder: TemplateRef<any> | null = null;

  private context = new HideAfterContext();
  constructor(
    private viewContainerRef: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.template, this.context);
    const intervalId = setInterval(() => {
      this.context.counter--;
    }, 1000);

    setTimeout(() => {
      this.viewContainerRef.clear();
      if (this.placeholder) {
        this.viewContainerRef.createEmbeddedView(
          this.placeholder,
          this.context
        );
      }
      clearInterval(intervalId);
    }, this._delay);
  }
}
