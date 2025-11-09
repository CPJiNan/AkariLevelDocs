# ConfigLevelGroup

## Overview

**Configuration Level Group** `ConfigLevelGroup` is a class under the `top.cpjinan.akarilevel.level` package.

It is the plugin's default `LevelGroup` interface implementation, which can obtain level groups from configuration
files.

## Usage

1. Obtain and register level group instances through configuration files

``` kotlin
val config = Configuration.loadFromFile(file)
val levelGroup = ConfigLevelGroup(config)
levelGroup.register()
```

Among them, `Configuration` is `top.cpjinan.akarilevel.taboolib.module.configuration.Configuration`, and the plugin's
API version needs to be used as a dependency.

## Method List

``` kotlin
package top.cpjinan.akarilevel.level

/**
 * AkariLevel
 * top.cpjinan.akarilevel.level
 *
 * Implementation of [LevelGroup] interface, obtaining level groups from configuration files.
 *
 * @author 季楠
 * @since 2025/8/7 23:15
 */
class ConfigLevelGroup(val config: ConfigurationSection) : LevelGroup {
    companion object {
        /**
         * Get configuration level group list.
         *
         * @return Map containing all requested key-value pairs.
         */
        @JvmStatic
        fun getConfigLevelGroups(): Map<String, ConfigLevelGroup>

        /**
         * Add configuration level group.
         *
         * @param name Level group edit name.
         * @param configLevelGroup Configuration level group instance.
         */
        @JvmStatic
        fun addConfigLevelGroup(name: String, configLevelGroup: ConfigLevelGroup)

        /**
         * Remove configuration level group.
         *
         * @param name Level group edit name.
         */
        @JvmStatic
        fun removeConfigLevelGroup(name: String)

        /**
         * Reload configuration level groups.
         */
        @JvmStatic
        fun reloadConfigLevelGroups()
    }

    /**
     * Level up member.
     *
     * @param member Member.
     */
    fun levelUpMember(member: String)

    /**
     * Check level condition.
     *
     * @param member Member.
     * @param level Level.
     */
    fun checkLevelCondition(member: String, level: Long): Boolean

    /**
     * Execute level action.
     *
     * @param member Member.
     * @param level Level.
     */
    fun runLevelAction(member: String, level: Long)

    /**
     * Get level configuration.
     *
     * @param level Level.
     * @return Level configuration to get.
     */
    fun getLevelConfig(level: Long): ConfigurationSection

    /**
     * Get key level configuration list.
     *
     * @return Map containing all requested key-value pairs.
     */
    fun getKeyLevelConfigs(): Map<Long, ConfigurationSection>
}
```