import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReacterComponent } from './reacter.component';

describe('ReacterComponent', () => {
  let component: ReacterComponent;
  let fixture: ComponentFixture<ReacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReacterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
