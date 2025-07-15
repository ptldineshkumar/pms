import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverDemoComponent } from './receiver-demo.component';

describe('ReceiverDemoComponent', () => {
  let component: ReceiverDemoComponent;
  let fixture: ComponentFixture<ReceiverDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiverDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiverDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
