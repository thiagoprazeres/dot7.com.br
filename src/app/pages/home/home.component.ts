import { AfterViewInit, Component, ElementRef, Inject, NgZone, OnDestroy, PLATFORM_ID, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('effectcircle') effectcircle!: QueryList<ElementRef>;
  @ViewChildren('effectFadeIn') effectFadeIn!: QueryList<ElementRef>;
  @ViewChild('cloud', { static: true }) cloud!: ElementRef<HTMLDivElement>;
  @ViewChild('ground', { static: true }) ground!: ElementRef<HTMLDivElement>;
  // private tween!: gsap.core.Tween;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private ngZone: NgZone) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.ngZone.runOutsideAngular(() => {
        this.effectcircle.forEach((effectcircle: ElementRef<HTMLDivElement>) => {
          gsap.fromTo(effectcircle.nativeElement, {
            "clip-path": "circle(0% at 50% 50%)"
          }, {
            "clip-path": "circle(100% at 50% 50%)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: effectcircle.nativeElement,
              start: "top 40%",
              scrub: true
            }
          })
        });
        // this.tween = 
        this.effectFadeIn.forEach((effectFadeIn: ElementRef<HTMLDivElement>) => {
          gsap.fromTo(effectFadeIn.nativeElement, {
            scale: 0.9,
            opacity: 0.1
          }, {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: effectFadeIn.nativeElement,
              start: "top 80%",
              scrub: true
            }
          });
        });
      });

      // Animação para o #cloud (movendo para a esquerda)
      gsap.to(this.cloud.nativeElement, {
        backgroundPositionX: "-=1000", // ajuste a distância conforme necessário
        ease: "none",
        scrollTrigger: {
          trigger: this.cloud.nativeElement,
          start: "top 100%",
          end: "bottom top",   // a animação ocorrerá nos primeiros 500px de scroll
          scrub: true
        }
      });

      // Animação para o #ground (movendo para a direita)
      gsap.to(this.ground.nativeElement, {
        backgroundPositionX: "+=1000", // ajuste a distância de deslocamento conforme o efeito desejado
        ease: "none",
        scrollTrigger: {
          trigger: this.ground.nativeElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }
  }

  ngOnDestroy(): void {
    // if (this.tween) {
    //   this.tween.kill();
    // }
  }

}
