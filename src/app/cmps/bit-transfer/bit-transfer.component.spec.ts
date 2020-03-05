import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitTransferComponent } from './bit-transfer.component';

describe('BitTransferComponent', () => {
  let component: BitTransferComponent;
  let fixture: ComponentFixture<BitTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
