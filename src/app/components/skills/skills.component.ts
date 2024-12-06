import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    {
      name: 'Angular',
      image: 'images/angular.png',
      link: 'https://angular.io/'
    },
    {
      name: 'TypeScript',
      image: 'images/typescript.png', 
      link: 'https://www.typescriptlang.org/'
    },
    {
      name: 'Python',
      image: 'images/python.png', 
      link: 'https://www.python.org/'
    },
    {
      name: 'C#',
      image: 'images/Csharp.png', 
      link: 'https://learn.microsoft.com/en-us/dotnet/csharp/'
    },
    {
      name: 'React',
      image: 'images/react.png', 
      link: 'https://reactjs.org/'
    },
    {
      name: 'Java',
      image: 'images/java.png', 
      link: 'https://www.java.com/'
    },
    {
      name: '.NET',
      image: 'images/net.png', 
      link: 'https://dotnet.microsoft.com/'
    },
    {
      name: 'Spring Boot',
      image: 'images/spring-boot.png', 
      link: 'https://spring.io/projects/spring-boot'
    },
    {
      name: 'MySQL',
      image: 'images/mysql.png', 
      link: 'https://www.mysql.com/'
    },
    {
      name: 'Firebase',
      image: 'images/firebase.png', 
      link: 'https://firebase.google.com/'
    },
    {
      name: 'MongoDB',
      image: 'images/mongodb.png', 
      link: 'https://www.mongodb.com/'
    },
    {
      name: 'PostgreSQL',
      image: 'images/postgres.png', 
      link: 'https://www.postgresql.org/'
    }
  ];
}
