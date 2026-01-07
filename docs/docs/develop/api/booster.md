# Booster

## 概览

**经验加成器** `Booster` 是 `top.cpjinan.akarilevel.booster` 包下的数据类。

## 用例

1. 获取成员经验加成器列表

    ``` kotlin
    val boosters = Booster.getMemberBoosters("成员名称")
    ```

2. 新增成员经验加成器

    ``` kotlin
    val booster = Booster(
        id = UUID.randomUUID().toString().take(8),
        name = "经验加成器名称",
        type = "",
        multiplier = 1.0,
        start = System.currentTimeMillis(),
        duration = -1,
        levelGroup = "",
        source = "COMMAND_ADD_EXP"
    )
    Booster.addMemberBooster("成员名称", booster)
    ```

## 方法列表

``` kotlin
package top.cpjinan.akarilevel.booster

/**
 * AkariLevel
 * top.cpjinan.akarilevel.booster
 *
 * 经验加成器。
 *
 * @author 季楠
 * @since 2025/12/2 23:30
 */
data class Booster(
    var id: String,
    var name: String,
    var type: String = "",
    var multiplier: Double = 1.0,
    var start: Long = -1,
    var duration: Long = -1,
    var levelGroup: List<String> = emptyList(),
    var source: List<String> = listOf("COMMAND_ADD_EXP", "MYTHICMOBS_DROP_EXP", "VANILLA_EXP_CHANGE")
) {
    companion object {
        /**
         * 获取成员经验加成器列表。
         *
         * @param member 成员。
         * @return 包含请求的所有键值对的 Map。
         */
        @JvmStatic
        fun getMemberBoosters(member: String): Map<String, Booster>

        /**
         * 新增成员经验加成器。
         *
         * @param member 成员。
         * @param booster 经验加成器。
         */
        @JvmStatic
        fun addMemberBooster(member: String, booster: Booster)

        /**
         * 移除成员经验加成器。
         *
         * @param member 成员。
         * @param id 经验加成器 ID。
         */
        @JvmStatic
        fun removeMemberBooster(member: String, id: String)

        /**
         * 成员经验加成器是否已启用。
         *
         * @param member 成员。
         * @param id 经验加成器 ID。
         * @return 如果此成员经验加成器已启用，则返回 true。
         */
        @JvmStatic
        fun isMemberBoosterEnabled(member: String, id: String): Boolean

        /**
         * 启用成员经验加成器。
         *
         * @param member 成员。
         * @param id 经验加成器 ID。
         */
        @JvmStatic
        fun enableMemberBooster(member: String, id: String)

        /**
         * 禁用成员经验加成器。
         *
         * @param member 成员。
         * @param id 经验加成器 ID。
         */
        @JvmStatic
        fun disableMemberBooster(member: String, id: String)

        /**
         * 刷新成员经验加成器。
         *
         * @param member 成员。
         */
        @JvmStatic
        fun refreshMemberBoosters(member: String)
    }
}
```