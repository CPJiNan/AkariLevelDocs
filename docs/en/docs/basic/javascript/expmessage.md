# ExpMessage - Experience Gain Prompts

## Script Introduction

Send prompt messages when players gain experience.

## Script Configuration

Fill in the list of experience sources that receive prompts in the `[]` of the `sources` item, separated by `,`.

``` javascript
var sources = ["MYTHICMOBS_DROP_EXP", "VANILLA_EXP_CHANGE"];
```

## Common Questions

### 1. How to customize prompt message content?

Modify the parameters of the `sendMessage` method.

``` javascript
player.sendMessage("§7Exp +§f" + expAmount + "§7.")
```