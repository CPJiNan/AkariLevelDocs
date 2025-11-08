# ExpAddition - 经验加成属性

## 脚本介绍

获取 `AttributePlus` 等插件的属性变量，提供额外经验加成。

## 脚本配置

将 `enable` 项设置为 `true`。

``` javascript
var enable = true;
```

在 `sources` 项的 `[]` 内填写受到加成的经验来源列表，使用 `,` 分割。

``` javascript
var sources = ["MYTHICMOBS_DROP_EXP"];
```

将 `placeholder` 项设置为经验加成属性的 `PlaceholderAPI` 变量。

``` javascript
var placeholder = "%ap_exp_addition:max%";
```