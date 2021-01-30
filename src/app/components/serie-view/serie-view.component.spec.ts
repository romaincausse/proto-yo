import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieViewComponent } from './serie-view.component';

describe('SerieViewComponent', () => {
  let component: SerieViewComponent;
  let fixture: ComponentFixture<SerieViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
