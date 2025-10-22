import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import STORIES_ROUTES, { StoriesPageComponent } from './stories';

describe('StoriesPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoriesPageComponent],
      providers: [provideRouter(STORIES_ROUTES)],
    }).compileComponents();
  });

  it('should create the Stories page', () => {
    const fixture = TestBed.createComponent(StoriesPageComponent);
    const cmp = fixture.componentInstance;
    expect(cmp).toBeTruthy();
  });
});
