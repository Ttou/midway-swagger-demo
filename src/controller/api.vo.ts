import { ApiProperty, getSchemaPath } from '@midwayjs/swagger';

export class UserVO {
  @ApiProperty()
  userId: number;

  @ApiProperty({
    type: 'array',
    items: { $ref: () => getSchemaPath(RoleVO) },
  })
  roles: RoleVO[];
}

export class RoleVO {
  @ApiProperty()
  roleId: number;

  @ApiProperty({
    type: 'array',
    items: { $ref: () => getSchemaPath(UserVO) },
  })
  users: UserVO[];
}
