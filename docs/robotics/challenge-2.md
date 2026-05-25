---
title: Challenge 2 — Avoid Obstacles
tags: [robotics]
---

# 🚧 Challenge 2 — Avoid Obstacles

<span class="badge badge-robot">Robotics</span>

One of the most common causes of road accidents is an unexpected obstacle. Real cars have collision-warning and automatic braking systems to help prevent this. In this challenge you'll give Maqueen the same superpower — using its ultrasonic distance sensor to detect obstacles and brake automatically.

**Goals:**

- Learn how to use variables
- Learn how to nest one condition block inside another

---

## Step 1 — Create a new project

1. Go to [makecode.microbit.org](https://makecode.microbit.org/){ target="_blank" } and click **New Project**.
2. Add the Maqueen Plus V2 extension (same as Challenge 1):

    ```
    https://github.com/DFRobot/pxt-DFRobot_MaqueenPlus_v20
    ```

![Create project with extension](https://dfimg.dfrobot.com/nobody/edu/9532cd4f39b6a8e2cf39f575b3546ef7.png)

---

## Step 2 — Program it

### Create a variable

1. In the **Variables** toolbox, click **Make a Variable** and name it **distance**.

    ![Create distance variable](https://dfimg.dfrobot.com/nobody/edu/55065b98d2415d49560d3cf6d97d0c9e.png)

2. Inside the `forever` block, set **distance** to the value read from the ultrasonic sensor. This updates the distance reading continuously.

    ![Set distance variable](https://dfimg.dfrobot.com/nobody/edu/7bee51875753460f8997851842091bbe.png)

### Add the braking logic

3. Now build the logic:
    - If `distance < 50` the robot is getting close — keep going but sound the buzzer as a warning.
    - If `distance < 30` the robot is very close — stop immediately.

    ![Nested if logic overview](https://dfimg.dfrobot.com/5e49162af2c4183e48c5caa5/edu/c952f283ea72be726606a455c85f1028.png)

4. The **inner** condition handles stopping: if `distance < 30` → stop all motors; otherwise → drive forward.

    ![Inner if: stop or forward](https://dfimg.dfrobot.com/5e49162af2c4183e48c5caa5/edu/8eb103c8f38e9f66cb703f9366731a4e.png)

5. The **outer** condition handles the buzzer: if `distance < 50` → buzzer on; otherwise → buzzer off.

    ![Outer if: buzzer on or off](https://dfimg.dfrobot.com/5e49162af2c4183e48c5caa5/edu/e9daa36ba50e368105c309638971c64f.png)

6. Your complete program should look like this:

    ![Complete auto-braking program](https://dfimg.dfrobot.com/5e49162af2c4183e48c5caa5/edu/231ecf6a54489157a8b5db2febfb6e8a.png)

---

## Step 3 — Download

Send your program to the micro:bit as usual. See [Meet Maqueen](index.md#how-to-send-code-to-the-robot) if you need a reminder.

---

## Step 4 — See it in action!

Turn on Maqueen and slowly move your hand toward the front of the robot:

- When your hand is closer than **50 cm** → the buzzer beeps.
- When your hand is closer than **30 cm** → the robot stops.

![Effect: robot stops near obstacle](https://dfimg.dfrobot.com/5e49162af2c4183e48c5caa5/edu/b4d46e22d204ca36c9c2bca2b753d232.png)

---

## 🌟 Think & Explore — Obstacle Avoidance

The auto-braking robot stops when it is too close to an obstacle. Can you go further and make it **steer around** the obstacle instead?

Use the flowchart below as a guide:

![Obstacle avoidance flowchart](https://dfimg.dfrobot.com/5e49162af2c4183e48c5caa5/edu/355e197993901413879fae76a7b6f455.png)

!!! tip "Hint"
    When the robot is too close, turn left (or right) for a short pause, then continue forward.

[👉 Open obstacle avoidance code](https://makecode.microbit.org/64946-39354-43485-37140){ .md-button target="_blank" }

---

👉 [Challenge 3 — Follow a Line](challenge-3.md){ .md-button .md-button--primary }
