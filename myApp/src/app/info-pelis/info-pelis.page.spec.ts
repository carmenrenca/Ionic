import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoPelisPage } from './info-pelis.page';

describe('InfoPelisPage', () => {
  let component: InfoPelisPage;
  let fixture: ComponentFixture<InfoPelisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPelisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoPelisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
