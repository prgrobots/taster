---
title: Lesson — Pick & Place
tags: [xarm]
---

# 🧩 Lesson — xArm AI PC Software

<span class="badge badge-robot">Robot Arm</span>

---

## 3.1.2 Device Connection

1. Connect the power adapter to the robotic arm and turn the switch on. Use a micro-USB cable to connect the control board to your computer, then double-click to open the PC software. **Once the device is connected, the software will automatically detect it and install any required drivers.**

2. When the connection is successful, the red icon in the top-left of the main interface will turn **green**.

---

## 3.1.3 Interface Overview

![PC Software interface](images/hw-s1-image7.png)
![PC Software interface annotated](images/hw-s1-image8.png)

### ① Device Connection Status

| Icon | Function |
|---|---|
| ![](images/hw-s1-image9.png) | Shows whether the device is connected. **Green** = connected; **Red** = not connected or disconnected. |

### ② Servo Control Area

Displays the currently selected servo. Adjust the slider to change that servo's position.

| Icon | Function |
|---|---|
| ![](images/hw-s1-image10.png) | Servo ID number (e.g. ID 2) |
| ![](images/hw-s1-image11.png) | Servo position slider. Range: 0–1000. |
| ![](images/hw-s1-image12.png) | Servo deviation slider. Range: −100 to +100. |

### ③ Action Data List

Shows the time and servo values for each recorded action.

![Action data list](images/hw-s1-image13.png)

| Icon | Function |
|---|---|
| ![](images/hw-s1-image14.png) | Action group number. Up to 230 action groups, each holding up to 1020 actions. |
| ![](images/hw-s1-image15.png) | Action duration — how long the arm takes to execute this action. |
| ![](images/hw-s1-image16.png) | Servo ID column. The value below is the servo position for that action. Double-click ![](images/hw-s1-image17.png) to edit the value directly. |

### ④ Action Group Settings

| Icon | Function |
|---|---|
| ![](images/hw-s1-image18.png) | Select action group number (0–230). Group 0 is the default **"Attention"** pose. |
| ![](images/hw-s1-image19.png) | Download the current action list to the controller. This overwrites any existing actions at that number. |
| ![](images/hw-s1-image20.png) | ⚠️ **Delete all** action group data (groups 0–230). Use with caution. |
| ![](images/hw-s1-image21.png) | Run the selected action group once. |
| ![](images/hw-s1-image22.png) | Stop the currently running action group. |
| ![](images/hw-s1-image23.png) | Add a new action using the current servo values. |
| ![](images/hw-s1-image24.png) | Delete the selected action from the list. |
| ![](images/hw-s1-image25.png) | Update the selected action with the current servo values. |
| ![](images/hw-s1-image26.png) | Insert a new action before the selected action. |
| ![](images/hw-s1-image27.png) | Open an action group file and load it into the action list. |
| ![](images/hw-s1-image28.png) | Save the current action list to a file. |
| ![](images/hw-s1-image29.png) | Append (integrate) another action group onto the currently loaded one. |
| ![](images/hw-s1-image30.png) | Run the action group in the current list. Enable **Loop** to repeat continuously. |
| ![](images/hw-s1-image31.png) | Reset all servos to their initial (home) position. |
| ![](images/hw-s1-image32.png) | Loosen all joints so you can move the arm by hand. |
| ![](images/hw-s1-image33.png) | Read angle data from manual programming mode. |

### ⑤ Servo Settings

