---
layout: post
title: "Dual Atari Punk Console"
tags: hardware
img: ../assets/images/apc-dual.png
---

- Project stage: Prototype
- Tools: KiCad
- Vimeo: [Vimeo](https://vimeo.com/{{ site.vimeo_username }})
- Photos by: [Iza Rzechuła](https://www.iza.rzechula.pl/)
- Links:
    - [Wikipedia - Stepped-tone generator](https://en.wikipedia.org/wiki/Forrest_Mims#Stepped-tone_generator_(Atari_Punk_Console))
    - [Atari Punk Console](https://sdiy.info/wiki/Atari_Punk_Console)

This project is based on Atari Punk Console (Stepped Tone Generator),
which was originally created by Forrest Mims.

\* **NOTE**: This project was created for personal use only and is not commercial.

### Schematic

![apc-dual-schematic.png](../assets/images/apc-dual-schematic.png)


### Photos

![apc-dual1.png](../assets/images/apc-dual1.png)

![apc-dual2.png](../assets/images/apc-dual2.png)

### Bill of Materials (BOM)

|#  |Reference         |Qty|Value                   |Footprint                                                              |
|---|------------------|:-:|------------------------|-----------------------------------------------------------------------|
|1  |C1, C4            |2  |10u                     |CP_Radial_D5.0mm_P2.50mm                         |
|2  |C2, C5            |2  |10n                     |C_Disc_D3.4mm_W2.1mm_P2.50mm                             |
|3  |C3, C6            |2  |100n                    |C_Disc_D3.4mm_W2.1mm_P2.50mm                             |
|4  |C7                |1  |100u                    |CP_Radial_D6.3mm_P2.50mm                         |
|5  |D1                |1  |1N4007                  |D_A-405_P10.16mm                                  |
|6  |D2                |1  |LED                     |LED_D3.0mm                                                     |
|7  |J1                |1  |AudioJack2_Ground_Switch|AudioJack_3.5                                    |
|8  |J2                |1  |Barrel_Jack_Switch      |BarrelJack_54-00166                              |
|9  |J3                |1  |Conn_01x08_Male         |PinHeader_2x05_P2.54mm             |
|10 |R1, R2, R5        |3  |1K                      |R_Axial_DIN0207_L6.3mm_D2.5mm_P10.16mm|
|11 |R3                |1  |10K                     |R_Axial_DIN0207_L6.3mm_D2.5mm_P10.16mm|
|12 |R4                |1  |4K7                     |R_Axial_DIN0207_L6.3mm_D2.5mm_P10.16mm|
|13 |RV1, RV2, RV3, RV4|4  |500K                    |Potentiometer_R9011                              |
|14 |RV5               |1  |100K                    |Potentiometer_R9011                              |
|15 |SW1               |1  |SW_DIP_x02              |SW_DIP_SPSTx02_Slide_9.78x7.26mm_W7.62mm_P2.54mm     |
|16 |U1, U2            |2  |NE556                   |DIP-14_W7.62mm                                             |


### Files
- [20220613-apc-dual-schematic.pdf](../assets/files/20220613-apc-dual-schematic.pdf)
- [20231228-apc-dual-gerber.zip](../assets/files/20231228-apc-dual-gerber.zip)
