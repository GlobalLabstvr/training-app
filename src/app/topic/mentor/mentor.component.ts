import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ThemePalette } from '@angular/material';

import {
  MatCarouselSlideComponent,
  Orientation
} from '@ngmodule/material-carousel';
import { TopicService } from '../topic.service';
import { Topic } from '../topic';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.scss']
})
export class MentorComponent {


  public slidesList = ['Slide1.PNG', 
                        'Slide2.PNG'
                    ];

  public timings = '250ms ease-in';
  public autoplay = false;
  public interval = 5000;
  public loop = true;
  public hideArrows = true;
  public hideIndicators = false;
  public color: ThemePalette = 'accent';
  public maxWidth = 'auto';
  public proportion = 50;
  public slides = this.slidesList.length;
  public overlayColor = '#00000040';
  public hideOverlay = true;
  public useKeyboard = true;
  public useMouseWheel = false;
  public orientation: Orientation = 'ltr';

  @ViewChildren(MatCarouselSlideComponent) public carouselSlides: QueryList<
    MatCarouselSlideComponent
  >;
  public darkMode = false;

  topic: Topic;
  height: number;
 
  constructor(
    private overlayContainer: OverlayContainer,
    private elementRef: ElementRef<HTMLElement>,
    private topicService: TopicService
  ) {
    topicService.topicAnnounced$.subscribe(
      topic => {
        this.topic = topic;
       });
  }

  getHeight(description:string, videos:any){
    console.log("vid:");
    console.log(videos);
    length = 0;
    if(videos!== undefined && videos.length>0){
      length = videos.length*50;
    }
    return description.length>100? (description.length*0.8+length):100;
  }

   public resetSlides(): void {
    this.carouselSlides.forEach(item => (item.disabled = false));
  }

  loadVideos(videoUrl: string){
    console.log('load vide:'+videoUrl)
    this.topicService.announceVideo(videoUrl);
  }
}