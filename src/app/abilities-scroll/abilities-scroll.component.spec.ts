import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilitiesScrollComponent } from './abilities-scroll.component';

describe('AbilitiesScrollComponent', () => {
  let component: AbilitiesScrollComponent;
  let fixture: ComponentFixture<AbilitiesScrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbilitiesScrollComponent]
    });
    fixture = TestBed.createComponent(AbilitiesScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
