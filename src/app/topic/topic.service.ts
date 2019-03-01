import { Injectable } from '@angular/core';
import { Topic } from './topic';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { APIConstants } from '../shared/model/api-constants';


@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private videoSubject = new Subject<string>();
  private topicSubject = new Subject<Topic>();

  videoAnnounced$ = this.videoSubject.asObservable();
  topicAnnounced$ = this.topicSubject.asObservable();

  constructor(private http: HttpClient) { }

  getTopics(id:string){
    return this.http.get<Topic>(APIConstants.topicsUrl+id);
  };

  announceVideo(videoUrl: string) {
    this.videoSubject.next(videoUrl);
  }

  announceTopic(topic:Topic){
    this.topicSubject.next(topic);
  }

  getFile(url:string){
    return this.http.get(url, { responseType: 'text' });
   
  }

}
