import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CategoryDto } from './category.dto'
import { CategoryService } from './category.service'

@Controller('categories')
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {}

	@Get('profile')
	async getAll() {
		return this.categoryService.getAll()
	}

	@Get('by-slug/:slug')
	async getBySlug(@Param('slug') slug: string) {
		return this.categoryService.bySlug(slug)
	}

	@Get(':id')
	@Auth()
	async getById(@Param('id') id: string) {
		return this.categoryService.byId(+id)
	}

	@HttpCode(200)
	@Auth()
	@Post(':id')
	async create() {
		return this.categoryService.create()
	}

	@UsePipes(new ValidationPipe())
	@Auth()
	@HttpCode(200)
	@Put(':id')
	async update(@Body() dto: CategoryDto, @Param('id') categoryId: string) {
		return this.categoryService.update(+categoryId, dto)
	}

	@UsePipes(new ValidationPipe())
	@Auth()
	@HttpCode(200)
	@Delete(':id')
	async delete(@Param('id') categoryId: string) {
		return this.categoryService.delete(+categoryId)
	}
}