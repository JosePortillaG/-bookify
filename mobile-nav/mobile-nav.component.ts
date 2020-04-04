import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

 async navigate(path: string): Promise<void> {
   await this.router.navigate([`${path}`]);
  }

}
