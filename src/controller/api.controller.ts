import { Inject, Controller, Get, Query } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { ApiResponse } from '@midwayjs/swagger';
import { UserService } from '../service/user.service';
import { RoleVO } from './role.vo';
import { UserVO } from './user.vo';

@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @ApiResponse({
    type: UserVO,
  })
  @Get('/get_user')
  async getUser(@Query('uid') uid) {
    const user = await this.userService.getUser({ uid });
    return { success: true, message: 'OK', data: user };
  }

  @ApiResponse({
    type: RoleVO,
  })
  @Get('/get_role')
  async getRole() {
    return [];
  }
}
