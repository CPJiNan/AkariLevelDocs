# Kether 脚本

`Kether` 是 TabooLib 内置的一套功能强大的脚本语言，它提供了简洁的语法、丰富的内置功能和强大的扩展能力。

AkariLevel 支持在**升级条件**、**升级动作**中使用 Kether 脚本，同时注册了一些自定义语句。

## 语句列表

由 AkariLevel 提供的语句，在使用时应带有命名空间前缀 `akarilevel:`。

完整 Kether 语句列表请查看 [Kether Explorer](https://taboolib.hhhhhy.kim/kether-list)。

### has-member

**描述**

检查等级组中是否存在成员。

**语法**

```
akarilevel:has-member <member> <levelGroup>
```

### add-member

**描述**

为等级组增加成员。

**语法**

```
akarilevel:add-member <member> <levelGroup> <source>
```

### remove-member

**描述**

从等级组移除成员。

**语法**

```
akarilevel:remove-member <member> <levelGroup> <source>
```

### get-level

**描述**

获取成员等级。

**语法**

```
akarilevel:get-level <member> <levelGroup>
```

### set-level

**描述**

设置成员等级。

**语法**

```
akarilevel:set-level <member> <levelGroup> <amount> <source>
```

### add-level

**描述**

增加成员等级。

**语法**

```
akarilevel:add-level <member> <levelGroup> <amount> <source>
```

### remove-level

**描述**

移除成员等级。

**语法**

```
akarilevel:remove-level <member> <levelGroup> <amount> <source>
```

### get-exp

**描述**

获取成员经验。

**语法**

```
akarilevel:get-exp <member> <levelGroup>
```

### set-exp

**描述**

设置成员经验。

**语法**

```
akarilevel:set-exp <member> <levelGroup> <amount> <source>
```

### add-exp

**描述**

增加成员经验。

**语法**

```
akarilevel:add-exp <member> <levelGroup> <amount> <source>
```

### remove-exp

**描述**

移除成员经验。

**语法**

```
akarilevel:remove-exp <member> <levelGroup> <amount> <source>
```