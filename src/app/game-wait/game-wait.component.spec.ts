import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameWaitComponent } from './game-wait.component';

describe('GameWaitComponent', () => {
  let component: GameWaitComponent;
  let fixture: ComponentFixture<GameWaitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameWaitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameWaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
