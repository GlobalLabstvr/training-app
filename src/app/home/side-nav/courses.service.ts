import { Injectable } from '@angular/core';

import { Course } from './model/course';
import { HttpClient } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CoursesService implements Resolve<any> {

  private course:Course;
  coursesUrl = 'http://localhost:3000/courses'; 

  constructor(private http: HttpClient) { }

  getCourses(){
    return this.http.get<Course[]>(this.coursesUrl)
  };

  resolve(route: ActivatedRouteSnapshot) {
    return this.getCourses();
  }
}
