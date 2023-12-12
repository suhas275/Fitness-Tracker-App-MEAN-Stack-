import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderweightComponent } from './underweight.component';

describe('UnderweightComponent', () => {
  let component: UnderweightComponent;
  let fixture: ComponentFixture<UnderweightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderweightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderweightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
