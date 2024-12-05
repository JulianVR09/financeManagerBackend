import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { BcryptService } from '../common/services/bcrypt.service';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [],
  providers: [
    UserService,
    BcryptService,
    AuthGuard,
    JwtService,
  ],
  exports: [UserService],
})
export class UserModule {}