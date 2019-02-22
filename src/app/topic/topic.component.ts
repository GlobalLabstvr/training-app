import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TopicService } from './topic.service';
import { Topic } from './topic';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit, OnDestroy {
  @Input()
  videoUrl = 'https://www.youtube.com/embed/4TC5s_xNKSs?list=PLH-xYrxjfO2VsvyQXfBvsQsufAzvlqdg9';

  topic: Topic;
  show: boolean = false;
  subscribtion: Subscription;

  constructor(private topicService: TopicService,
    private router: Router,
    private route: ActivatedRoute) {
      this.subscribtion = this.router.events.subscribe((event: NavigationStart) => {
        
        if(route.snapshot.params['id'] !== undefined){
          console.log('in topic cons'+ route.snapshot.params['id']+":"+this.router.url);
          this.getTopics(route.snapshot.params['id']);
        }
        else{
          console.log('navigation started:'+this.router.url)
        }
      });
  }

  ngOnInit() {
    this.topic = this.route.snapshot.data['topic'];
  }

  getTopics(id:string): void {
    this.topicService.getVideos(id)
      .subscribe(topic => {
      this.topic = topic;
        console.log('get value with id:'+id);
        console.log(this.topic);
      });
  }

  showVideo(url:string){
    this.videoUrl = url;
  }

  addFiles(){

  }

  openUploadDialog(){
    
  }

  ngOnDestroy(){
    console.log("unscribe");
    this.subscribtion.unsubscribe();
  }
}
