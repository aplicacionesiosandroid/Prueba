
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class OrdersService {
  async create(order: { userId: number }) {
    return prisma.order.create({
      data: {
        userId: order.userId,
        status: 'PENDING',
      },
    });
  }

  async findAllByUser(userId: number) {
    return prisma.order.findMany({
      where: { userId },
    });
  }

  async updateStatus(orderId: number, status: 'PENDING' | 'PROCESSING' | 'COMPLETED') {
    return prisma.order.update({
      where: { id: orderId },
      data: { status },
    });
  }
}
