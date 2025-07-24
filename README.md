# 🌐 VividConnect

A full-stack real-time video conferencing application built from scratch to implement **WebRTC**, **peer-to-peer communication**, and **real-time signaling** using **Socket.IO**, showcasing end-to-end system design and secure authentication.

---

## 🚀 Features

- 🔒 **Secure Authentication**: Token-based login with `bcrypt` and Context API for protected room access.  
- 🎥 **Real-Time Video Conferencing**: Peer-to-peer video streams via **WebRTC** with **STUN server** fallback.  
- 💬 **Live Chat & Presence**: Integrated **Socket.IO** for instant messaging and user connection updates.  
- 📱 **Responsive UI**: Clean, minimal design optimized for both desktop and mobile.  
- ⚡ **Optimized Performance**: Smooth room creation and join flow with fast frontend-backend interaction.  
- 🔗 **Sharable Meeting Links**: Unique, copyable links to invite participants to meetings.

---

## 🛠️ Tech Stack

- **Frontend**: React, Context API, WebRTC  
- **Backend**: Node.js, Express.js, Socket.IO  
- **Database**: MongoDB  
- **Authentication**: bcrypt, JWT  
- **Signaling**: Socket.IO  
- **Media Communication**: WebRTC with STUN server  

---

## 🧩 Challenges Faced

- ⚙️ **WebRTC Setup & Signaling**: Coordinating peer-to-peer connections and handling the offer/answer exchange using Socket.IO was technically demanding and required deep debugging.  
- 🔄 **Real-Time Sync**: Ensuring smooth synchronization of mute/unmute, join/leave states, and messages across all users in real time.

---
