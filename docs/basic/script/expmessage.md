# ExpMessage - 经验获取提示

## 脚本介绍

在玩家获取经验时发送提示消息。

## 脚本配置

在 `sources` 项的 `[]` 内填写受到加成的经验来源列表，使用 `,` 分割。

``` javascript
var sources = ["MYTHICMOBS_DROP_EXP", "VANILLA_EXP_CHANGE"];
```

## 常见问题

### 1. 如何自定义提示消息内容？

修改 `sendMessage` 方法的参数。

``` javascript
player.sendMessage("§7Exp +§f" + expAmount + "§7.")
```