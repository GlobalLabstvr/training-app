import { Injectable } from '@angular/core';

import { Topic } from './topic';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TopicService {

  videoUrl = 'http://localhost:3000/videos/'; 

  private topicSubject = new Subject<string>();

  topicAnnounced$ = this.topicSubject.asObservable();

  constructor(private http: HttpClient) { }

  getVideos(id:string){
    return this.http.get<Topic>(this.videoUrl+id);
  };

  announceTopic(topic: string) {
    this.topicSubject.next(topic);
  }

}
