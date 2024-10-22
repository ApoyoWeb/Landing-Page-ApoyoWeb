import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConturiasComponent } from './conturias.component';

describe('ConturiasComponent', () => {
  let component: ConturiasComponent;
  let fixture: ComponentFixture<ConturiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConturiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConturiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
