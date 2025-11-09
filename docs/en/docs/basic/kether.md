# Kether Scripts

`Kether` is a powerful built-in scripting language in TabooLib, providing concise syntax, rich built-in functions and
strong extension capabilities.

AkariLevel supports using Kether scripts in **level up conditions** and **level up actions**, and also registers some
custom statements.

## Statement List

Statements provided by AkariLevel should be used with the namespace prefix `akarilevel:` when using.

For the complete Kether statement list, please check [Kether Explorer](https://taboo.8aka.cn/kether-list).

### has-member

**Description**

Check if any member exist in the level group.

**Syntax**

``` 
akarilevel:has-member <member> <levelGroup>
```

### add-member

**Description**

Add a member for level group.

**Syntax**

``` 
akarilevel:add-member <member> <levelGroup> <source>
```

### remove-member

**Description**

Kick a member from level group

**Syntax**

``` 
akarilevel:remove-member <member> <levelGroup> <source>
```

### get-level

**Description**

Get member level.

**Syntax**

``` 
akarilevel:get-level <member> <levelGroup>
```

### set-level

**Description**

Set member level.

**Syntax**

``` 
akarilevel:set-level <member> <levelGroup> <amount> <source>
```

### add-level

**Description**

Increase member level.

**Syntax**

``` 
akarilevel:add-level <member> <levelGroup> <amount> <source>
```

### remove-level

**Description**

Decrease member level.

**Syntax**

``` 
akarilevel:remove-level <member> <levelGroup> <amount> <source>
```

### get-exp

**Description**

Get member experience.

**Syntax**

``` 
akarilevel:get-exp <member> <levelGroup>
```

### set-exp

**Description**

Set member experience.

**Syntax**

``` 
akarilevel:set-exp <member> <levelGroup> <amount> <source>
```

### add-exp

**Description**

Add member experience.

**Syntax**

``` 
akarilevel:add-exp <member> <levelGroup> <amount> <source>
```

### remove-exp

**Description**

Take member experience.

**Syntax**

``` 
akarilevel:remove-exp <member> <levelGroup> <amount> <source>
```