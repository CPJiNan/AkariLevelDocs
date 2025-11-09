# ConfigLevelCondition

## Overview

**Level Up Condition** `ConfigLevelCondition` is an interface under the `top.cpjinan.akarilevel.level` package.

By implementing the `ConfigLevelCondition` interface, you can:

- Register custom level-up condition handlers

`KetherLevelCondition` is the plugin's default `ConfigLevelCondition` interface implementation, which can check Kether
conditions when members level up.

## Method List

``` kotlin
package top.cpjinan.akarilevel.level

/**
 * AkariLevel
 * top.cpjinan.akarilevel.level
 *
 * Level up condition interface.
 *
 * @author 季楠
 * @since 2025/10/29 23:27
 */
interface ConfigLevelCondition {
    companion object {
        /**
         * Get level up condition list.
         *
         * @return Map containing all requested key-value pairs.
         */
        @JvmStatic
        fun getConfigLevelConditions(): Map<String, ConfigLevelCondition>

        /**
         * Register level up condition.
         *
         * @param name Level up condition name.
         * @param configLevelCondition Level up condition instance.
         */
        @JvmStatic
        fun registerConfigLevelCondition(name: String, configLevelCondition: ConfigLevelCondition)

        /**
         * Unregister level up condition.
         *
         * @param name Level up condition name.
         */
        @JvmStatic
        fun unregisterConfigLevelCondition(name: String)
    }

    /**
     * Check level up condition.
     *
     * @param member Member.
     * @param levelGroup Level group.
     * @param level Level.
     * @param config Configuration.
     * @return Whether the level up condition is met.
     */
    fun check(member: String, levelGroup: String, level: Long, config: ConfigurationSection): Boolean
}
```