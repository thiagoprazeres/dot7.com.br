import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @ViewChild('summary') summary!: ElementRef<HTMLElement>;

  handleClick() {
    this.summary.nativeElement.click();
  }
}
