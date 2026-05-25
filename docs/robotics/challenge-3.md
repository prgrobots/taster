---
title: Challenge 3 — Follow a Line
tags: [robotics]
---

# ⬛ Challenge 3 — Follow a Line

<span class="badge badge-robot">Robotics</span>

Maqueen loves to explore — and with a line-tracking sensor it can follow a track all the way to the end of the world! In this challenge you'll program Maqueen to automatically follow a black line on a mat, no matter how the path curves.

**Goals:**

- Learn how line-tracking sensors work
- Learn how to use the logical **and** block

---

## How does a line-tracking sensor work?

The sensor shines an infrared LED downward and reads the reflection:

- Over a **white** surface — strong reflection → sensor reads **0** (not on line)
- Over a **black** line — weak reflection → sensor reads **1** (on line)

Maqueen Plus V2 has **five** line-tracking sensors. In this challenge we use three: **M** (middle), **R1** (right), and **L1** (left).

![Line-tracking sensor diagram](https://dfimg.dfrobot.com/5e49162af2c4183e48c5caa5/edu/989ab193a4f3ecd8ddcd65fb97662b19.png)

---

## Step 1 — Create a new project

1. Go to [makecode.microbit.org](https://makecode.microbit.org/){ target="_blank" } and click **New Project**.
2. Add the Maqueen Plus V2 extension:

    ```
    https://github.com/DFRobot/pxt-DFRobot_MaqueenPlus_v20
    ```

![Create project with extension](https://dfimg.dfrobot.com/5e49162af2c4183e48c5caa5/edu/dae56f37fcc0a2c21393fb02eebe3ea7.png)

---

## Step 2 — Program it

Maqueen will follow a black line on the mat. If you don't have a mat, you can use black adhesive tape on a table.

There are **three possible situations** as Maqueen drives:

![Three sensor situations](https://dfimg.dfrobot.com/5e49162af2c4183e48c5caa5/edu/32820b9adbf4a993035bde1f4c5fc07f.png)

Here is the program flowchart:

![Program flowchart](https://dfimg.dfrobot.com/5e49162af2c4183e48c5caa5/edu/bf12cb23f6f42be7a9c5ed0aea63ef13.png)

Because we need to check **two sensor outputs at the same time**, we use an **and** block:

![The and block](https://dfimg.dfrobot.com/5e49162af2c4183e48c5caa5/edu/a50bc18e03a74fa6589e46ed02cd8e27.png)

1. **Sensor M detects the black line** → drive forward.

    ![M on line: go forward](https://dfimg.dfrobot.com/5e49162af2c4183e48c5caa5/edu/a4fef764288a3fd8cb225992396f367c.png)

2. **Only sensor R1 detects the black line** → turn right.

    ![R1 on line: turn right](https://dfimg.dfrobot.com/5e49162af2c4183e48c5caa5/edu/ad3bbee8fbff38a774e84268c60481cb.png)

3. **Only sensor L1 detects the black line** → turn left.

    ![L1 on line: turn left](https://dfimg.dfrobot.com/5e49162af2c4183e48c5caa5/edu/c8973936cccb4522028d4a6e496913b9.png)

Your complete program should look like this:

![Complete line-tracking program](https://dfimg.dfrobot.com/5e49162af2c4183e48c5caa5/edu/e60fd8c8b59e356770a5d57e228f1f1f.png)

Name your project **Line-tracking Robot** and save it.

---

## Step 3 — Download

Send your program to the micro:bit as usual. See [Meet Maqueen](index.md#how-to-send-code-to-the-robot) if you need a reminder.

---

## Step 4 — See it in action!

Turn on Maqueen and place it on the mat over the black line. It should follow the track automatically — like a miniature train!

![Maqueen following the line](https://dfimg.dfrobot.com/5e49162af2c4183e48c5caa5/edu/c279e1e6bf870cac249fb6a802686a33.png)

[👉 Open line following code](https://makecode.microbit.org/13062-30541-09778-88218){ .md-button target="_blank" }

---

## 🌟 Extension — Sensor Calibration

The line-tracking sensors are factory calibrated, so they should work straight away. However, if your robot doesn't detect the line reliably, you can recalibrate the sensors following these steps:

![Sensor calibration guide](https://dfimg.dfrobot.com/5e49162af2c4183e48c5caa5/edu/517aeaea22a7d6d2d22344b8c2e49a62.png)

---

## 🤔 Think & Explore — Sweeping Robot

Sweeping robots use bottom sensors to detect edges so they don't fall off tables or down stairs. Maqueen Plus V2 has five line-tracking sensors, which is plenty! Can you program Maqueen to act like a sweeping robot — staying **inside** an area marked by a black line border?

![Sweeping robot concept](https://dfimg.dfrobot.com/5e49162af2c4183e48c5caa5/edu/02f1cbf9bda986f7d2b85294bbed490c.png)

---

👉 [Challenge 4 — Gamepad Remote Control](challenge-4.md){ .md-button .md-button--primary }
