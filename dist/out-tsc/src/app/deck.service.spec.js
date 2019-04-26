import { TestBed } from '@angular/core/testing';
import { DeckService } from './deck.service';
describe('DeckService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(DeckService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=deck.service.spec.js.map