import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { CreateCoursesTable1715129967227 } from 'src/migrations/1715129967227-CreateCoursesTable';
import { CreateTagsTable1715130838868 } from 'src/migrations/1715130838868-CreateTagsTable';
import { CreateCoursesTagsTable1715131895069 } from 'src/migrations/1715131895069-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1715132335838 } from 'src/migrations/1715132335838-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1715133177205 } from 'src/migrations/1715133177205-AddTagsIdToCoursesTagsTable';
import { Course } from 'src/courses/entities/courses.entity';
import { Tag } from 'src/courses/entities/tags.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Course, Tag],
  synchronize: false,
};

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1715129967227,
    CreateTagsTable1715130838868,
    CreateCoursesTagsTable1715131895069,
    AddCoursesIdToCoursesTagsTable1715132335838,
    AddTagsIdToCoursesTagsTable1715133177205,
  ],
});
