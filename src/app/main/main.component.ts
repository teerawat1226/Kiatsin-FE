import { Component, OnInit } from '@angular/core';
import { HelperService } from '../common/helper-service';
declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private helper : HelperService) { }

  ngOnInit(): void {
    $('#slider-v5').on('init',  (e, slick)=> {
      var $firstAnimatingElements = $('div.slider-v5:first-child').find('[data-animation]');
      // this.doAnimations($firstAnimatingElements);
      this.helper.doAnimations($firstAnimatingElements);
    });
    $('#slider-v5').on('beforeChange',  (e, slick, currentSlide, nextSlide)=> {
      var $animatingElements = $('div.slider-v5[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
      // this.doAnimations($animatingElements);
      this.helper.doAnimations($animatingElements)
    });
    $('#slider-v5').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: true,
      dots: false,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          infinite: true,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          infinite: true,
          arrows: false,
          autoplaySpeed: 2000,
        }
      }

      ]
    });
  }

}
