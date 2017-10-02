import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalHCPComponent } from './external-hcp.component';

describe('ExternalHCPComponent', () => {
  let component: ExternalHCPComponent;
  let fixture: ComponentFixture<ExternalHCPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalHCPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalHCPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
