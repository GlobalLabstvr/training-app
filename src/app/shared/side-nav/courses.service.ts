import { Injectable } from '@angular/core';

import { Course } from './model/course';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  coursesUrl = 'http://localhost:3000/courses'; 

  constructor(private http: HttpClient) { }

  getCourses(){
    return this.http.get<Course[]>(this.coursesUrl)
  };

}
