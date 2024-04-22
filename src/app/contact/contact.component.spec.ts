import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ContactComponent],
    });

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set copied to true after succesfully copying email', async () => {
    const email = 'matuemendez89@gmail.com';
    spyOn(navigator.clipboard, 'writeText').and.resolveTo();

    await component.copyEmail();

    expect(component.copied).toBeTrue();
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(email);
  })

  it('should set copied to false if an error occurs during copying email', async () => {
    spyOn(navigator.clipboard, 'writeText').and.rejectWith('Error');

    await component.copyEmail();

    expect(component.copied).toBeFalse();
  })
});
