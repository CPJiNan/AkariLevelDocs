# LevelGroup

## 概览

**等级组** `LevelGroup` 是 `top.cpjinan.akarilevel.level` 包下的接口。

它提供了等级组管理、成员管理、等级与经验管理等功能。

通过实现 `LevelGroup` 接口，可以做到：

- 自定义等级组读取规则
- 自定义等级、经验计算规则
- 重写回调方法以实现业务逻辑

`ConfigLevelGroup` 是插件默认的 `LevelGroup` 接口实现，可以从配置文件获取等级组。

## 用例

1. 通过编辑名获取等级组实例

    ``` kotlin
    val levelGroup = LevelGroup.getLevelGroups()["等级组编辑名"]
    ```

2. 注册 / 取消注册等级组

    ``` kotlin
    levelGroup.register()
    levelGroup.unregister()
    ```

3. 设置成员等级 / 经验

    ``` kotlin
    levelGroup.setMemberLevel("成员名称", 10, "等级来源")
    levelGroup.setMemberExp("成员名称", 10, "经验来源")
    ```

## 方法列表

``` kotlin
package top.cpjinan.akarilevel.level

/**
 * AkariLevel
 * top.cpjinan.akarilevel.level
 *
 * 等级组接口。
 *
 * @author 季楠, QwQ-dev
 * @since 2025/8/7 23:15
 */
interface LevelGroup {
    companion object {
        /**
         * 获取等级组列表。
         *
         * @return 包含请求的所有键值对的 Map。
         */
        @JvmStatic
        fun getLevelGroups(): Map<String, LevelGroup>

        /**
         * 新增等级组。
         *
         * @param name 等级组编辑名。
         * @param levelGroup 等级组实例。
         */
        @JvmStatic
        fun addLevelGroup(name: String, levelGroup: LevelGroup)

        /**
         * 移除等级组。
         *
         * @param name 等级组编辑名。
         */
        @JvmStatic
        fun removeLevelGroup(name: String)
    }

    /**
     * 成员变更类型枚举。
     */
    enum class MemberChangeType {
        JOIN,
        QUIT
    }

    /**
     * 编辑名。
     */
    val name: String

    /**
     * 展示名。
     */
    val display: String

    /**
     * 注册等级组。
     */
    fun register()

    /**
     * 取消注册等级组。
     */
    fun unregister()

    /**
     * 获取等级名称。
     *
     * @param level 等级。
     * @return 要获取的等级名称。
     */
    fun getLevelName(level: Long): String

    /**
     * 获取等级名称。
     *
     * @param member 成员。
     * @param level 等级。
     * @return 要获取的等级名称。
     */
    fun getLevelName(member: String, level: Long): String

    /**
     * 获取升级所需经验。
     *
     * @param oldLevel 旧等级。
     * @param newLevel 新等级。
     * @return 升级所需经验。
     */
    fun getLevelExp(oldLevel: Long, newLevel: Long): Long

    /**
     * 获取升级所需经验。
     *
     * @param member 成员。
     * @param oldLevel 旧等级。
     * @param newLevel 新等级。
     * @return 升级所需经验。
     */
    fun getLevelExp(member: String, oldLevel: Long, newLevel: Long): Long

    /**
     * 获取最低等级。
     *
     * @return 等级组的最低等级。
     */
    fun getMinLevel(): Long

    /**
     * 获取最高等级。
     *
     * @return 等级组的最高等级。
     */
    fun getMaxLevel(): Long

    /**
     * 是否包含成员。
     *
     * @param member 成员。
     * @return 如果此等级组包含请求的成员，则返回 true。
     */
    fun hasMember(member: String): Boolean

    /**
     * 增加成员。
     *
     * @param member 成员。
     * @param source 来源。
     */
    fun addMember(member: String, source: String)

    /**
     * 移除成员。
     *
     * @param member 成员。
     * @param source 来源。
     */
    fun removeMember(member: String, source: String)

    /**
     * 获取成员等级。
     *
     * @param member 成员。
     * @return 要获取的成员等级。
     */
    fun getMemberLevel(member: String): Long

    /**
     * 获取成员经验。
     *
     * @param member 成员。
     * @return 要获取的成员经验。
     */
    fun getMemberExp(member: String): Long

    /**
     * 设置成员等级。
     *
     * @param member 成员。
     * @param amount 等级。
     * @param source 来源。
     */
    fun setMemberLevel(member: String, amount: Long, source: String)

    /**
     * 设置成员经验。
     *
     * @param member 成员。
     * @param amount 经验。
     * @param source 来源。
     */
    fun setMemberExp(member: String, amount: Long, source: String)

    /**
     * 增加成员等级。
     *
     * @param member 成员。
     * @param amount 等级。
     * @param source 来源。
     */
    fun addMemberLevel(member: String, amount: Long, source: String)

    /**
     * 增加成员经验。
     *
     * @param member 成员。
     * @param amount 经验。
     * @param source 来源。
     */
    fun addMemberExp(member: String, amount: Long, source: String)

    /**
     * 移除成员等级。
     *
     * @param member 成员。
     * @param amount 等级。
     * @param source 来源。
     */
    fun removeMemberLevel(member: String, amount: Long, source: String)

    /**
     * 移除成员经验。
     *
     * @param member 成员。
     * @param amount 经验。
     * @param source 来源。
     */
    fun removeMemberExp(member: String, amount: Long, source: String)

    /**
     * 等级组注册回调。
     */
    fun onRegister()

    /**
     * 等级组取消注册回调。
     */
    fun onUnregister()

    /**
     * 成员变更回调。
     *
     * @param member 成员。
     * @param type 类型。
     * @param source 来源。
     */
    fun onMemberChange(member: String, type: MemberChangeType, source: String)

    /**
     * 成员等级变更回调。
     *
     * @param member 成员。
     * @param oldLevel 旧等级。
     * @param newLevel 新等级。
     * @param source 来源。
     */
    fun onMemberLevelChange(member: String, oldLevel: Long, newLevel: Long, source: String)

    /**
     * 成员经验变更回调。
     *
     * @param member 成员。
     * @param expAmount 经验变化量。
     * @param source 来源。
     */
    fun onMemberExpChange(member: String, expAmount: Long, source: String)
}
```