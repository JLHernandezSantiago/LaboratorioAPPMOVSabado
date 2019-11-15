import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenChartPage } from './resumen-chart.page';

describe('ResumenChartPage', () => {
  let component: ResumenChartPage;
  let fixture: ComponentFixture<ResumenChartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumenChartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenChartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
