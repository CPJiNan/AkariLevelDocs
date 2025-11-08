# ConfigLevelAction

## 概览

**升级动作** `ConfigLevelAction` 是 `top.cpjinan.akarilevel.level` 包下的接口。

通过实现 `ConfigLevelAction` 接口，可以做到：

- 注册自定义升级动作解析器

`KetherLevelAction` 是插件默认的 `ConfigLevelAction` 接口实现，可以在成员升级时执行 Kether 脚本。

## 方法列表

``` kotlin
package top.cpjinan.akarilevel.level

/**
 * AkariLevel
 * top.cpjinan.akarilevel.level
 *
 * 升级动作接口。
 *
 * @author 季楠
 * @since 2025/10/29 23:27
 */
interface ConfigLevelAction {
    companion object {
        /**
         * 获取升级动作列表。
         *
         * @return 包含请求的所有键值对的 Map。
         */
        @JvmStatic
        fun getConfigLevelActions(): Map<String, ConfigLevelAction>

        /**
         * 注册升级动作。
         *
         * @param name 升级动作名称。
         * @param configLevelAction 升级动作实例。
         */
        @JvmStatic
        fun registerConfigLevelAction(name: String, configLevelAction: ConfigLevelAction)

        /**
         * 取消注册升级动作。
         *
         * @param name 升级动作名称。
         */
        @JvmStatic
        fun unregisterConfigLevelAction(name: String)
    }

    /**
     * 执行升级动作。
     *
     * @param member 成员。
     * @param levelGroup 等级组。
     * @param level 等级。
     * @param config 配置。
     */
    fun run(member: String, levelGroup: String, level: Long, config: ConfigurationSection)
}
```