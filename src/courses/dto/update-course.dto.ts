import { PartialType } from '@nestjs/mapped-types';
import { CreateCourserDTO } from './create-course.dto';

export class UpdateCourseDto extends PartialType(CreateCourserDTO) {}
