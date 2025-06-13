
import { OrdersService } from '../src/orders/orders.service';

describe('OrdersService', () => {
  let service: OrdersService;

  beforeEach(() => {
    service = new OrdersService();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