| Icon | Function |
|---|---|
| ![](images/hw-s1-image34.png) | Set the software language. |
| ![](images/hw-s1-image35.png) | Read deviation values saved on the controller. |
| ![](images/hw-s1-image36.png) | Download the deviation values from the software to the arm. |
| ![](images/hw-s1-image37.png) | Clear deviation values in the software (the controller's saved values are unchanged). |

---

## 3.2.1 Execute Action — Project Outcome

Use the PC software to run the preloaded action group **"No. 2 – Grab and Move to Left 90°"** once. This action group has already been written to the servo control board.

---

## 3.3.1 Action Programming — Project Outcome

Program an action group of **7 actions** to make the xArm AI perform a **"Forward Grasp"**.

!!! note
    All servo values in this section are for reference only. Adjust them to match your actual setup.

---

## 3.3.2 Action Programming — Steps

**(1)** Turn on the robotic arm, connect it to the computer, and open the PC software.

**(2)** Click **"Open Action File"** and select action group **No. 0**. Then click **"Online Running"** to load the servo values into the left panel. This becomes your first action.

![Loading action group 0](images/hw-s3-image2.png)

**(3)** Program the arm to lean forward with the gripper slightly open. In the servo control area, drag the sliders for **ID 1, ID 3, ID 4, and ID 5** to the values shown below.

![Servo values for forward lean](images/hw-s3-image3.png)

!!! tip
    Hold down the left mouse button and click the slider quickly for fine adjustments.

**(4)** Click **"Add Action"** to record this as the second action.

![Second action added](images/hw-s3-image4.png)

**(5)** Lower the arm slightly and fine-tune the gripper — this creates a smooth transition before closing. Adjust **ID 1, ID 3, and ID 4** as shown, then click **"Add Action"**.

![Third action — lowering](images/hw-s3-image5.png)

**(6)** Close the gripper to grasp the object. Using the same method, set the values shown below and add the **4th action**.

![Fourth action — close gripper](images/hw-s3-image6.png)

**(7)** Keep the object gripped and rotate the arm — mainly adjust **ID 6** (base/wrist rotation). Add the **5th action**.

![Fifth action — rotate](images/hw-s3-image7.png)

**(8)** Lower the arm to the target position, open the gripper, and place the object down. Add the **6th action**.

![Sixth action — place down](images/hw-s3-image8.png)

**(9)** Return the arm to its starting position. Right-click the **1st action** in the list and select **Copy**, then right-click in the blank area below the 6th action and select **"Paste Down"** to add it as the 7th action.

![Seventh action — return to home](images/hw-s3-image9.png)

---

## ✅ Pick & Place Lesson

In this lesson you'll use the **HiWonder PC Software** to program the xArm AI to pick up a block from one square on the mat and place it on another. You'll do this by recording a sequence of **actions** — each one is a snapshot of all the servo positions at a key point in the movement.

---

## What you'll build

A 9-action sequence that moves the arm through these stages:

1. **Home** — safe neutral position above the mat
2. **Hover above Square A** — arm moves over the block, gripper open
3. **Lower to Square A** — down to block height
4. **Close gripper** — grasp the block
5. **Lift up** — raise the block clear of the mat
6. **Hover above Square B** — move across to the target square
7. **Lower to Square B** — down to place height
8. **Open gripper** — release the block
9. **Return to Home** — safe finish position

---

## ✅ Step 1 — Open the software and connect

!!! note "Connect the arm"
    1. Make sure the arm is powered on (switch on the back of the base)
    2. Plug the micro-USB cable from the control board into the computer
    3. Double-click the **xArm PC Software** on the desktop
    4. Check the connection indicator (top-left) — it must be **green** before you continue

![PC Software interface|476](images/connected.png)

---

## ✅ Step 2 — Understand the workflow

The PC software works differently from Scratch. Instead of dragging blocks, you:

1. **Move the arm** by dragging the servo sliders (left panel)
2. **Set the time** — how long the arm takes to move to this position (in milliseconds)
3. Click **"Add Action"** — this records the current servo values as one step
4. Repeat for each key position
5. Click **"Run"** to play back the whole sequence

!!! tip "Time values"
    - `1000 ms` = 1 second — good for most moves
    - `500 ms` — faster, for small adjustments (like opening/closing the gripper)
    - Too fast and the arm will jerk or miss the target — start slow!

---

## ✅ Step 3 — Record the Home position (Action 1)

The arm should already be at or near home. If not, click **"Reset"** to return it.

1. Make sure the gripper is **open** — drag the **ID 6** slider toward 0
2. Set the **Time** to `1000`
3. Click **"Add Action"**

![Action list after adding first action](images/action-prog-2.png)

You should see one row appear in the action data list. That's Action 1 — Home.

---

## ✅ Step 4 — Find your key positions

You need to find servo values for **four positions** on the mat:

| Position    | What it is                                    |
| ----------- | --------------------------------------------- |
| **Hover A** | Arm tip hovering above Square A, gripper open |
| **Down A**  | Arm lowered to block height in Square A       |
| **Hover B** | Arm tip hovering above Square B, gripper open |
| **Down B**  | Arm lowered to place height in Square B       |

!!! note "How to find a position"
    1. Drag the servo sliders one at a time — the arm moves live
    2. When the arm tip is where you want it, note down the ID values on paper
    3. You'll use these values when recording each action below

!!! tip "Work from the base outward"
    Adjust **ID 1** (base rotation) first to swing the arm over the target square, then adjust **ID 2, 3, 4** to reach the height and depth you need.

---

## ✅ Step 5 — Record the pick sequence (Actions 2–5)

Work through these four positions in order. For each one:
- Adjust the sliders to match the position
- Set the time shown
- Click **"Add Action"**

**Action 2 — Hover above Square A**

Arm over Square A, ~5 cm above the block, gripper open (ID 6 ≈ 0).

Set time: `1000` → **Add Action**

![Adjusting servos to hover position](images/action-prog-3.png)

---

**Action 3 — Lower to Square A**

Lower the arm until the gripper jaws are level with the sides of the block. Keep ID 6 open.

Set time: `800` → **Add Action**

![Lowering to pick position](images/action-prog-5.png)

---

**Action 4 — Close gripper**

Close the gripper around the block — drag **ID 6** slider up until the jaws grip the block firmly (not too tight).

Set time: `500` → **Add Action**

![Closing gripper](images/action-prog-6.png)

---

**Action 5 — Lift up**

Raise the arm back up to hover height (same as Action 2, with gripper closed).

Set time: `800` → **Add Action**

---

## ✅ Step 6 — Record the place sequence (Actions 6–8)

**Action 6 — Hover above Square B**

Swing the arm over Square B, same hover height, gripper still closed.

Set time: `1000` → **Add Action**

![Moving to hover above Square B](images/action-prog-7.png)

---

**Action 7 — Lower to Square B**

Lower the arm until the block is just above the mat surface.

Set time: `800` → **Add Action**

![Lowering to place position](images/action-prog-8.png)

---

**Action 8 — Open gripper**

Open the gripper to release the block — drag **ID 6** back toward 0.

Set time: `500` → **Add Action**

---

## ✅ Step 7 — Return to Home (Action 9)

Move all sliders back to the Home values you recorded in Step 3.

Set time: `1000` → **Add Action**

Your action list should now have **9 rows**.

---

## ✅ Step 8 — Run and test!

1. Click **"Run"** — the arm will execute all 9 actions in order
2. Watch each stage — does it go where you expect?
3. If the gripper misses the block, **double-click** the row in the action list to edit it, then adjust the servo values and click **"Update Action"**

!!! tip "Tweaking the grip height"
    - Gripper too high: closes but misses the block — lower ID 2/3 a little
    - Gripper too low: arm scrapes the mat — raise ID 2/3 slightly
    - Right: jaws close cleanly around the sides of the block

---

## ✅ Step 9 — Save your action group

!!! note "Save your work"
    1. Click **"Save File"**
    2. In the pop-up, give it a name like `pick-place-1` and choose a number (e.g. 1)
    3. Click **Save**

![Saving the action group](images/action-prog-10.png)

---

## ✅ Done! What's next?

You've got a working pick-and-place action group. Now try the stacking challenge:

👉 [Challenge — Stack the Blocks!](challenge.md){ .md-button .md-button--primary }


---

## What you'll build

A 9-action sequence that moves the arm through these stages:

1. **Home** — safe neutral position above the mat
2. **Hover above Square A** — arm moves over the block, gripper open
3. **Lower to Square A** — down to block height
4. **Close gripper** — grasp the block
5. **Lift up** — raise the block clear of the mat
6. **Hover above Square B** — move across to the target square
7. **Lower to Square B** — down to place height
8. **Open gripper** — release the block
9. **Return to Home** — safe finish position

---

## ✅ Step 1 — Open the software and connect

!!! note "Connect the arm"
    1. Make sure the arm is powered on (switch on the back of the base)
    2. Plug the micro-USB cable from the control board into the computer
    3. Double-click the **xArm PC Software** on the desktop
    4. Check the connection indicator (top-left) — it must be **green** before you continue

![PC Software interface|476](images/connected.png)

---

## ✅ Step 2 — Understand the workflow

The PC software works differently from Scratch. Instead of dragging blocks, you:

1. **Move the arm** by dragging the servo sliders (left panel)
2. **Set the time** — how long the arm takes to move to this position (in milliseconds)
3. Click **"Add Action"** — this records the current servo values as one step
4. Repeat for each key position
5. Click **"Run"** to play back the whole sequence

!!! tip "Time values"
    - `1000 ms` = 1 second — good for most moves
    - `500 ms` — faster, for small adjustments (like opening/closing the gripper)
    - Too fast and the arm will jerk or miss the target — start slow!

---

## ✅ Step 3 — Record the Home position (Action 1)

The arm should already be at or near home. If not, click **"Reset"** to return it.

1. Make sure the gripper is **open** — drag the **ID 6** slider toward 0
2. Set the **Time** to `1000`
3. Click **"Add Action"**

![Action list after adding first action](images/action-prog-2.png)

You should see one row appear in the action data list. That's Action 1 — Home.

---

## ✅ Step 4 — Find your key positions

You need to find servo values for **four positions** on the mat:

| Position    | What it is                                    |
| ----------- | --------------------------------------------- |
| **Hover A** | Arm tip hovering above Square A, gripper open |
| **Down A**  | Arm lowered to block height in Square A       |
| **Hover B** | Arm tip hovering above Square B, gripper open |
| **Down B**  | Arm lowered to place height in Square B       |

!!! note "How to find a position"
    1. Drag the servo sliders one at a time — the arm moves live
    2. When the arm tip is where you want it, note down the ID values on paper
    3. You'll use these values when recording each action below

!!! tip "Work from the base outward"
    Adjust **ID 1** (base rotation) first to swing the arm over the target square, then adjust **ID 2, 3, 4** to reach the height and depth you need.

---

## ✅ Step 5 — Record the pick sequence (Actions 2–5)

Work through these four positions in order. For each one:
- Adjust the sliders to match the position
- Set the time shown
- Click **"Add Action"**

**Action 2 — Hover above Square A**

Arm over Square A, ~5 cm above the block, gripper open (ID 6 ≈ 0).

Set time: `1000` → **Add Action**

![Adjusting servos to hover position](images/action-prog-3.png)

---

**Action 3 — Lower to Square A**

Lower the arm until the gripper jaws are level with the sides of the block. Keep ID 6 open.

Set time: `800` → **Add Action**

![Lowering to pick position](images/action-prog-5.png)

---

**Action 4 — Close gripper**

Close the gripper around the block — drag **ID 6** slider up until the jaws grip the block firmly (not too tight).

Set time: `500` → **Add Action**

![Closing gripper](images/action-prog-6.png)

---

**Action 5 — Lift up**

Raise the arm back up to hover height (same as Action 2, with gripper closed).

Set time: `800` → **Add Action**

---

## ✅ Step 6 — Record the place sequence (Actions 6–8)

**Action 6 — Hover above Square B**

Swing the arm over Square B, same hover height, gripper still closed.

Set time: `1000` → **Add Action**

![Moving to hover above Square B](images/action-prog-7.png)

---

**Action 7 — Lower to Square B**

Lower the arm until the block is just above the mat surface.

Set time: `800` → **Add Action**

![Lowering to place position](images/action-prog-8.png)

---

**Action 8 — Open gripper**

Open the gripper to release the block — drag **ID 6** back toward 0.

Set time: `500` → **Add Action**

---

## ✅ Step 7 — Return to Home (Action 9)

Move all sliders back to the Home values you recorded in Step 3.

Set time: `1000` → **Add Action**

Your action list should now have **9 rows**.

---

## ✅ Step 8 — Run and test!

1. Click **"Run"** — the arm will execute all 9 actions in order
2. Watch each stage — does it go where you expect?
3. If the gripper misses the block, **double-click** the row in the action list to edit it, then adjust the servo values and click **"Update Action"**

!!! tip "Tweaking the grip height"
    - Gripper too high: closes but misses the block — lower ID 2/3 a little
    - Gripper too low: arm scrapes the mat — raise ID 2/3 slightly
    - Right: jaws close cleanly around the sides of the block

---

## ✅ Step 9 — Save your action group

!!! note "Save your work"
    1. Click **"Save File"**
    2. In the pop-up, give it a name like `pick-place-1` and choose a number (e.g. 1)
    3. Click **Save**

![Saving the action group](images/action-prog-10.png)

---

## ✅ Done! What's next?

You've got a working pick-and-place action group. Now try the stacking challenge:

👉 [Challenge — Stack the Blocks!](challenge.md){ .md-button .md-button--primary }
