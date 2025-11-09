# MythicMobs Drops

AkariLevel provides support for MythicMobs, you can configure monster experience drops through `Exp-Drops`.

## Basic Usage

- **LevelGroup Amount Chance**

``` yaml
Example Monster:
  Type: ZOMBIE
  Display: 'Example Monster'
  Health: 5
  Damage: 0
  Drops:
    - Apple 1 1.0
  Exp-Drops:
    - Example 100-150 0.5
```