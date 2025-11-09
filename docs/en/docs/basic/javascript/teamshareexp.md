# TeamShareExp - Team Experience Sharing

## Script Introduction

When players in a team gain experience, team members will also participate in experience distribution.

## Script Configuration

Set the `enable` item to `true`.

``` javascript
var enable = true;
```

Fill in the list of experience sources for team sharing in the `[]` of the `sources` item, separated by `,`.

``` javascript
var sources = ["MYTHICMOBS_DROP_EXP", "VANILLA_EXP_CHANGE"];
```

Modify the **leader weight**/**member weight** in the `leaderWeight` and `memberWeight` items.

``` javascript
var leaderWeight = 1
var memberWeight = 1
```

## Common Questions

### 1. How is team experience distributed?

- `Total team experience = Gained experience * Number of team members`
- `Total team weight = Leader weight + Member weight * (Number of team members - 1)`
- `Leader gained experience = Total team experience * (Leader weight / Total team weight)`
- `Member gained experience = Total team experience * (Member weight / Total team weight)`

``` javascript
var totalAmount = expAmount * team.getPlayers().length;
var totalWeight = leaderWeight + memberWeight * (team.getPlayers().length - 1)
var leaderAmount = Math.floor(totalAmount * (leaderWeight / totalWeight))
var memberAmount = Math.floor(totalAmount * (memberWeight / totalWeight))
```