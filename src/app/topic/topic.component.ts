import { Component, OnInit, Input, OnDestroy, ChangeDetectorRef, NgZone, OnChanges } from '@angular/core';
import { TopicService } from './topic.service';
import { Topic } from './topic';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit, OnChanges{
  @Input()
  videoUrl = 'https://www.youtube.com/embed/4TC5s_xNKSs?list=PLH-xYrxjfO2VsvyQXfBvsQsufAzvlqdg9';

  topic: Topic;
  show: boolean = false;
  subscribtion: Subscription;
  selectedIndex = 0;
  showPlaylist:boolean = true;
  iframeWidth = 520;

  constructor(private topicService: TopicService,
    private router: Router,
    private route: ActivatedRoute,
    private change: ChangeDetectorRef, 
    private zone: NgZone) {
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

  ngOnChanges(){
    console.log("unscribe");
    this.subscribtion.unsubscribe();
  }
  
  loadVideos(){
    console.log('firee')
   // this.selectedIndex=2;

   
    window.setTimeout(()=>{

      this.showPlaylist = true;

          this.showPlaylist = false;
          this.iframeWidth = 800;

      // run inside Angular
      this.zone.run(()=>{ 
        console.log('cunnrrent:'+this.selectedIndex)
         this.selectedIndex = 2;
         // force change detection
         console.log('zone')
         this.change.detectChanges();
      });
  });

  }

  onLinkClick(event: MatTabChangeEvent) {
    console.log('event => ', event);
    console.log('index => ', event.index);
    console.log('tab => ', event.tab);
    this.selectedIndex = event.index;

    if(this.selectedIndex != 2){
   this.showPlaylist = true;
   this.iframeWidth = 520;
   this.videoUrl = 'https://www.youtube.com/embed/4TC5s_xNKSs?list=PLH-xYrxjfO2VsvyQXfBvsQsufAzvlqdg9';
    }
   
    
  }
}