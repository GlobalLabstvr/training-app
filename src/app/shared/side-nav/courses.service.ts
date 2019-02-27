import { Injectable } from '@angular/core';

import { Course } from './model/course';
import { HttpClient } from '@angular/common/http';
import { APIConstants } from '../model/api-constants';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getCourses(){
    return this.http.get<Course[]>(APIConstants.coursesUrl)
  };

}
