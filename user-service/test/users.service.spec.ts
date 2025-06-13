
import { UsersService } from '../src/users/users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    service = new UsersService();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
