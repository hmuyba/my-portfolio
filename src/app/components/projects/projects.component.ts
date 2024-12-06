import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Todo App',
      description: 'Manage your daily tasks with this full-stack app. Built with Angular and Spring Boot for seamless performance.',
      image: '/images/todo-app.png',
      link: 'https://todo-frontend-gamma-lake.vercel.app/tasks',
      technologies: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'MySQL', 'Material UI']
    },
    {
      name: 'Tienda Online',
      description: `An online store for managing clothing items with full CRUD functionality. <strong>Login required:</strong> username: <strong>testuser@gmail.com</strong>, password: <strong>123456</strong>.`,
      image: '/images/tienda-online.png',
      link: 'https://tienda-online-54b5b.web.app/',
      technologies: ['Angular', 'Firebase', 'Bootstrap', 'TypeScript']
    },
    {
      name: 'Control Clientes',
      description: `Easily manage clients and their budgets. <strong>Login required:</strong> username: <strong>testuser@gmail.com</strong>, password: <strong>123456</strong>.`,
      image: '/images/control-de-clientes.png',
      link: 'https://control-clientes-947e9.web.app/',
      technologies: ['Angular', 'Firebase', 'Bootstrap', 'TypeScript']
    },
    {
      name: 'Portfolio',
      description: 'A responsive portfolio showcasing my skills, projects, and professional experience.',
      image: '/images/portfolio.png',
      link: 'https://my-portfolio-lilac-gamma.vercel.app/',
      technologies: ['Angular', 'CSS', 'HTML', 'TypeScript']
    }
  ];
}
