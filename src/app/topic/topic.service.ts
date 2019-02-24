import { Injectable } from '@angular/core';

import { Topic } from './topic';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TopicService {

  topicUrl = 'http://localhost:3000/topics/'; 

  private topicSubject = new Subject<string>();
  private fetchTopicSubject = new Subject<Topic>();

  topicAnnounced$ = this.topicSubject.asObservable();
  topicFetched$ = this.fetchTopicSubject.asObservable();

  topic: Topic;

  constructor(private http: HttpClient) { }

  getTopics(id:string){
    return this.http.get<Topic>(this.topicUrl+id);
  };

  announceTopic(topic: string) {
    this.topicSubject.next(topic);
  }

  setTopic(topic:Topic){
    this.topic = topic;
    this.fetchTopicSubject.next(topic);
  }

}
