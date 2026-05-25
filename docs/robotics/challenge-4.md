---
title: Challenge 4 — Gamepad Remote Control
tags: [robotics]
---

# 🕹️ Challenge 4 — Gamepad Remote Control

<span class="badge badge-robot">Robotics</span>

!!! note "Advanced — optional"
    This challenge uses extra hardware. Check with your teacher before starting.

So far Maqueen has been driving on its own, following programs. Now it's time to take the wheel — control your robot live using a **GamePad for micro:bit**!

---

## What you need

| Item | Quantity |
|------|----------|
| Maqueen Lite | 1 |
| micro:bit V1 or V2 | 1 |
| GamePad for micro:bit | 1 |
| Micro-USB cable | 1 |

![GamePad for micro:bit](https://dfimg.dfrobot.com/nobody/wiki/3341c4d445ed64e27d33be9b220f32ad_0x0.png.webp)

No extra wiring needed — just plug the micro:bit into Maqueen, and insert the **same** micro:bit into the GamePad when it's time to use it.

---

## How it works

The GamePad has an analog joystick and several buttons. The program reads the joystick direction and button presses, then sends commands to the motors and LEDs.

| GamePad Input | Robot Action |
|---------------|-------------|
| Joystick up | Drive forward |
| Joystick down | Drive backward |
| Joystick left | Turn left |
| Joystick right | Turn right |
| Joystick centred | Stop |
| Button F (blue) | Left LED on |
| Button D (yellow) | Right LED on |

---

## Load the pre-built code

Two programs are needed — one for the GamePad and one for Maqueen Lite. Open each link in MakeCode, download it, and follow the instructions:

**GamePad program** (load onto the GamePad's micro:bit):

[👉 Open GamePad code](https://makecode.microbit.org/_i1fAXXFhR754){ .md-button target="_blank" }

**Maqueen Lite program** (load onto the Maqueen's micro:bit):

[👉 Open Maqueen Lite code](https://makecode.microbit.org/_YAjXaY6XARRg){ .md-button target="_blank" }

---

## Code screenshots

### GamePad code

![GamePad program screenshot](https://dfimg.dfrobot.com/nobody/wiki/1f25c4efbbd170d99255f0bf80add49d_0x0.png.webp)

### Maqueen Lite code

![Maqueen Lite program screenshot](https://dfimg.dfrobot.com/60c1e008bddfc41c3293de80/wiki/2dabf824302459a966a2fef314abd4a9_0x0.png.webp)

---

## Libraries needed

Both programs use the **maqueen** and **neopixel** extensions. If you want to modify the code yourself, add them the same way as before — click **Extensions** and search for each library name.

---

## 🌟 Challenge

Once you've got it working, try extending the code:

- Can you make **both** LEDs flash when you press a button?
- Can you add a **speed control** — hold one button for slow, another for fast?
- Can you program Maqueen to beep the buzzer when you press a button?

---

## 🎉 You've completed all the Maqueen challenges!

You've gone from writing your first motor program all the way to remote control. That's real robotics engineering.

👉 [Free Choice — what's next?](../free-time.md){ .md-button .md-button--primary }
