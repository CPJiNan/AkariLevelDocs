# VanillaExp - Vanilla Experience Changes

## Script Introduction

When gaining vanilla experience, add experience with source `VANILLA_EXP_CHANGE` to all level groups, and cancel the
vanilla experience change event.

## Common Questions

### 1. How to retain vanilla levels?

Delete `event.setAmount(0);` in the script.
This feature conflicts with `Track Level Groups (Track)`. If both are set, it may cause vanilla levels to be
overwritten.