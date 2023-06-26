import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPartComponent } from './third-part.component';

describe('ThirdPartComponent', () => {
  let component: ThirdPartComponent;
  let fixture: ComponentFixture<ThirdPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdPartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
