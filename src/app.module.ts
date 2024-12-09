import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config'; //variables de entor enabled
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm.config';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: process.env.NODE_ENV === 'production',
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: typeormConfig,
      inject: [ConfigService], //injects env variables to typeormconfig
    }),
    CategoriesModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: 'MONGO_CONNECTION', useFactory: () => {} },
  ],
})
export class AppModule {}
