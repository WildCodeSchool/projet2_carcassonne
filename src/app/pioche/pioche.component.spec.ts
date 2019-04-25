import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { tilesDeck } from '../tuilesData';
import { PiocheComponent } from '../pioche/pioche.component'

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

  // it('should return the top with rotation equal to 180', () => {
  //   expect(tilesDeck[0].getSideKeys("top",180)).toBe("prairie");
  // });
});
