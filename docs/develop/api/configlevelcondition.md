# ConfigLevelCondition

## 概览

**升级条件** `ConfigLevelCondition` 是 `top.cpjinan.akarilevel.level` 包下的接口。

通过实现 `ConfigLevelCondition` 接口，可以做到：

- 注册自定义升级条件解析器

`KetherLevelCondition` 是插件默认的 `ConfigLevelCondition` 接口实现，可以在成员升级时检查 Kether 条件。

## 方法列表

``` kotlin
package top.cpjinan.akarilevel.level

/**
 * AkariLevel
 * top.cpjinan.akarilevel.level
 *
 * 升级条件接口。
 *
 * @author 季楠
 * @since 2025/10/29 23:27
 */
interface ConfigLevelCondition {
    companion object {
        /**
         * 获取升级条件列表。
         *
         * @return 包含请求的所有键值对的 Map。
         */
        @JvmStatic
        fun getConfigLevelConditions(): Map<String, ConfigLevelCondition>

        /**
         * 注册升级条件。
         *
         * @param name 升级条件名称。
         * @param configLevelCondition 升级条件实例。
         */
        @JvmStatic
        fun registerConfigLevelCondition(name: String, configLevelCondition: ConfigLevelCondition)

        /**
         * 取消注册升级条件。
         *
         * @param name 升级条件名称。
         */
        @JvmStatic
        fun unregisterConfigLevelCondition(name: String)
    }

    /**
     * 检查升级条件。
     *
     * @param member 成员。
     * @param levelGroup 等级组。
     * @param level 等级。
     * @param config 配置。
     * @return 是否满足升级条件。
     */
    fun check(member: String, levelGroup: String, level: Long, config: ConfigurationSection): Boolean
}
```