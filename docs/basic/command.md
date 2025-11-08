# 命令

## 命令列表

| 命令                                                               | 描述           |
|------------------------------------------------------------------|--------------|
| `/akarilevel help`                                               | 查看插件命令帮助     |
| `/akarilevel levelGroup`                                         | 查看等级组命令帮助    |
| `/akarilevel levelGroup info <levelGroup>`                       | 查看等级组信息      |
| `/akarilevel levelGroup list`                                    | 查看等级组列表      |
| `/akarilevel levelGroup unregister <levelGroup>`                 | 取消注册等级组      |
| `/akarilevel levelGroup reregister <levelGroup>`                 | 重新注册等级组      |
| `/akarilevel levelGroup reload`                                  | 重载配置等级组      |
| `/akarilevel member`                                             | 查看成员命令帮助     |
| `/akarilevel member has <member> <levelGroup>`                   | 检查等级组中是否存在成员 |
| `/akarilevel member add <member> <levelGroup>`                   | 为等级组增加成员     |
| `/akarilevel member remove <member> <levelGroup>`                | 从等级组移除成员     |
| `/akarilevel member info <member> <levelGroup>`                  | 查看成员信息       |
| `/akarilevel member level`                                       | 查看成员等级命令帮助   |
| `/akarilevel member level set <member> <levelGroup> <amount>`    | 设置成员等级       |
| `/akarilevel member level add <member> <levelGroup> <amount>`    | 增加成员等级       |
| `/akarilevel member level remove <member> <levelGroup> <amount>` | 移除成员等级       |
| `/akarilevel member exp`                                         | 查看成员经验命令帮助   |
| `/akarilevel member exp set <member> <levelGroup> <amount>`      | 设置成员经验       |
| `/akarilevel member exp add <member> <levelGroup> <amount>`      | 增加成员经验       |
| `/akarilevel member exp remove <member> <levelGroup> <amount>`   | 移除成员经验       |
| `/akarilevel member levelUp <levelGroup> <member>`               | 执行成员升级       |
| `/akarilevel reload`                                             | 重载插件         |

## 权限列表

| 权限                                  | 描述      | 默认 |
|-------------------------------------|---------|----|
| `AkariLevel.command.use`            | 命令使用权限  | OP |
| `AkariLevel.command.help.use`       | 命令帮助权限  | OP |
| `AkariLevel.command.levelGroup.use` | 等级组命令权限 | OP |
| `AkariLevel.command.member.use`     | 成员命令权限  | OP |
| `AkariLevel.command.reload.use`     | 重载命令权限  | OP |