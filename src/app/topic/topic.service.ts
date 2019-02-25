import { Injectable } from '@angular/core';
import { Topic } from './topic';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { UrlConstants } from '../shared/model/url-constants';


@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private topicSubject = new Subject<string>();
  private fetchTopicSubject = new Subject<Topic>();

  topicAnnounced$ = this.topicSubject.asObservable();
  topicFetched$ = this.fetchTopicSubject.asObservable();

  topic: Topic;

  constructor(private http: HttpClient) { }

  getTopics(id:string){
    console.log("consol:"+UrlConstants.topicsUrl+id);
    return this.http.get<Topic>(UrlConstants.topicsUrl+id);
  };

  announceTopic(topic: string) {
    this.topicSubject.next(topic);
  }

  setTopic(topic:Topic){
    this.topic = topic;
    this.fetchTopicSubject.next(topic);
  }

}
