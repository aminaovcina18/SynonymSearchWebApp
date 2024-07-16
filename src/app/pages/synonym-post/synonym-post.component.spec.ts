import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynonymPostComponent } from './synonym-post.component';

describe('SynonymPostComponent', () => {
  let component: SynonymPostComponent;
  let fixture: ComponentFixture<SynonymPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SynonymPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SynonymPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
