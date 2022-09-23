import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  posts = [
    {
      title: 'Forecasting crypto and stocks with RNN',
      description: '',
      category: 'front',
      url: '',
      image: `${environment.mediaUrl}stocks-thumbnail.webp`
    },
    {
      title: 'Domain driven design with python for Machine learning',
      description: '',
      category: 'front',
      url: '',
      image: `${environment.mediaUrl}python-thumbnail.webp`
    },
    {
      title: 'CQRS: A practical guide',
      description: '',
      category: 'front',
      url: '',
      image: `${environment.mediaUrl}cqrs-thumbnail.webp`
    },
    {
      title: 'CNN for image clasification',
      description: '',
      category: 'front',
      url: '',
      image: `${environment.mediaUrl}image-thumbnail.webp`
    },
  ]

  services = [
    {
      title: 'Python backend development',
      description: '',
      category: 'front',
      url: '',
      image: `${environment.mediaUrl}python-2-thumbnail.webp`
    },
    {
      title: 'Machine learning projects',
      description: '',
      category: 'front',
      url: '',
      image: `${environment.mediaUrl}cnn-thumbnail.webp`
    },
    {
      title: 'Angular frontend development',
      description: '',
      category: 'front',
      url: '',
      image: `${environment.mediaUrl}javascript-thumbnail.webp`
    }
  ]

  courses = [
    {
      title: 'Algorithms and data structures',
      description: 'A visual guide on a hard topic to let you finally grasp those highly abstract concepts',
      category: 'Software engineering',
      url: 'data-strucutres-and-algorithms',
      image: `${environment.mediaUrl}algorithim-thumbnail.webp`
    }
  ]

  sections = [
    {
      heading: 'Courses',
      items: this.courses
    },
    {
      heading: 'Post',
      items: this.posts
    },
    {
      heading: 'Services',
      items: this.services
    },
  ]


  constructor() { }
}
