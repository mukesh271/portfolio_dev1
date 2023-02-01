import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-event-preview',
  templateUrl: './event-preview.component.html',
  styleUrls: ['./event-preview.component.css']
})
export class EventPreviewComponent implements OnInit {
  details?: any;
  detail?: any;
  guid: any;
  
  ticketReview={
    rating:null
  }

  constructor(private apiService: ApiServiceService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.guid = params;
    });
    this.getData(this.guid.q)
  }
  getData(guid: any) {
    this.apiService.getData(this.guid).subscribe(result => {
      this.details = result;
      this.details = this.details.forEach((element: any) => {
        this.detail = element.data
      });
    })
  }
  post(){debugger
    this.apiService.post(this.ticketReview).subscribe(p=>{
      console.log(p);  
    })

  }

}
