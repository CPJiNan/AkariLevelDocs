# Quick Start

Welcome to AkariLevel! This tutorial will help you with the initial plugin configuration.

## Plugin Download

| Build Version                                                                                                                                             | Release Date                                                                                                                                             | Publisher                                                                                                                                                    |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![](https://img.shields.io/badge/dynamic/json?label=version&amp;query=$.tag_name&amp;url=https://api.github.com/repos/CPJiNan/AkariLevel/releases/latest) | ![](https://img.shields.io/badge/dynamic/json?label=date&amp;query=$.created_at&amp;url=https://api.github.com/repos/CPJiNan/AkariLevel/releases/latest) | ![](https://img.shields.io/badge/dynamic/json?label=author&amp;query=$.author.login&amp;url=https://api.github.com/repos/CPJiNan/AkariLevel/releases/latest) |

- **GitHub**: [https://github.com/CPJiNan/AkariLevel/releases](https://github.com/CPJiNan/AkariLevel/releases)

## Global Settings

You can modify language, data storage method and other settings in the `plugins/AkariLevel/settings.yml` file.

``` yaml
# Global Settings
Options:
  # Language
  Language: "en_US"
  # Configuration file version
  Config-Version: 7
  # Check for version updates
  Check-Update: true
  # OP version update notification
  OP-Notify: true
  # Enable bStats metrics
  Send-Metrics: true
  # Enable debug mode
  Debug: false

# Database Settings
Database:
  # Storage method (MYSQL, SQLITE)
  Type: SQLITE
  # Table name
  Table: "AkariLevel"
  # MySQL Storage Settings
  MYSQL:
    host: localhost
    port: 3306
    user: root
    password: password
    database: minecraft
  # SQLite Storage Settings
  SQLITE:
    file: sqlite.db
```

## Level Group Configuration

### 1. Level Group Edit Name

The `Level Group Edit Name` is the unique identifier for a level group.
It is the name of the first-level node in each configuration file in the `plugins/AkariLevel/level` folder.
For example, create a level group named `LevelGroup` in a configuration file named `CustomLevel.yml`.

``` yaml
LevelGroup:
  General:
    Display: "Level Group Display Name"
```

The edit name of this level group is `LevelGroup`, not `CustomLevel` or `Level Group Display Name`.

### 2. Modify Basic Information

When the plugin is loaded for the first time, an `Example.yml` configuration file will be automatically generated in the
`level` folder, containing a sample level group with the edit name `Example`.
You can modify the basic information of this level group, for example:

``` yaml
AdventureLevel:
  General:
    Display: "§6Adventure Level"
```

If you want to create multiple level groups, you can create new configuration files in the `level` folder, or add new
nodes to existing configuration files.

``` yaml
AdventureLevel:
  General:
    Display: "§6Adventure Level"
SurvivalLevel:
  General:
    Display: "§aSurvival Level"
```

### 3. Subscribe to Experience Sources

`Experience Sources` are strings used to distinguish different scenarios where experience change events occur.
You can subscribe to experience sources to add specified types of experience to level groups.

``` yaml
Example:
  Source:
    Subscribe:
      "COMMAND_ADD_EXP": 1.0
      "MYTHICMOBS_DROP_EXP": 2.0
      "TEAM_SHARE_EXP": 1.0
      "VANILLA_EXP_CHANGE": 0.0
```

For example, `MYTHICMOBS_DROP_EXP` adds experience through MythicMobs experience drops.
For every 1 point of experience gained by players through this method, the Example level group will gain `1 * 2.0 = 2`
points of experience.
Additionally, `VANILLA_EXP_CHANGE` is the vanilla experience source, with a default multiplier of `0.0`.

### 4. Set Experience Formulas

By modifying the configuration under the `Level` node, you can set the `Minimum Level` and `Maximum Level` for the level
group.

``` yaml
Example:
  Level:
    Min: 0
    Max: 100
```

For example, when the `Min` value is 0 and the `Max` value is 100, players joining the Example level group will have a
default level of 0 and can reach a maximum level of 100.

Next, you can set the experience formula by configuring `Key Levels`.

``` yaml
Key:
  0:
    Name: "§8Lv.§b0"
    Exp: "0"
  1:
    Name: "§8Lv.§b{level}"
    Exp: "{level} * 50 + 100"
    Action:
      Kether:
        - title "§e§lLevel UP!"
        - subtitle "%AkariLevel_{levelGroup}_LastLevelName% §7→ %AkariLevel_{levelGroup}_LevelName%" by 10 25 10
        - actionbar "§8[ §7%AkariLevel_{levelGroup}_Exp% §8/ §7%AkariLevel_{levelGroup}_NextLevelExp% §8]"
  50:
    Name: "§8Lv.§b%level%"
    Exp: "{level} * 100 + 100"
    Action:
      Kether:
        - title "§e§lLevel UP!"
        - subtitle "%AkariLevel_{levelGroup}_LastLevelName% §7→ %AkariLevel_{levelGroup}_LevelName%" by 10 25 10
        - actionbar "§8[ §7%AkariLevel_{levelGroup}_Exp% §8/ §7%AkariLevel_{levelGroup}_NextLevelExp% §8]"
```

Key level configuration can use plugin built-in variables such as `{member}`, `{levelGroup}`, `{level}`, and also
supports PlaceholderAPI variables.
When at non-key levels, the settings from the previous key level will be automatically applied.

## Next Steps

- [Plugin Commands](/docs/basic/command)
- [PlaceholderAPI Variables](/docs/basic/placeholder)
- [MythicMobs Drops](/docs/basic/mythicmobs)
- [JavaScript Scripts](/docs/basic/javascript/)