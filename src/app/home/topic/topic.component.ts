import { Component, OnInit, Input } from '@angular/core';
import { TopicService } from './topic.service';
import { Topic } from './topic';


@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit{
  @Input()
  videoUrl = 'https://www.youtube.com/embed/4TC5s_xNKSs?list=PLH-xYrxjfO2VsvyQXfBvsQsufAzvlqdg9';

  topic: Topic;


  constructor(private topicService: TopicService) { }

  ngOnInit() {
   this.getTopics("1");
  }

  getTopics(id:string): void {
    this.topicService.getVideos(id)
      .subscribe(topic => {
      this.topic = topic;
        console.log(this.topic);
      });
  }

  showVideo(url:string){
    this.videoUrl = url;
  }
}
