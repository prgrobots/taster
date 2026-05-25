---
title: Meet Maqueen
tags: [robotics]
---

# 🤖 Meet Maqueen

<span class="badge badge-robot">Robotics</span>

This is Maqueen — a small robot car you're going to program this afternoon.


<img src="Pasted image 20260519124718.png" alt="drawing" width="500"/>



It has **motors, sensors, and lights** — and you control all of them by writing code in a tool called **MakeCode**. It's drag-and-drop, just like Scratch.

---

## What's on the robot?

| Part | What it does |
|------|-------------|
| 🧠 **micro:bit** | The brain — plugs into the top |
| ⚙️ **2 motors** | Drive the wheels |
| 👁️ **Ultrasonic sensor** | Measures distance to objects (like sonar) |
| ⬛ **Line sensors** | Detect black lines on the ground |
| 💡 **LEDs** | Lights on the front |
| 🔋 **Battery pack** | 3× AA batteries underneath |

---

## ✅ Setup checklist — do this first

- [ ] Pick up a Maqueen robot from the front
- [ ] Check the batteries are in (ask your teacher if unsure)
- [ ] Plug the **micro:bit** into the top of the robot (gold pins face forward)
- [ ] Turn the switch **ON** (underneath the robot)

---

## How to send code to the robot

=== "⚡ WebUSB — Recommended"

    WebUSB lets MakeCode send code **directly to the micro:bit with one click** — no file dragging needed. Works in **Chrome** or **Edge** (version 79+).

    **Pair once, then it just works every time.**

    #### Step 1 — Click Download

    Click the **Download** button at the bottom of MakeCode.

    ![Download button](https://cdn.makecode.com/blob/9a9653ac3b25742901b2ed3250aebfb7d65782ef/static/mb/device/usb/download-button-menu.png)

    #### Step 2 — Connect the USB cable

    Plug the micro:bit into your computer with a micro-USB cable, then click **Next**.

    ![Connect USB dialog](https://cdn.makecode.com/blob/3083ac91b44f3b65709e18806cc610ce6543617c/static/mb/device/usb/connect-usb.png)

    #### Step 3 — Click Pair

    A window asks you to pair your device. Click **Pair**.

    ![Pair device dialog](https://cdn.makecode.com/blob/2faad2360ee55493a3d6a6fa99cdf579cd39616d/static/mb/device/usb/pair-device.png)

    #### Step 4 — Select your micro:bit

    Choose **BBC micro:bit CMSIS-DAP** (or **DAPLink CMSIS-DAP**) from the list and click **Connect**.

    ![Device list](https://cdn.makecode.com/blob/e748d0767e9e263f7e12b8f150545b6f7eb7cf44/static/mb/device/usb/select-device-pair.png)

    #### Step 5 — Connected! ✅

    You'll see the **Connected to micro:bit** message. Click **Download** — your code transfers directly!

    ![Connected message](https://cdn.makecode.com/blob/70c1b8eea43618ac7ff6bbd9586f320064fb5ad3/static/mb/device/usb/usb-connected.png)

    !!! tip "From now on — just click Download"
        Once paired, every click of **Download** sends code straight to the robot. No files, no dragging.

    [📖 Full WebUSB guide](https://makecode.microbit.org/device/usb/webusb){ .md-button target="_blank" }

=== "📁 Manual — Always works"

    !!! info "Downloading your program"
        1. Click the **Download** button in MakeCode (bottom left)
        2. A `.hex` file downloads to your computer
        3. Open **File Explorer** — you'll see **MICROBIT** as a drive
        4. Drag the `.hex` file onto the MICROBIT drive
        5. The orange light on the micro:bit flashes while it copies
        6. When it stops flashing — your code is on the robot!

Now open MakeCode in your browser and create a new project:

[👉 Open MakeCode](https://makecode.microbit.org){ .md-button .md-button--primary target="_blank" }

---

## Add the Maqueen extension

MakeCode needs an extra set of blocks to control the robot. You only do this once.

!!! note "How to add the Maqueen extension"
    1. In MakeCode, click **Extensions** (bottom of the left panel)
    2. Search for **`maqueen`**
    3. Click the **DFRobot Maqueen** result
    4. You'll now see a new **Maqueen** section in the block menu 🎉

---

## Ready for your first challenge?

👉 [Challenge 1 — Make it Move](challenge-1.md){ .md-button .md-button--primary }
