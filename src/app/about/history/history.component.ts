import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/common/helper-service';
declare var $: any;

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  moc_data = [
    {
      "history_id": 1,
      "detail": [
        "ร้านเกียรติสิน ก่อตั้ง เมื่อปี พ.ศ.2503 โดยคุณพ่อ เอี่ยมฮั้ว แซ่แต้ และคุณแม่รัตนี   แซ่โค้ว เป็นห้องแถว 2 คูหา ที่ตลาดสด อำเภอบ้านไผ่ ค้าขายเล็กๆน้อยๆ ตามวิถีชีวิตของยุคสมัยนั้น  พ.ศ.2506 เกิดอัคคีภัยครั้งใหญ่ของชาวบ้านไผ่ สร้างความเสียหายอย่างประเมินค้าไม่ได้  คุณพ่อย้ายร้านอีก 2 ครั้ง จนกระทั่ง พ.ศ.2510 จึงได้ย้ายมาตั้ง ร้านเกียรติสิน ที่ถนนประพัทธ์บำรุง กิจการได้ดำเนินเรื่อยมาจนถึงปี พ.ศ.2522 คุณนิธิดา จรรยานิทัศน์ หรือ เจ้โต ได้รับช่วงการบริหารกิจการ ต่อจากคุณพ่อฯ พ.ศ.2537 จดทะเบียนเป็น “ห.จ.ก. บ้านไผ่เกียรติสิน” และพ.ศ.2545 ได้จดทะเบียนเป็น “บริษัท เกียรติสินโฮลเซล จำกัด”  ตลอดระยะเวลา กว่า 60 ปีที่ผ่านมา บริษัทฯ ของเรา ได้ทำธุรกิจตามคำสอนของคุณพ่อและคุณแม่ ที่มักบอกพวกเราอยู่เสมอว่า ให้ ”ทำการค้าคู่คุณธรรม” พวกเราได้ถือคำสอนดังกล่าวเป็นหลัก เป็นแนวนโยบายยึดถือในใจมาโดยตลอด  แต่สิ่งหนึ่งที่พวกเราชาวเกียรติสิน ไม่เคยลืมจากสำนึกของเราก็คือ ย่างก้าวที่ล่วงผ่านมากว่า 60 ปี ปัญหา อุปสรรค นานัปการที่ผ่านพ้นมา นอกจากการยึดมั่นคำสอนของป๊า ม๊าเราแล้ว คำแนะนำ คำสอน ให้การช่วยเหลือ ให้แหล่งพิงพักพึงพา ให้กำลังใจ ช่วยเหลืออุ้มชู จากผู้หลักผู้ใหญ่ทุกท่าน ญาติมิตร เพื่อนฝูง  บริษัทฯคู่ค้า ตัวแทน รวมที่สำคัญที่สุดคือลูกค้า และผู้มีอุปการคุณทุกท่าน ที่ถือเป็นส่วนสำคัญที่ช่วยให้ เกียรติสินของเรา ก้าวถึงวันนี้ เช่นกัน ",
        " สำหรับก้าวต่อไป เราขอตั้งปฏิภาณ ว่า “เกียรติสิน ขอเป็นส่วนหนึ่งของสังคมอีสานบ้านเรา ",
        " จะทำธุรกิจ ค้าขาย ให้บริการ บนหลักการค้าคู่คุณธรรม แม้นว่าบริบทความเปลี่ยนแปลงของวิถีชีวิต จะแปรเปลี่ยนไปอย่างไรก็ตาม ชาวเกียรติสินขอเป็นเพื่อน เป็นลูก เป็นหลาน เป็นพี่ เป็นน้อง กับสังคมบ้านเกิดตลอดไป "
      ]
    },
    {
      "history_id": 2,
      "detail": ["Kiatsin Shop was established in 1960 by Father Iam Hua Sae-Tae and Mother Rattanee Sae Khow. It is a shop house of 2 booths at the Ban Phai market. According to the way of life of that era in 1963, there was a great fire for Ban Phai people Causing unreasonable damage, Father moved the shop 2 more times until 1967, so he moved to set up Kiatsin Shop at Praphat Bamrung Road, the business continued until 1979. Khun Nithida Chanyanitat or Jeto has been in the management of the business. After Father 1994, registered as Ban Kiat Sin and 2002 was registered as a company Kiatsin Wholesale Co., Ltd. Over the past 60 years, our company has done business according to the teachings of It was my father and mother who always told us to trade with virtue. We have always taken this teaching as a guideline and to hold in our hearts. But one thing that we people of Kiatsin Never forget from our realization is that more than 60 steps passed many problems and obstacles that have passed. In addition to adhering to Pama's teachings, we provide advice, guidance, and support. Let the resting place should take, encourage, help, support from all adults, relatives, friends, the company, trade partners, agents, collectively, the most important is the customer. And all benefactors that is considered an important part of helping our honor stepping up to this day as well for the next step we make a pledge that Kiatsin would like to be a part of our home northeastern society to do business, trade, provide service on the principle of trading partners. Although the context of lifestyle changes Will change however The Kiatsin people would like to be friends, children, grandchildren, brothers and sisters forever."
    ]
    }

  ]
  show_data: any
  constructor(private helper : HelperService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.moc_data.forEach(element => {
        if (element.history_id == params["ID"]) {
          this.show_data = element;
        }
      });
    });

    $('#slider-v6').on('init',  (e, slick)=> {
      var $firstAnimatingElements = $('div.slider-v6:first-child').find('[data-animation]');
      this.helper.doAnimations($firstAnimatingElements)
    });

    $('#slider-v6').on('beforeChange',  (e, slick, currentSlide, nextSlide)=> {
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

    $('.carousel-slide').slick({
      autoplay: true,          
      arrows: true,
      dots: false,    
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      daptiveHeight: true,   
  });
  
  }

}
