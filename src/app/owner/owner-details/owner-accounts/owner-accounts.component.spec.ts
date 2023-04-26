import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerAccountsComponent } from './owner-accounts.component';

describe('OwnerAccountsComponent', () => {
  let component: OwnerAccountsComponent;
  let fixture: ComponentFixture<OwnerAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerAccountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
