import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      title: 'Main',
      icon: 'mdi mdi-gauge',
      submenu: [
        {
          title: 'Dashboard',
          url: '/dashboard'
        },
        {
          title: 'ProgressBar',
          url: '/progress'
        },
        {
          title: 'Graphs',
          url: '/graph1'
        }
      ]
    }
  ];

  constructor() { }
}
