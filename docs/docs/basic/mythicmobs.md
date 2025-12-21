# MythicMobs 掉落

AkariLevel 提供了对 MythicMobs 的支持，你可以通过 `Exp-Drops` 配置怪物的经验掉落。

## 基本用法

- **等级组编辑名 经验 概率**

``` yaml
示例怪物:
  Type: ZOMBIE
  Display: '示例怪物'
  Health: 5
  Damage: 0
  Drops:
  - Apple 1 1.0
  Exp-Drops:
  - Example 100-150 0.5
```

将会有 `50%` 几率以 `MYTHICMOBS_DROP_EXP` 来源为 `Example` 等级组增加 `100` 到 `150` 点经验。