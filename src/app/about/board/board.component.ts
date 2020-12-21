import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/common/helper-service';
declare var $: any;
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor(private helper: HelperService) { }

  ngOnInit(): void {
    $('#slider-v6').on('init', (e, slick) => {
      var $firstAnimatingElements = $('div.slider-v6:first-child').find('[data-animation]');
      this.helper.doAnimations($firstAnimatingElements)
    });
    $('#slider-v6').on('beforeChange', (e, slick, currentSlide, nextSlide) => {
      var $animatingElements = $('div.slider-v6[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
      this.helper.doAnimations($animatingElements);
    });
    $('#slider-v6').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: true,
      dots: true,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          infinite: true,
          arrows: false,
        }
      }

      ]
    });
  }
}


