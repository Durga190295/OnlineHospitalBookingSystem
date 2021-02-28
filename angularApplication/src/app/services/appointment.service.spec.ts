import { TestBed } from '@angular/core/testing';

import { TutorialService } from './appointment.service';

describe('AppointmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TutorialService = TestBed.get(TutorialService);
    expect(service).toBeTruthy();
  });
});
