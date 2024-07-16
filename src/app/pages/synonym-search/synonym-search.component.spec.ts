import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynonymSearchComponent } from './synonym-search.component';

describe('SynonymSearchComponent', () => {
  let component: SynonymSearchComponent;
  let fixture: ComponentFixture<SynonymSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SynonymSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SynonymSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
