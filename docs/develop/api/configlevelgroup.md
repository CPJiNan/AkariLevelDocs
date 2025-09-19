# 配置等级组 | ConfigLevelGroup

## 概览

`ConfigLevelGroup` 是 `com.github.cpjinan.plugin.akarilevel.level` 包下的类。

它是插件默认的 `LevelGroup` 接口实现，可以从配置文件获取等级组。

## 用例

1. 通过配置文件获取并注册等级组实例

    ``` kotlin
    val config = Configuration.loadFromFile(file)
    val levelGroup = ConfigLevelGroup(config)
    levelGroup.register()
    ```

   其中，`Configuration` 是 `com.github.cpjinan.plugin.akarilevel.taboolib.module.configuration.Configuration`，需要使用插件的
   API 版本作为依赖。

## 方法列表

``` kotlin
package com.github.cpjinan.plugin.akarilevel.level

/**
 * AkariLevel
 * com.github.cpjinan.plugin.akarilevel.level
 *
 * [LevelGroup] 接口的实现，从配置文件获取等级组。
 *
 * @author 季楠
 * @since 2025/8/7 23:15
 */
class ConfigLevelGroup(val config: ConfigurationSection) : LevelGroup {
    companion object {
        /**
         * 获取配置等级组列表。
         *
         * @return 包含请求的所有键值对的 Map。
         */
        @JvmStatic
        fun getConfigLevelGroups(): Map<String, ConfigLevelGroup>

        /**
         * 新增配置等级组。
         *
         * @param name 等级组编辑名。
         * @param configLevelGroup 配置等级组实例。
         */
        @JvmStatic
        fun addConfigLevelGroup(name: String, configLevelGroup: ConfigLevelGroup)

        /**
         * 移除配置等级组。
         *
         * @param name 等级组编辑名。
         */
        @JvmStatic
        fun removeConfigLevelGroup(name: String)

        /**
         * 重载配置等级组。
         */
        @JvmStatic
        fun reloadConfigLevelGroups()
    }

    /**
     * 升级成员。
     *
     * @param member 成员。
     */
    fun levelUpMember(member: String)

    /**
     * 检查等级条件。
     *
     * @param member 成员。
     * @param level 等级。
     */
    fun checkLevelCondition(member: String, level: Long): Boolean

    /**
     * 执行等级动作。
     *
     * @param member 成员。
     * @param level 等级。
     */
    fun runLevelAction(member: String, level: Long)

    /**
     * 获取等级配置。
     *
     * @param level 等级。
     * @return 要获取的等级配置。
     */
    fun getLevelConfig(level: Long): ConfigurationSection

    /**
     * 获取关键等级配置列表。
     *
     * @return 包含请求的所有键值对的 Map。
     */
    fun getKeyLevelConfigs(): Map<Long, ConfigurationSection>
}
```