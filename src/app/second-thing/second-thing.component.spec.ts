import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondThingComponent } from './second-thing.component';

describe('SecondThingComponent', () => {
  let component: SecondThingComponent;
  let fixture: ComponentFixture<SecondThingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondThingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
