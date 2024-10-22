import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GruposPage } from './grupos.page';
import { IonicModule } from '@ionic/angular';

describe('GruposPage', () => {
  let component: GruposPage;
  let fixture: ComponentFixture<GruposPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GruposPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GruposPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
