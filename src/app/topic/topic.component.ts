import { Component, OnInit, Input, OnDestroy, ChangeDetectorRef, NgZone, OnChanges, ViewEncapsulation } from '@angular/core';
import { TopicService } from './topic.service';
import { Topic } from './topic';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],

})
export class TopicComponent implements OnInit {
  @Input()
  videoUrl = 'https://www.youtube.com/embed/4TC5s_xNKSs?list=PLH-xYrxjfO2VsvyQXfBvsQsufAzvlqdg9';
  response: HighlightResult;
  topic: Topic;
  show: boolean = false;
  subscribtion: Subscription;
  selectedIndex = 0;
  showPlaylist: boolean = true;
  iframeWidth = 520;
  code = '';
  
  constructor(private topicService: TopicService,
    private router: Router,
    private route: ActivatedRoute,
    private change: ChangeDetectorRef,
    private zone: NgZone) {

    topicService.videoAnnounced$.subscribe(
      videoUrl => {
        this.loadVideos(videoUrl);
      });



   this.subscribtion = this.router.events.subscribe((event: NavigationStart) => {
      if (this.route.snapshot.data['topic'] !== undefined) {
        this.topic = this.route.snapshot.data['topic'];
        this.topicService.announceTopic(this.topic);
        console.log(this.topic);
      }
    });
  }

  ngOnInit() {
    this.topic = this.route.snapshot.data['topic'];
  }

  showVideo(url: string) {
    this.videoUrl = url;
  }

  addFiles() {

  }

  openUploadDialog() {

  }

  loadVideos(url: string) {
    console.log('firee')
    this.videoUrl = url;
    window.setTimeout(() => {
      this.showPlaylist = false;
      this.iframeWidth = 800;

      this.zone.run(() => {
        console.log('cunnrrent:' + this.selectedIndex)
        this.selectedIndex = 3;
        // force change detection
        console.log('zone')
        this.change.detectChanges();
      });
    });
  }

  onLinkClick(event: MatTabChangeEvent) {
    console.log('index => ', event.index);
    this.selectedIndex = event.index;
    if (this.selectedIndex != 3) {
      console.log('index===========> ', event.index);
      this.showPlaylist = true;
      this.iframeWidth = 520;
      this.videoUrl = this.topic.playlist[0].url;
    }
  }

  onHighlight(e) {
    this.response = {
      language: e.language,
      r: e.r,
      second_best: '{...}',
      top: '{...}',
      value: '{...}'
    }
  }

  showProgram(name:string){
    console.log('nam:'+name);
    this.topicService.getFile(name).subscribe(data => {
      console.log('da:'+data);
      this.code = data;
    });;
  }
}
