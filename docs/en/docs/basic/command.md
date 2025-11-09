# Plugin Commands

AkariLevel registers numerous commands, you can view command help through `/akarilevel` or `/al`.

## Command List

| Command                                                          | Description                      |
|------------------------------------------------------------------|----------------------------------|
| `/akarilevel help`                                               | View plugin command help         |
| `/akarilevel levelGroup`                                         | Level Group Commands             |
| `/akarilevel levelGroup info <levelGroup>`                       | View level group info            |
| `/akarilevel levelGroup list`                                    | View level group list            |
| `/akarilevel levelGroup unregister <levelGroup>`                 | Unregister level group           |
| `/akarilevel levelGroup reregister <levelGroup>`                 | Re-register level group          |
| `/akarilevel levelGroup reload`                                  | Reload level group configuration |
| `/akarilevel member`                                             | Member Commands                  |
| `/akarilevel member has <member> <levelGroup>`                   | Check members                    |
| `/akarilevel member add <member> <levelGroup>`                   | Add a member                     |
| `/akarilevel member remove <member> <levelGroup>`                | Remove a member                  |
| `/akarilevel member info <member> <levelGroup>`                  | View member info                 |
| `/akarilevel member level`                                       | Member level commands            |
| `/akarilevel member level set <member> <levelGroup> <amount>`    | Set member level                 |
| `/akarilevel member level add <member> <levelGroup> <amount>`    | Increase member level            |
| `/akarilevel member level remove <member> <levelGroup> <amount>` | Decrease member level            |
| `/akarilevel member exp`                                         | Member exp commands              |
| `/akarilevel member exp set <member> <levelGroup> <amount>`      | Set member experience            |
| `/akarilevel member exp add <member> <levelGroup> <amount>`      | Add member experience            |
| `/akarilevel member exp remove <member> <levelGroup> <amount>`   | Take member experience           |
| `/akarilevel member levelUp <levelGroup> <member>`               | Member upgrade                   |
| `/akarilevel reload`                                             | Reload Configuration             |

## Permission List

| Permission                          | Description                    | Default |
|-------------------------------------|--------------------------------|---------|
| `AkariLevel.command.use`            | Command usage permission       | OP      |
| `AkariLevel.command.help.use`       | Command help permission        | OP      |
| `AkariLevel.command.levelGroup.use` | Level group command permission | OP      |
| `AkariLevel.command.member.use`     | Member command permission      | OP      |
| `AkariLevel.command.reload.use`     | Reload command permission      | OP      |