import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JiwooComponent } from './jiwoo.component';

describe('JiwooComponent', () => {
  let component: JiwooComponent;
  let fixture: ComponentFixture<JiwooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JiwooComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JiwooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
