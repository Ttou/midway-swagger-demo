import { ApiExtraModel, ApiProperty, getSchemaPath } from '@midwayjs/swagger';
import { UserVO } from './user.vo';

@ApiExtraModel(UserVO)
export class RoleVO {
  @ApiProperty()
  roleId: number;

  @ApiProperty({
    type: 'array',
    items: { $ref: getSchemaPath('UserVO') },
  })
  users: UserVO[];
}
