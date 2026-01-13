import {
  Controller,
  Get,
  Req,
  UseGuards,
  Res,
  Post,
  Body,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleAuthGuard } from './googleAuth.guard';
import { JwtAuthGuard } from './jwtAuth.guard';
import type { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // Initiates Google OAuth flow
  @Get('google')
  @UseGuards(GoogleAuthGuard)
  async googleAuth(@Req() req) {
    // Guard redirects to Google
  }

  // Google OAuth callback
  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  async googleAuthRedirect(@Req() req, @Res() res: Response) {
    const result = await this.authService.googleLogin(req);

    // Redirect to frontend with token
    // Option 1: Redirect with token in URL (for frontend to capture)
    return res.redirect(
      `http://localhost:3001/auth/success?token=${result.accessToken}`,
    );

    // Option 2: Return JSON response (for API calls)
    // return res.json(result);
  }

  // Get user profile (protected route)
  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async getProfile(@Req() req) {
    return this.authService.getProfile(req.user.id);
  }

  // Check authentication status
  @Get('status')
  @UseGuards(JwtAuthGuard)
  async getStatus(@Req() req) {
    return {
      authenticated: true,
      user: req.user,
    };
  }

  @Post('login')
  login(@Body() payload) {
    return this.authService.createUser(payload);
  }

  @Post('logout')
  logout(@Req() req: Request) {
    return this.authService.logout(req);
  }

  @Get('users') /// to remove later
  getAll() {
    return this.authService.getAllUsers();
  }
}
