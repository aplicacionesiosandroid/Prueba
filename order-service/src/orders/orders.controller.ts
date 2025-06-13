
import { Controller, Post, Get, Patch, Param, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post()
  create(@Body() body: { userId: number }) {
    return this.ordersService.create(body);
  }

  @Get(':userId')
  findAllByUser(@Param('userId') userId: string) {
    return this.ordersService.findAllByUser(Number(userId));
  }

  @Patch(':orderId/status')
  updateStatus(@Param('orderId') orderId: string, @Body() body: { status: string }) {
    return this.ordersService.updateStatus(Number(orderId), body.status as any);
  }
}
