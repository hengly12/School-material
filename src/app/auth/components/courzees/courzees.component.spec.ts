import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourzeesComponent } from './courzees.component';

describe('CourzeesComponent', () => {
  let component: CourzeesComponent;
  let fixture: ComponentFixture<CourzeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourzeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourzeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
