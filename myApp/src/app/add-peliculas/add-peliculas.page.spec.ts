import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPeliculasPage } from './add-peliculas.page';

describe('AddPeliculasPage', () => {
  let component: AddPeliculasPage;
  let fixture: ComponentFixture<AddPeliculasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPeliculasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPeliculasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
