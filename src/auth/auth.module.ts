import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { JwtModule } from '@nestjs/jwt';
import { Guardian } from './guardian/guardian';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    UsuariosModule,
    JwtModule.register({
      global: true,
      secret: 'hola mundo',
      signOptions: { expiresIn: '100s' },
    }),
  ],
})
export class AuthModule {}
