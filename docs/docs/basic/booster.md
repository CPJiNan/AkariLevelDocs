# 经验加成器

AkariLevel 支持创建自定义经验加成器，允许为玩家提供额外经验加成。

同时，你也可以设置加成器的**加成倍率**/**持续时长**/**等级组限制**/**经验来源限制**等参数。

## 快速开始

### 1. 创建经验加成器

你可以使用 **/akarilevel booster add 成员名称 经验加成器名称 加成倍率** 命令为玩家新增经验加成器，例如：

``` yaml
# 1. 基础用法。
/akarilevel booster add PlayerName 1.5倍经验加成器 1.5
# 2. 设置经验来源限制。
/akarilevel booster add PlayerName 2.0倍经验加成器 2.0 --source=MYTHICMOBS_DROP_EXP
# 3. 设置持续时长和经验来源限制。
/akarilevel booster add PlayerName 3.0倍经验加成器 3.0 --duration=1d12h --source=MYTHICMOBS_DROP_EXP
```

**参数列表**

| 参数           | 描述                              | 默认值             |
|--------------|---------------------------------|-----------------|
| `id`         | ID                              | 随机八位字母数字组合      |
| `type`       | 类型                              | 空字符串            |
| `duration`   | 持续时长                            | 永久              |
| `levelGroup` | 等级组限制                           | 空字符串            |
| `source`     | [经验来源](/docs/start#_3-订阅经验来源)限制 | COMMAND_ADD_EXP |

**注意事项**

- 使用 `--key=value` 指定参数。所有参数可选，未指定的参数将自动使用默认值。
- `type` 是经验加成器类型。**同种类型取最大倍率，不同类型倍率相乘**。
- `duration` 是持续时长。单位为 **d->天**/**h->时**/**m->分**/**s->秒**。
- `source` 是经验来源限制。未指定该参数时，只加成通过 **exp add** 命令增加的经验。

### 2. 查看经验加成器信息

成员的所有加成器会在**加成器列表**中显示，你可以使用 **/akarilevel booster list 成员名称** 命令查看。

点击加成器右侧的 **<ℹ>** 按钮可以查看加成器详细信息。

![](/booster.png)

### 3. 启用/禁用经验加成器

你可以使用 **/akarilevel booster disable 成员名称 经验加成器ID** 命令禁用加成器。

在禁用期间，**加成器不会生效，且不会计算时长**。

如需再次启用加成器，执行 **/akarilevel booster enable 成员名称 经验加成器ID** 命令即可。