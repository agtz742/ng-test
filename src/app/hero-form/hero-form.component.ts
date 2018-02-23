import { Component, OnInit } from '@angular/core';
import { Hero }    from '../hero';
import { HeroPowersService } from '../hero-powers.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  powers: string[];

  constructor(private powerService:HeroPowersService ) { }

  ngOnInit() {
    this.getPowers();
  }

  getPowers(): void {
    this.powerService.getHeroPowers()
    .subscribe(powers => this.powers = powers);
  }
}
