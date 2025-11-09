# ConfigLevelAction

## Overview

**Level Up Action** `ConfigLevelAction` is an interface under the `top.cpjinan.akarilevel.level` package.

By implementing the `ConfigLevelAction` interface, you can:

- Register custom level-up action handlers

`KetherLevelAction` is the plugin's default `ConfigLevelAction` interface implementation, which can execute Kether
scripts when members level up.

## Method List

``` kotlin
package top.cpjinan.akarilevel.level

/**
 * AkariLevel
 * top.cpjinan.akarilevel.level
 *
 * Level up action interface.
 *
 * @author 季楠
 * @since 2025/10/29 23:27
 */
interface ConfigLevelAction {
    companion object {
        /**
         * Get level up action list.
         *
         * @return Map containing all requested key-value pairs.
         */
        @JvmStatic
        fun getConfigLevelActions(): Map<String, ConfigLevelAction>

        /**
         * Register level up action.
         *
         * @param name Level up action name.
         * @param configLevelAction Level up action instance.
         */
        @JvmStatic
        fun registerConfigLevelAction(name: String, configLevelAction: ConfigLevelAction)

        /**
         * Unregister level up action.
         *
         * @param name Level up action name.
         */
        @JvmStatic
        fun unregisterConfigLevelAction(name: String)
    }

    /**
     * Execute level up action.
     *
     * @param member Member.
     * @param levelGroup Level group.
     * @param level Level.
     * @param config Configuration.
     */
    fun run(member: String, levelGroup: String, level: Long, config: ConfigurationSection)
}
```