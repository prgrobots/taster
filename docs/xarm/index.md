---
title: Meet xArm 2.0
tags: [xarm]
---

# 🦾 Meet the xArm 2.0

<span class="badge badge-robot">Robot Arm</span>

This is a real **5-axis robot arm** — the same kind of technology used in factories, warehouses, and research labs. Today you'll program it using Scratch-style blocks in a tool called **WonderCode**.

---

## What's in front of you

<div class="pipeline">
  <div class="pipeline-step">
    <span class="step-icon">🦾</span>
    <span class="step-label">xArm 2.0</span>
    <span class="step-desc">5 servo joints, gripper claw, colour sensor port</span>
  </div>
  <div class="pipeline-step">
    <span class="step-icon">🔌</span>
    <span class="step-label">USB Cable</span>
    <span class="step-desc">Connects the arm to the computer</span>
  </div>
  <div class="pipeline-step">
    <span class="step-icon">🧩</span>
    <span class="step-label">WonderCode</span>
    <span class="step-desc">Scratch-based programming app already on the computer</span>
  </div>
  <div class="pipeline-step">
    <span class="step-icon">🟥🟦</span>
    <span class="step-label">Blocks + mat</span>
    <span class="step-desc">Coloured blocks and a placemat with marked squares</span>
  </div>
</div>

---

## How to connect the arm

!!! note "Step by step"
    1. Plug the **USB cable** from the arm into your computer
    2. Open **WonderCode** (shortcut on the desktop)
    3. Click the **Connect** button (top right) — it should turn green ✅
    4. The arm may twitch slightly when it connects — that's normal!

!!! warning "Important"
    - Don't force the arm joints — the servos are strong but not unbreakable
    - Keep your fingers clear when the arm is moving
    - If the arm moves somewhere unexpected, click **Stop** immediately

---

## The WonderCode workspace

When WonderCode opens you'll see:

| Area | What it does |
|---|---|
| **Block palette** (left) | All the available code blocks, grouped by category |
| **Script area** (centre) | Drag blocks here to build your program |
| **Stage** (top right) | Shows a virtual view of the arm |
| **Connect / Run / Stop** | Toolbar at the top |

The blocks you'll use most are under the **xArm** category — look for the robot arm icon.

---

## Coordinate system — how the arm knows where to go

The arm uses **X, Y, Z coordinates** to describe positions in space.

| Axis | Direction |
|---|---|
| **X** | Left ← → Right |
| **Y** | Forward ↑ ↓ Backward (away from / toward you) |
| **Z** | Up ↑ ↓ Down |

!!! tip "How to find the right coordinates"
    1. In WonderCode, you can **drag the arm manually** in the software to a position
    2. The X, Y, Z values update live as you drag
    3. Note down the values — you'll use them in your code

---

## Ready to start the lesson?

👉 [Lesson — Fixed-Point Motion](lesson.md){ .md-button .md-button--primary }
