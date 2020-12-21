import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    $('[data-toggle="offcanvas"], .btn-offcanvas').on("click", (event) => {
      event.stopPropagation();
      $('body').toggleClass('menu-open');
      $("#pbr-off-canvas").toggleClass("active");
  })

  
  }

 

}

