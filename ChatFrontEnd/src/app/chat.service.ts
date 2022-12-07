import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Message {
  user: string,
  message: string,
  id: number,
  channel: string
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  baseUrl: string = "/api";

  constructor(private http: HttpClient) { 
    
  }
  
  getAllMessages(channel: string): Observable<any[]> {
    //GET
    return this.http.get<any[]>(this.baseUrl + "/" + channel);
  }

  getMessageById(channel: string, id: number): Observable<any> {
    //READ
    return this.http.get<any>(this.baseUrl);
  }

  createNewMessage(message: Message): Observable<any> {
    //CREATE
    //PUT /api/:channel
    return this.http.put<any>(this.baseUrl + "/" + message.channel, message);
  }
}
