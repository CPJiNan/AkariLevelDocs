# AutoJoin - Auto Join Level Groups

## Script Introduction

When players join the server, automatically add them to specified level groups.

## Script Configuration

Fill in the level group edit name list to be automatically joined in the `[]` of the `levelGroupNames` item, separated
by `,`.

``` javascript
// 1. Disable this feature.
var levelGroupNames = [];

// 2. Automatically join AdventureLevel level group.
var levelGroupNames = ["AdventureLevel"];

// 3. Automatically join AdventureLevel and SurvivalLevel level groups.
var levelGroupNames = ["AdventureLevel", "SurvivalLevel"];
```