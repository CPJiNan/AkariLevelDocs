# JavaScript Scripts

AkariLevel provides support for JavaScript, using the Nashorn engine to execute JavaScript code.

This tutorial mainly describes the writing method of custom scripts. If you want to learn how to use built-in scripts,
please go to **Basic Tutorial - JavaScript Scripts**.

## Built-in Dependencies

The following classes can be directly called in custom scripts.

``` javascript
var Bukkit = Packages.org.bukkit.Bukkit;
var PluginManager = Bukkit.getPluginManager();
var EventPriority = Packages.org.bukkit.event.EventPriority;

var AkariLevel = PluginManager.getPlugin("AkariLevel");

var LevelGroup = Packages.top.cpjinan.akarilevel.level.LevelGroup;
var ConfigLevelGroup = Packages.top.cpjinan.akarilevel.level.ConfigLevelGroup;

var Command = Packages.top.cpjinan.akarilevel.script.ScriptCommand;
var Listener = Packages.top.cpjinan.akarilevel.script.ScriptListener;
var Task = Packages.top.cpjinan.akarilevel.script.ScriptTask;
var Placeholder = Packages.top.cpjinan.akarilevel.script.ScriptPlaceholder;

var PlayerJoinEvent = Packages.org.bukkit.event.player.PlayerJoinEvent;
var PlayerQuitEvent = Packages.org.bukkit.event.player.PlayerQuitEvent;
var PlayerExpChangeEvent = Packages.org.bukkit.event.player.PlayerExpChangeEvent;

var LevelGroupRegisterEvent = Packages.top.cpjinan.akarilevel.event.LevelGroupRegisterEvent;
var LevelGroupUnregisterEvent = Packages.top.cpjinan.akarilevel.event.LevelGroupUnregisterEvent;
var MemberChangeEvent = Packages.top.cpjinan.akarilevel.event.MemberChangeEvent;
var MemberExpChangeEvent = Packages.top.cpjinan.akarilevel.event.MemberExpChangeEvent;
var MemberLevelChangeEvent = Packages.top.cpjinan.akarilevel.event.MemberLevelChangeEvent;
var PluginReloadEvent = Packages.top.cpjinan.akarilevel.event.PluginReloadEvent;
```

## Script Commands

``` javascript
function onPluginEnable() {
    // Register commands.
    registerCommand();
}

function registerCommand() {
    new Command("example")
        .setNameSpace("akarilevel") // Set namespace.
        .setAliases(["alexample"]) // Set command aliases.
        .setDescription("AkariLevel example script command") // Set command description.
        .setUsage("/example <player>") // Set command usage.
        .setPermission("akarilevel.command.example") // Set required permission.
        .setPermissionMessage("§cYou don't have permission to use this command.") // Set no permission prompt.
        // Set command executor.
        .setExecutor(function (sender, command, label, args) {
            if (args.length === 0) {
                sender.sendMessage("§6Usage: /example <player>");
                return true;
            }
            var playerName = args[0];
            var player = Bukkit.getPlayer(playerName);
            if (player === null) {
                sender.sendMessage("§cPlayer " + playerName + " is offline.");
                return true;
            }
            sender.sendMessage("§aPlayer " + player.getName() + " is online.");
            return true;
        })
        // Set Tab completion.
        .setTabCompleter(function (sender, command, label, args) {
            if (args.length === 1) {
                var players = [];
                var onlinePlayers = Bukkit.getOnlinePlayers().toArray();
                for (var i = 0; i < onlinePlayers.length; i++) {
                    players.push(onlinePlayers[i].getName());
                }
                return players;
            }
            return [];
        })
        // Register command.
        .register();
}
```

## Script Listeners

``` javascript
function onPluginEnable() {
    // Register listeners.
    registerListener();
}

function registerListener() {
    // Player join event.
    new Listener(PlayerJoinEvent.class)
        // Set event handler.
        .setExecutor(function (event) {
            var playerName = event.getPlayer().getName();
            Bukkit.broadcastMessage("§8[§a+§8]§b" + playerName);
        })
        // Register listener.
        .register();

    // Player quit event.
    new Listener(PlayerQuitEvent.class)
        // Set event handler.
        .setExecutor(function (event) {
            var playerName = event.getPlayer().getName();
            Bukkit.broadcastMessage("§8[§c-§8]§b" + playerName);
        })
        // Register listener.
        .register();
}
```

## Script Tasks

``` javascript
function onPluginEnable() {
    // Register scheduled tasks.
    registerTask();
}

function registerTask() {
    // Delayed task.
    new Task()
        // Set task logic.
        .setTask(function () {
            Bukkit.broadcastMessage("§eThis is a delayed task.");
        })
        .setDelay(100) // Set delay 5 seconds.
        .register(); // Register task.

    // Timer task.
    new Task()
        // Set task logic.
        .setTask(function () {
            Bukkit.broadcastMessage("§eThis is a timer task.");
        })
        .setAsync(true) // Set async.
        .setDelay(200) // Set delay 10 seconds.
        .setPeriod(200) // Set execute every 10 seconds.
        .register(); // Register task.
}
```

## Script Placeholders

``` javascript
function onPluginEnable() {
    // Register PlaceholderAPI variables.
    registerPlaceholder();
}

function registerPlaceholder() {
    new Placeholder("example")
        .setAuthor("季楠") // Set author.
        .setVersion("1.0.0") // Set version.
        // Set variable handler.
        .setExecutor(function (player, args) {
            if (player === null) {
                return "N/A";
            }
            
            // %example_name% -> Player name.
            if (args === "name") {
                return player.getName();
            }
            
            // %example_uuid% -> Player UUID.
            if (args === "uuid") {
                return player.getUniqueID();
            }
            
            // Unknown parameter.
            return "N/A";
        })
        // Register variable.
        .register();
}
```

## Common Questions

### 1. Can ES6+ features be used in scripts?

Nashorn only supports ECMAScript 5.1, not ES6+ features.

❌ Not supported:

- `let`
- `const`
- `() =>`
- `Promise`
- `async/await`
- `${var}`

✅ Supported:

- `var`
- `function`
- Traditional arrays and objects

### 2. Can other plugins' APIs be called in scripts?

Directly call the package name of the corresponding plugin.

``` javascript
var PlaceholderAPI = Packages.me.clip.placeholderapi.PlaceholderAPI;
```