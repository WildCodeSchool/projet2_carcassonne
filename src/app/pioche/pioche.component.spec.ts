import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiocheComponent } from './pioche.component';

describe('PiocheComponent', () => {
  let component: PiocheComponent;
  let fixture: ComponentFixture<PiocheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiocheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
