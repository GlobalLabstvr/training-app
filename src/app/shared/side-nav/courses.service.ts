import { Injectable } from '@angular/core';

import { Course } from './model/course';
import { HttpClient } from '@angular/common/http';
import { UrlConstants } from '../model/url-constants';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getCourses(){
    return this.http.get<Course[]>(UrlConstants.coursesUrl)
  };

}
