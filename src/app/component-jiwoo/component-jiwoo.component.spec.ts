import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentJiwooComponent } from './component-jiwoo.component';

describe('ComponentJiwooComponent', () => {
  let component: ComponentJiwooComponent;
  let fixture: ComponentFixture<ComponentJiwooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentJiwooComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentJiwooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
