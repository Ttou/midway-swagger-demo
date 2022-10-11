import { ApiProperty, getSchemaPath } from '@midwayjs/swagger';
import { RoleVO } from './role.vo';

export class UserVO {
  @ApiProperty()
  userId: number;

  @ApiProperty({
    type: 'array',
    items: { $ref: getSchemaPath(RoleVO) },
  })
  roles: RoleVO[];
}
