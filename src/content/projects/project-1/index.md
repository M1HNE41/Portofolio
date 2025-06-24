---
title: "Solar Sense – Solar Energy Monitoring System"
summary: "A full-stack solar monitoring system that tracks, stores, and visualizes energy production using ESP32, React Native, and MongoDB."
date: 2025-06-15
draft: false
tags:
  - ESP32
  - React Native
  - Node.js
  - WebSocket
  - IoT
  - MongoDB
  - Vercel
  - Embedded Systems
  - Energy Monitoring
demoUrl: https://youtu.be/19KngGPB3J8
repoUrl: https://github.com/M1HNE41/Solar-Sense-App
---

**Solar Sense** is an end-to-end energy monitoring solution designed to measure and visualize solar panel performance in real time. Built on an ESP32 microcontroller and supported by a React Native mobile app, the system continuously tracks voltage, current, and power, while storing energy production data for future analysis.

### 🔋 Key Features
- Real-time monitoring of voltage, current, and power (via INA219 sensor)
- Interactive energy charts with hourly/daily/weekly statistics
- Device configuration via Wi-Fi AP mode or Bluetooth (BLE optional)
- Secure communication with HTTPS
- OTA firmware update support for ESP32
- Offline data buffering and sync once reconnected
- Alerts for low battery or offline state
- Exportable energy data (CSV format)

### 🛠️ Technologies Used
**Hardware:** ESP32, INA219, 2S BMS, 18650 batteries, Buck-Boost converter  
**Mobile App:** React Native, react-native-chart-kit, WebSocket, Tailwind (NativeWind), Modal UI  
**Backend:** Node.js, Express, MongoDB Atlas, Mongoose, WebSocket, Render  
**Connectivity:** AP Mode, optional BLE, MAC-based device identification  
**Deployment:** Vercel (frontend), Render (backend), DuckDNS + Tailscale (remote access)

### 🧠 What I Learned
- End-to-end integration of IoT hardware with cloud and mobile frontends
- Real-time data streaming via WebSocket
- OTA firmware delivery and ESP32 HTTPS support
- Designing energy analytics and power-to-energy conversion in software
- Securing device communication in constrained environments

<!-- ### 📸 Screenshots -->


---

