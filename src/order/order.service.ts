import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import * as YooKassa from 'yookassa'

const yooKassa = new YooKassa({
	shopId: process.env['SHOP_ID'],
	sekretKey: process.env['PAYMENT_TOKEN']
})

@Injectable()
export class OrderService {
	constructor(private prisma: PrismaService) {}

	async getAll(userId: number) {
		return this.prisma.order.findMany({
			where: {
				userId
			},
			orderBy: {
				createdAt: 'desc'
			}
			// include: {
			// 	items: {
			// 		include: {
			// 			product: {
			// 				select: productReturnObject
			// 			}
			// 		}
			// 	}
			// }
		})
	}

	// async placeOrder(dto: OrderDto, userId: number) {
	// 	const order = await this.prisma.order.create({
	// 		data: {
	// 			status: dto.status,
	// 			items: {
	// 				create: dto.items
	// 			},
	// 			user: {
	// 				connect: {
	// 					id: userId
	// 				}
	// 			}
	// 		}
	// 	})

	// 	return order
	// }
}
