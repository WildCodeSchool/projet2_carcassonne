import { async, TestBed } from '@angular/core/testing';
import { PiocheComponent } from '../pioche/pioche.component';
describe('PiocheComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PiocheComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PiocheComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    // it('should return the top with rotation equal to 180', () => {
    //   expect(tilesDeck[0].getSideKeys("top",180)).toBe("prairie");
    // });
});
//# sourceMappingURL=pioche.component.spec.js.map