import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverrweightComponent } from './overrweight.component';

describe('OverrweightComponent', () => {
  let component: OverrweightComponent;
  let fixture: ComponentFixture<OverrweightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverrweightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverrweightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
