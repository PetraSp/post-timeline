import { TestBed, async } from '@angular/core/testing';
import { LocalStorageService } from './localStorage.service';

describe('LocalStorage service', () => {
  let storageService: LocalStorageService;
  const key = 'fakeKey';
  const value = 'testValue';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService]
    });
    storageService = TestBed.get(LocalStorageService);
  }));

  afterEach(() => {
    window.localStorage.clear();
  });

  it('should get an item', async(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
    expect(storageService.get(key)).toBe('testValue');
  }));

  it('should create an item', async(() => {
    storageService.set(key, value);
    expect(storageService.get(key)).toBe('testValue');
  }));

  it('should remove an item', async(() => {
    storageService.remove(key);
    expect(storageService.get(key)).toBeFalsy();
  }));
});
