import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { UserModule } from 'src/user/user.module'
import { StatisticController } from './statistic.controller'
import { StatisticService } from './statistic.service'

@Module({
	controllers: [StatisticController],
	providers: [StatisticService, PrismaService, UserModule],
	imports: [UserModule]
})
export class StatisticModule {}
