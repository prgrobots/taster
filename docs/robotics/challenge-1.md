---
title: Challenge 1 — Make it Move
tags: [robotics]
---

# 🏎️ Challenge 1 — Make it Move

<span class="badge badge-robot">Robotics</span>

Meet your robot! In this challenge you'll write your very first program to make Maqueen drive forward.

**Goal:** Learn how to control the motors.

---

## Step 1 — Create a new project

1. Go to [makecode.microbit.org](https://makecode.microbit.org/){ target="_blank" } in your browser.
2. Click **New Project** and give it a name — for example, *Let's Move Maqueen*.

![MakeCode new project screen](https://dfimg.dfrobot.com/nobody/edu/9f345055e3194a1e01c82944ba7d32a4.png)

![MakeCode programming interface](https://dfimg.dfrobot.com/nobody/edu/3fc43aa922a15d1144a2f7c57f5f98e8.png)

---

## Step 2 — Add the Maqueen extension

To access the Maqueen motor blocks you need to add the Maqueen Plus V2 library.

1. Click **Extensions** in the toolbox sidebar.
2. Paste this URL into the search box and press Enter:

    ```
    https://github.com/DFRobot/pxt-DFRobot_MaqueenPlus_v20
    ```

3. Click the Maqueen Plus V2 result to install it.

![Adding the Maqueen extension](https://dfimg.dfrobot.com/nobody/edu/dd1038e9b633e5d936cd6209a2ab6b15.png)

Once installed, a **+ Maqueen Plus V2** section will appear in the toolbox with all the motor and sensor blocks.

![Maqueen blocks loaded](https://dfimg.dfrobot.com/nobody/edu/7fa56a1449d1e2a7922e6c86d9bf9d6b.png)

---

## Step 3 — Program it

1. Drag the **initialize Maqueen Plus V2** block into the `on start` block.

    ![Initialize block in on start](https://dfimg.dfrobot.com/nobody/edu/23c58a736372b9aad36cf1de34bdf64c.png)

2. Drag a **motor control** block into the `forever` block.

    ![Motor block in forever](https://dfimg.dfrobot.com/nobody/edu/dbeae1450c1cd2b08838ba0d4bc27d77.png)

3. Change **left** to **all** so both wheels spin, and set the speed to **100**.

    ![Motor set to all, speed 100](https://dfimg.dfrobot.com/nobody/edu/616bc7699de05d1549b9e504cefd9e64.png)

Your complete program should look like this:

![Complete program](https://dfimg.dfrobot.com/nobody/edu/747b8051a055dde27e25edea0cf51105.png)

---

## Step 4 — Download

You already know how to download! Send the program to your micro:bit the same way you did in [Meet Maqueen](index.md#how-to-send-code-to-the-robot).

---

## Step 5 — See it in action!

Plug in the battery pack and flip the power switch. Maqueen should drive forward!

![Maqueen driving forward](https://dfimg.dfrobot.com/nobody/edu/b72511b7f567acf4804ccae1abc93741.png)

---

## 🌟 Extension — Drive a square

Can you make Maqueen drive a perfect square? A square has **4 sides** — so the robot needs to go forward, turn 90°, and repeat that **4 times**.

**Hints:**

- Use a `repeat 4 times` loop from the **Loops** toolbox.
- To turn right, run the **left motor forward** and the **right motor backward** at the same time.
- Add a `pause` after each motor command — experiment with the time until your turn is close to 90°.

!!! tip "Starting point"
    [👉 Open example code](https://makecode.microbit.org/_JrXaxVauDKww){ .md-button target="_blank" }

---

## 🤔 Think & Explore

The program above makes Maqueen go forward — but real vehicles also reverse! Can you change the motor control block to make Maqueen go **backward** at speed 100?

> Tip: just change one setting in the motor block!

---

👉 [Challenge 2 — Avoid Obstacles](challenge-2.md){ .md-button .md-button--primary }
