# 快速上手

欢迎使用 AkariLevel！本篇教程将帮助你进行插件初始化配置。

## 插件下载

| 构建版本                                                                                                                                                      | 发行时间                                                                                                                                                     | 发行者                                                                                                                                                          |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![](https://img.shields.io/badge/dynamic/json?label=version&amp;query=$.tag_name&amp;url=https://api.github.com/repos/CPJiNan/AkariLevel/releases/latest) | ![](https://img.shields.io/badge/dynamic/json?label=date&amp;query=$.created_at&amp;url=https://api.github.com/repos/CPJiNan/AkariLevel/releases/latest) | ![](https://img.shields.io/badge/dynamic/json?label=author&amp;query=$.author.login&amp;url=https://api.github.com/repos/CPJiNan/AkariLevel/releases/latest) | 

- **GitHub**：[https://github.com/CPJiNan/AkariLevel/releases](https://github.com/CPJiNan/AkariLevel/releases)
- **QQ 群**：[704109949](https://qm.qq.com/q/91DcdBuRvW)

## 全局设置

你可以在 `plugins/AkariLevel/settings.yml` 文件中修改语言、数据存储方式等设置。

``` yaml
# 全局设置
Options:
  # 语言
  Language: "zh_CN"
  # 配置文件版本
  Config-Version: 7
  # 检查版本更新
  Check-Update: true
  # OP 版本更新通知
  OP-Notify: true
  # 启用 bStats 统计
  Send-Metrics: true
  # 启用调试模式
  Debug: false

# 数据库设置
Database:
  # 存储方式 (MYSQL, SQLITE)
  Type: SQLITE
  # 数据表名
  Table: "AkariLevel"
  # MySQL 存储设置
  MYSQL:
    host: localhost
    port: 3306
    user: root
    password: password
    database: minecraft
  # SQLite 存储设置
  SQLITE:
    file: sqlite.db
```

## 等级组配置

### 1. 等级组编辑名

`等级组编辑名` 是等级组的唯一标识符。

它是 `plugins/AkariLevel/level` 文件夹中每个配置文件第一级节点的名称。

例如，在名为 `CustomLevel.yml` 的配置文件中创建一个名为 `LevelGroup` 的等级组。

``` yaml
LevelGroup:
  General:
    Display: "等级组展示名"
```

该等级组的编辑名是 `LevelGroup`，而非 `CustomLevel` 或 `等级组展示名`。

### 2. 修改基础信息

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

SurvivalLevel:
  General:
    Display: "§a生存等级"
```

### 3. 订阅经验来源

`经验来源` 是用于区分经验变更事件发生的不同场景的字符串。

你可以通过订阅经验来源，使等级组增加指定种类的经验。

``` yaml
Example:
    Source:
        Subscribe:
          "COMMAND_ADD_EXP": 1.0
          "MYTHICMOBS_DROP_EXP": 2.0
          "TEAM_SHARE_EXP": 1.0
          "VANILLA_EXP_CHANGE": 0.0
```

例如，`MYTHICMOBS_DROP_EXP` 是通过 MythicMobs 经验掉落增加经验。

玩家每通过该方式获得 1 点经验，将会为 Example 等级组增加 `1 * 2.0 = 2` 点经验。

此外，`VANILLA_EXP_CHANGE` 是原版经验来源，倍率默认为 `0.0`。

### 4. 设置经验公式

通过修改 `Level` 节点下的配置，你可以设置等级组的 `最小等级` 与 `最大等级`。

``` yaml
Example:
    Level:
        Min: 0
        Max: 100
```

例如， 当 `Min` 值为 0、`Max` 值为 100 时，加入 Example 等级组的玩家默认等级将是 0，能够达到的最大等级将是 100。

接着，你可以通过配置 `关键等级` 来设置经验公式。

``` yaml
Key:
  0:
    Name: "§8Lv.§b0"
    Exp: "0"
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

关键等级配置中可以使用 `{member}`、`{levelGroup}`、`{level}` 等插件内置变量，同时也支持使用 PlaceholderAPI 变量。

处于非关键等级时，将自动应用上一个关键等级的设置。

## 下一步

- [插件命令](/docs/basic/command)
- [PlaceholderAPI 变量](/docs/basic/placeholder)
- [MythicMobs 掉落](/docs/basic/mythicmobs)
- [JavaScript 脚本](/docs/basic/javascript/)
- [经验加成器](/docs/basic/booster)