import { Injectable } from '@angular/core';

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
      image: 'assets/stocks-thumbnail.jpg'
    },
    {
      title: 'Domain driven design with python for Machine learning',
      description: '',
      category: 'front',
      url: '',
      image: 'assets/python-thumbnail.jpg'
    },
    {
      title: 'CQRS: A practical guide',
      description: '',
      category: 'front',
      url: '',
      image: 'assets/cqrs-thumbnail.jpg'
    },
    {
      title: 'CNN for image clasification',
      description: '',
      category: 'front',
      url: '',
      image: 'assets/image-thumbnail.jpg'
    },
  ]

  services = [
    {
      title: 'Python backend development',
      description: '',
      category: 'front',
      url: '',
      image: 'assets/python-2-thumbnail.jpg'
    },
    {
      title: 'Machine learning projects',
      description: '',
      category: 'front',
      url: '',
      image: 'assets/cnn-thumbnail.jpg'
    },
    {
      title: 'Angular frontend development',
      description: '',
      category: 'front',
      url: '',
      image: 'assets/javascript-thumbnail.jpg'
    }
  ]

  courses = [
    {
      title: 'Algorithms and data structures',
      description: 'A visual guide on a hard topic to let you finally grasp those highly abstract concepts',
      category: 'Software engineering',
      url: 'data-strucutres-and-algorithms',
      image: 'assets/algorithim-thumbnail.jpg'
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
