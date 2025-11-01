# AutoJoin - 自动加入等级组

## 脚本介绍

当玩家进入服务器时，自动将其加入到指定等级组。

## 脚本配置

在 `[]` 内填写要自动加入的等级组编辑名列表，使用 `,` 分割。

``` javascript
// 1. 关闭该功能。
var levelGroupNames = [];
// 2. 自动加入 AdventureLevel 等级组。
var levelGroupNames = ["AdventureLevel"];
// 3. 自动加入 AdventureLevel 和 SurvivalLevel 等级组。
var levelGroupNames = ["AdventureLevel", "SurvivalLevel"];
```