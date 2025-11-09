# LevelGroup

## Overview

**Level Group** `LevelGroup` is an interface under the `top.cpjinan.akarilevel.level` package.

It provides level group management, member management, level and experience management, and other functions.

By implementing the `LevelGroup` interface, you can:

- Customize level group reading rules
- Customize level and experience calculation rules
- Override callback methods to implement business logic

`ConfigLevelGroup` is the plugin's default `LevelGroup` interface implementation, which can obtain level groups from
configuration files.

## Usage

1. Obtain level group instances through edit names

``` kotlin
val levelGroup = LevelGroup.getLevelGroups()["LevelGroupEditName"]
```

2. Register / Unregister level groups

``` kotlin
levelGroup.register()
levelGroup.unregister()
```

3. Set member level / experience

``` kotlin
levelGroup.setMemberLevel("MemberName", 10, "LevelSource")
levelGroup.setMemberExp("MemberName", 10, "ExpSource")
```

## Method List

``` kotlin
package top.cpjinan.akarilevel.level

/**
 * AkariLevel
 * top.cpjinan.akarilevel.level
 *
 * Level group interface.
 *
 * @author 季楠, QwQ-dev
 * @since 2025/8/7 23:15
 */
interface LevelGroup {
    companion object {
        /**
         * Get level group list.
         *
         * @return Map containing all requested key-value pairs.
         */
        @JvmStatic
        fun getLevelGroups(): Map<String, LevelGroup>

        /**
         * Add level group.
         *
         * @param name Level group edit name.
         * @param levelGroup Level group instance.
         */
        @JvmStatic
        fun addLevelGroup(name: String, levelGroup: LevelGroup)

        /**
         * Remove level group.
         *
         * @param name Level group edit name.
         */
        @JvmStatic
        fun removeLevelGroup(name: String)
    }

    /**
     * Member change type enumeration.
     */
    enum class MemberChangeType {
        JOIN, QUIT
    }

    /**
     * Edit name.
     */
    val name: String

    /**
     * Display name.
     */
    val display: String

    /**
     * Register level group.
     */
    fun register()

    /**
     * Unregister level group.
     */
    fun unregister()

    /**
     * Get level name.
     *
     * @param level Level.
     * @return Level name to get.
     */
    fun getLevelName(level: Long): String

    /**
     * Get level name.
     *
     * @param member Member.
     * @param level Level.
     * @return Level name to get.
     */
    fun getLevelName(member: String, level: Long): String

    /**
     * Get level up required experience.
     *
     * @param oldLevel Old level.
     * @param newLevel New level.
     * @return Level up required experience.
     */
    fun getLevelExp(oldLevel: Long, newLevel: Long): Long

    /**
     * Get level up required experience.
     *
     * @param member Member.
     * @param oldLevel Old level.
     * @param newLevel New level.
     * @return Level up required experience.
     */
    fun getLevelExp(member: String, oldLevel: Long, newLevel: Long): Long

    /**
     * Get minimum level.
     *
     * @return Minimum level of the level group.
     */
    fun getMinLevel(): Long

    /**
     * Get maximum level.
     *
     * @return Maximum level of the level group.
     */
    fun getMaxLevel(): Long

    /**
     * Whether contains member.
     *
     * @param member Member.
     * @return Returns true if this level group contains the requested member.
     */
    fun hasMember(member: String): Boolean

    /**
     * Add member.
     *
     * @param member Member.
     * @param source Source.
     */
    fun addMember(member: String, source: String)

    /**
     * Remove member.
     *
     * @param member Member.
     * @param source Source.
     */
    fun removeMember(member: String, source: String)

    /**
     * Get member level.
     *
     * @param member Member.
     * @return Member level to get.
     */
    fun getMemberLevel(member: String): Long

    /**
     * Get member experience.
     *
     * @param member Member.
     * @return Member experience to get.
     */
    fun getMemberExp(member: String): Long

    /**
     * Set member level.
     *
     * @param member Member.
     * @param amount Level.
     * @param source Source.
     */
    fun setMemberLevel(member: String, amount: Long, source: String)

    /**
     * Set member experience.
     *
     * @param member Member.
     * @param amount Experience.
     * @param source Source.
     */
    fun setMemberExp(member: String, amount: Long, source: String)

    /**
     * Add member level.
     *
     * @param member Member.
     * @param amount Level.
     * @param source Source.
     */
    fun addMemberLevel(member: String, amount: Long, source: String)

    /**
     * Add member experience.
     *
     * @param member Member.
     * @param amount Experience.
     * @param source Source.
     */
    fun addMemberExp(member: String, amount: Long, source: String)

    /**
     * Remove member level.
     *
     * @param member Member.
     * @param amount Level.
     * @param source Source.
     */
    fun removeMemberLevel(member: String, amount: Long, source: String)

    /**
     * Remove member experience.
     *
     * @param member Member.
     * @param amount Experience.
     * @param source Source.
     */
    fun removeMemberExp(member: String, amount: Long, source: String)

    /**
     * Level group register callback.
     */
    fun onRegister()

    /**
     * Level group unregister callback.
     */
    fun onUnregister()

    /**
     * Member change callback.
     *
     * @param member Member.
     * @param type Type.
     * @param source Source.
     */
    fun onMemberChange(member: String, type: MemberChangeType, source: String)

    /**
     * Member level change callback.
     *
     * @param member Member.
     * @param oldLevel Old level.
     * @param newLevel New level.
     * @param source Source.
     */
    fun onMemberLevelChange(member: String, oldLevel: Long, newLevel: Long, source: String)

    /**
     * Member experience change callback.
     *
     * @param member Member.
     * @param expAmount Experience change amount.
     * @param source Source.
     */
    fun onMemberExpChange(member: String, expAmount: Long, source: String)
}
```