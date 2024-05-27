import { TestBed } from '@angular/core/testing';
import { ExempleDashboardComponent } from './exempleDashboard.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExempleDashboardComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ExempleDashboardComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'AMAC' title`, () => {
    const fixture = TestBed.createComponent(ExempleDashboardComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AMAC');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ExempleDashboardComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, AMAC');
  });
});
