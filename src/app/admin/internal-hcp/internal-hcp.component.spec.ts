import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalHCPComponent } from './internal-hcp.component';

describe('InternalHCPComponent', () => {
  let component: InternalHCPComponent;
  let fixture: ComponentFixture<InternalHCPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalHCPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalHCPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
