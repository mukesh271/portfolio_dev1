import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

     BaseUrl ="http://localhost:3000"

  constructor(private http:HttpClient) { }

  // getTicketDetails(params: string) {
  //   let url: string = GlobalConstants.V2API_BASE_URL + 'ticket/ticket_order_ticket_details?guid=' + params;
  //   return this.http.get(url, { headers: this.headerService.getV2APIHeaders() });
  // }

  // saveTicketDetails(ticketReview: any): Observable<any> {
  //   let url: string = GlobalConstants.V2API_BASE_URL + 'ticket/saveeventreview';
  //   return this.http.post(url, ticketReview, { headers: this.headerService.getV2APIHeaders() });
  // }

  getData(guid:any){
    const params = new HttpParams().set('guid', guid);
   return this.http.get(this.BaseUrl + '/comments?guid=60aa7e65-597f-4f5a-a058-dd5ec10dd6ff')
  }

  post(ticketReview:any){
    return this.http.get(this.BaseUrl +'/data' )
   }
}
