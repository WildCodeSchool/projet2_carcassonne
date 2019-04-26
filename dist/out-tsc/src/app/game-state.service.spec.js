import { TestBed } from '@angular/core/testing';
import { GameStateService } from './game-state.service';
describe('GameStateService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(GameStateService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=game-state.service.spec.js.map