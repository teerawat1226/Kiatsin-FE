import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/common/helper-service';
declare var $: any;

@Component({
    selector: 'app-activity',
    templateUrl: './activity.component.html',
    styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

    constructor(private helper : HelperService) {}

    ngOnInit(): void {
        
      this.helper.galleryIsotope()
    }


}
