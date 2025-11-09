# ExpAddition - Experience Addition Attributes

## Script Introduction

Get attribute variables from plugins like `AttributePlus` to provide additional experience bonuses.

## Script Configuration

Set the `enable` item to `true`.

``` javascript
var enable = true;
```

Fill in the list of experience sources that receive bonuses in the `[]` of the `sources` item, separated by `,`.

``` javascript
var sources = ["MYTHICMOBS_DROP_EXP"];
```

Set the `placeholder` item to the `PlaceholderAPI` variable for the experience addition attribute.

``` javascript
var placeholder = "%ap_exp_addition:max%";
```