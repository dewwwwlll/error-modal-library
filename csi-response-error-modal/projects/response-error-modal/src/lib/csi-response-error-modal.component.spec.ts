import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsiResponseErrorModalComponent } from './csi-response-error-modal.component';

describe('ResponseErrorModalComponent', () => {
  let component: CsiResponseErrorModalComponent;
  let fixture: ComponentFixture<CsiResponseErrorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsiResponseErrorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsiResponseErrorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
