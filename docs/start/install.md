# 💻 安装 & 配置

## 等级组编辑名

`等级组编辑名` 是等级组的唯一标识符。

它是 `level` 文件夹中每个配置文件第一级节点的名称。

例如，在名为 `CustomLevel.yml` 的配置文件中创建一个名为 `LevelGroup` 的等级组。

``` yaml
LevelGroup:
  General:
    Display: "等级组展示名"
  ...
```

该等级组的编辑名是 `LevelGroup`，而非 `CustomLevel` 或 `等级组展示名`。

## 修改基础信息

第一次加载插件时，`level` 文件夹中将会自动生成 `Example.yml` 配置文件，其中存在编辑名为 `Example` 的示例等级组。

你可以修改该等级组的基础信息，例如：

``` yaml
AdventureLevel:
  General:
    Display: "§6冒险等级"
```

如果想要创建多个等级组，你可以在 `level` 文件夹下新建配置文件，或者在已有的配置文件下添加新的节点。

``` yaml
AdventureLevel:
  General:
    Display: "§6冒险等级"
  ...

SurvivalLevel:
  General:
    Display: "§a生存等级"
  ...
```

## 订阅经验来源

`经验来源` 是用于区分经验变更事件发生的不同场景的字符串。

你可以通过订阅经验来源，使等级组增加某一种类的经验。

``` yaml
Example:
    ...
    Source:
        Subscribe:
          "COMMAND_ADD_EXP": 1.0
          "MYTHICMOBS_DROP_EXP": 2.0
          "TEAM_SHARE_EXP": 1.0
          "VANILLA_EXP_CHANGE": 0.0
```

例如，`MYTHICMOBS_DROP_EXP` 是通过 MythicMobs 经验掉落增加经验。

玩家每通过该方式获得 1 点经验，将会为 `Example` 等级组增加 `1 * 2.0 = 2` 点经验。

此外，`VANILLA_EXP_CHANGE` 是原版经验来源，倍率默认为 `0.0`。

## 设置经验公式

通过修改 `Level` 节点下的配置，你可以设置等级组的 `最小等级` 与 `最大等级`。

``` yaml
Example:
    ...
    Level:
        Min: 0
        Max: 100
        Auto-LevelUp: true
        Exp-Limit: true
```

例如， 当 `Min` 值为 0、`Max` 值为 100 时，加入 `Example` 等级组的玩家默认等级将是 0，能够达到的最大等级将是 100。

接着，你可以通过配置 `关键等级` 来设置经验公式。

``` yaml
Key:
  0:
    Name: "§8Lv.§b0"
    Exp: "0"
    Condition: { }
    Action: { }
  1:
    Name: "§8Lv.§b{level}"
    Exp: "{level} * 50 + 100"
    Action:
      Kether:
        - title "§e§lLevel UP!"
        - subtitle "%AkariLevel_{levelGroup}_LastLevelName% §7→ %AkariLevel_{levelGroup}_LevelName%" by 10 25 10
        - actionbar "§8[ §7%AkariLevel_{levelGroup}_Exp% §8/ §7%AkariLevel_{levelGroup}_NextLevelExp% §8]"
  50:
    Name: "§8Lv.§b%level%"
    Exp: "{level} * 100 + 100"
    Action:
      Kether:
        - title "§e§lLevel UP!"
        - subtitle "%AkariLevel_{levelGroup}_LastLevelName% §7→ %AkariLevel_{levelGroup}_LevelName%" by 10 25 10
        - actionbar "§8[ §7%AkariLevel_{levelGroup}_Exp% §8/ §7%AkariLevel_{levelGroup}_NextLevelExp% §8]"
```

关键等级配置中可以使用 `{member}`、`{levelGroup}`、`{level}` 等插件内置变量，同时也支持使用 `PlaceholderAPI` 变量。

处于非关键等级时，将自动应用上一个关键等级的设置。

## 自动加入等级组

除了使用命令新增等级组成员之外，你还可以使用 `AutoJoin.js` 脚本将玩家自动加入等级组。

该脚本位于 `script` 文件夹中，使用前需要配置自动加入的等级组列表。

``` javascript
var levelGroupNames = ["AdventureLevel", "SurvivalLevel"];
...
```

## 追踪等级组

你可以 `追踪` 某个等级组，在原版经验条上显示该等级组的等级进度。

使用前需要在 `Track.js` 脚本中配置要追踪的等级组编辑名。

``` javascript
var levelGroupName = "Example";
...
```