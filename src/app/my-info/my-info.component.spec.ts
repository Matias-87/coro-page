import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInfoComponent } from './my-info.component';
import { Component } from '@angular/core';

describe('MyInfoComponent', () => {
  let component: MyInfoComponent;
  let fixture: ComponentFixture<MyInfoComponent>;

  @Component({standalone: true, selector: 'app-abilities-scroll', template: ''})
  class AbilitiesScrollStubComponent { }
  
  @Component({standalone: true, selector: 'app-projects', template: ''})
  class ProjectsStubComponent { }

  @Component({standalone: true, selector: 'app-contact', template: ''})
  class ContactStubComponent { }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyInfoComponent],
      imports: [
        AbilitiesScrollStubComponent,
        ProjectsStubComponent,
        ContactStubComponent
      ]
    });
    fixture = TestBed.createComponent(MyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
