import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LokiTitlesComponent } from './loki-titles.component';

describe('LokiTitlesComponent', () => {
  let component: LokiTitlesComponent;
  let fixture: ComponentFixture<LokiTitlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LokiTitlesComponent]
    });
    fixture = TestBed.createComponent(LokiTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
