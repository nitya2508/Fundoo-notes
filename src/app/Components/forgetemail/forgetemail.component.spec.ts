import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetemailComponent } from './forgetemail.component';

describe('ForgetemailComponent', () => {
  let component: ForgetemailComponent;
  let fixture: ComponentFixture<ForgetemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetemailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
