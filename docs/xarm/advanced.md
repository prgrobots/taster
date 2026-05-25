---
title: Advanced — Colour Sensor
tags: [xarm]
---

# 🎨 Advanced — Colour Sensor

<span class="badge badge-robot">Robot Arm</span>

<span class="badge badge-free">Advanced</span>

This is the **free choice / advanced challenge**. You'll add a **colour sensor** to the xArm and use it to detect what colour a block is before picking it up.

---

## What you need

- ✅ Your stacking program from the previous challenge
- ✅ The **colour sensor** module (ask your teacher)
- ✅ A few blocks of different colours

---

## Connect the colour sensor

!!! note "Attaching the sensor"
    1. Plug the colour sensor into the **sensor port** on the xArm controller box
    2. Position it so it faces **downward** — it reads colour from just below the arm tip
    3. In WonderCode, the sensor will show up under the **Sensors** block category

---

## New blocks you'll use

| Block | What it does |
|---|---|
| `read colour sensor` | Returns the detected colour (red, blue, green, etc.) |
| `if <colour = red> then` | Runs blocks only if the colour matches |
| `say [colour]` | Displays the detected colour on screen |

---

## ✅ Step 1 — Test the sensor

Before you use it in your program, test that it's working:

```
when 🚩 clicked
forever
  say (read colour sensor)
```

Run this and hold different coloured blocks under the sensor. You should see the colour name appear on screen.

!!! tip "Getting a reliable reading"
    - Hold the block about **1–2cm** below the sensor
    - Avoid shadows — the sensor needs consistent light
    - The sensor works best with solid, bright colours

---

## ✅ Step 2 — Detect before you pick

Add a colour check **before** the arm picks up the block:

```
when 🚩 clicked
move arm to X:[A hover]
wait 1 second

set [detected colour] to (read colour sensor)
say [detected colour] for 2 seconds

[then pick up and place as normal]
```

---

## ✅ Step 3 — Sort by colour (extension)

Can you make the arm put **red blocks in Square B** and **blue blocks in Square C**?

```
if <detected colour = red> then
  [pick and place to Square B]
else if <detected colour = blue> then
  [pick and place to Square C]
```

!!! note "You'll need a third square!"
    Mark out a **Square C** on your mat and find its coordinates the same way you did for A and B.

---

## 🏆 Ultimate challenge

Combine everything:

1. Arm picks up a block from Square A
2. Colour sensor detects what colour it is
3. Arm places it in the correct square (B for red, C for blue)
4. Arm goes back and picks up the next block
5. Keeps going until all blocks are sorted!

---

## 🎓 What you've just done

!!! success "Real-world robotics"
    This is exactly what robotic arms do in real factories — pick, inspect, sort.
    Companies like Amazon use this to sort packages by destination.
    You've built a miniature version of that today!
