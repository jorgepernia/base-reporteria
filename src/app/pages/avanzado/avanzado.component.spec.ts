import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvanzadoComponent } from './avanzado.component';

describe('AvanzadoComponent', () => {
  let component: AvanzadoComponent;
  let fixture: ComponentFixture<AvanzadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvanzadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvanzadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
