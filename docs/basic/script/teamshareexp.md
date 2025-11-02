# TeamShareExp - 队伍经验共享

## 脚本介绍

当组队中的玩家获取经验时，队伍成员也将参与经验分配。

## 脚本配置

将 `enable` 项设置为 `true`。

``` javascript
var enable = true;
```

在 `sources` 项的 `[]` 内填写队伍共享的经验来源列表，使用 `,` 分割。

``` javascript
var sources = ["MYTHICMOBS_DROP_EXP", "VANILLA_EXP_CHANGE"];
```

在 `leaderWeight` 和 `memberWeight` 项修改**队长权重**/**队员权重**。

``` javascript
var leaderWeight = 1
var memberWeight = 1
```

## 常见问题

### 1. 队伍经验如何分配？

- `队伍总经验 = 获得经验 * 队伍人数`
- `队伍总权重 = 队长权重 + 队员权重 * (队伍人数 - 1)`
- `队长获得经验 = 队伍总经验 * (队长权重 / 队伍总权重)`
- `队员获得经验 = 队伍总经验 * (队员权重 / 队伍总权重)`

``` javascript
var totalAmount = expAmount * team.getPlayers().length;
var totalWeight = leaderWeight + memberWeight * (team.getPlayers().length - 1)
var leaderAmount = Math.floor(totalAmount * (leaderWeight / totalWeight))
var memberAmount = Math.floor(totalAmount * (memberWeight / totalWeight))
```