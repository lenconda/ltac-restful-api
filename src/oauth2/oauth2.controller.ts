import {
    Body,
    Controller,
    Get,
    Post,
    Query,
} from '@nestjs/common';
import { Oauth2Service } from './oauth2.service';

@Controller('/oauth2')
export class Oauth2Controller {
    public constructor(
        private readonly oauth2Service: Oauth2Service,
    ) {}

    @Post('/validate')
    public async validateOauth2AccessToken(
        @Body('token') token: string,
        @Body('audience') audience: string | string[],
    ) {
        return await this.oauth2Service.validateOauth2AccessToken(token, audience);
    }

    @Get('/exchange')
    public async handleAuthenticationCallback(
        @Query('code') code: string,
        @Query('client_id') clientId: string,
    ) {
        return await this.oauth2Service.exchangeAccessTokenFromCode(code, clientId);
    }
}
