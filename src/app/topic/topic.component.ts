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
export class TopicComponent implements OnInit, OnChanges {
  @Input()
  videoUrl = 'https://www.youtube.com/embed/4TC5s_xNKSs?list=PLH-xYrxjfO2VsvyQXfBvsQsufAzvlqdg9';
  response: HighlightResult;
  topic: Topic;
  show: boolean = false;
  subscribtion: Subscription;
  selectedIndex = 0;
  showPlaylist: boolean = true;
  iframeWidth = 520;
  code = `
  abstract class Shape
  {
    String color;
    abstract double area();
    public abstract String toString();
      
    public Shape(String color)
    {
    System.out.println("Shape constructor is called");
    this.color = color;
    }
    
    public String getColor()
    {
    return color;
    }
  }		
    class Circle extends Shape	
  {	
    double radius;
    
    public Circle(String color,double radius)
    {
      super(color);
      System.out.println("Circle constructor is called");
      this.radius = radius;
    }
    
    double area()
    {
      return Math.PI * Math.pow(radius,2);
    }
    public String toString()
    {
      return "Circle Color is "+super.color + "and area is : " +area();
    }
  }
  class Rectangle extends Shape
  {
    double length;
    double width;
    
    public Rectangle(String color,double length,double width)
    {
    super(color);
    System.out.println("Rec Cons Called");
    this.length = length;
    this.width =width;
    }
    
    double area()
    {
      return length*width;
    }
    
    public String toString()
    {
      return "Rectangle color is " +super.color+ " and area is :" +area();
    }
  }
  
  public class ColorTest
  {
    public static void main(String args[])
    {
      Shape s1 = new Circle("Red", 2.1);
      Shape s2 = new Rectangle("Yellow",2,7);
      
      System.out.println(s1.toString());
      System.out.println(s2.toString());
    }
  }	 `;
  constructor(private topicService: TopicService,
    private router: Router,
    private route: ActivatedRoute,
    private change: ChangeDetectorRef,
    private zone: NgZone) {

    topicService.topicAnnounced$.subscribe(
      videoUrl => {
        console.log('vu:' + videoUrl)
        this.loadVideos(videoUrl);
      });

   this.subscribtion = this.router.events.subscribe((event: NavigationStart) => {

      if (route.snapshot.params['id'] !== undefined) {
        console.log('in topic cons' + route.snapshot.params['id'] + ":" + this.router.url);
        this.getTopics(route.snapshot.params['id']);
      }
      else {
        console.log('navigation started:' + this.router.url)
      }
    });
  }

  ngOnInit() {
    this.topic = this.route.snapshot.data['topic'];
    this.topicService.setTopic(this.topic);
  }

  getTopics(id: string): void {
    this.topicService.getTopics(id)
      .subscribe(topic => {
        this.topic = topic;
        this.topicService.setTopic(topic);
      });
  }

  showVideo(url: string) {
    this.videoUrl = url;
  }

  addFiles() {

  }

  openUploadDialog() {

  }

  ngOnChanges() {
    console.log("unscribe");
    this.subscribtion.unsubscribe();
  }

  loadVideos(url: string) {
    console.log('firee')
    // this.selectedIndex=2;
    this.videoUrl = url;

    window.setTimeout(() => {

      this.showPlaylist = true;

      this.showPlaylist = false;
      this.iframeWidth = 800;

      // run inside Angular
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
    console.log('event => ', event);
    console.log('index => ', event.index);
    console.log('tab => ', event.tab);
    this.selectedIndex = event.index;

    if (this.selectedIndex != 3) {
      this.showPlaylist = true;
      this.iframeWidth = 520;
      this.videoUrl = 'https://www.youtube.com/embed/4TC5s_xNKSs?list=PLH-xYrxjfO2VsvyQXfBvsQsufAzvlqdg9';
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
}
