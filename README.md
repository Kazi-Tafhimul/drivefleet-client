

# 🚗 DriveFleet

DriveFleet is a modern car rental and fleet management web application where users can explore vehicles, view car details, add and manage their own cars, and book available vehicles.

## 🌐 Live Demo

**Client:** [https://drivefleet-client-lemon.vercel.app/](https://drivefleet-client-lemon.vercel.app/)

**Server API:** [https://drivefleet-server-henna.vercel.app/](https://drivefleet-server-henna.vercel.app/)

## ✨ Features

* 🔐 Email/Password & Google Authentication
* 🚘 Explore and view detailed car information
* ➕ Add new car listings
* ✏️ Edit and delete owned cars
* 🟢 Manage vehicle availability
* 📅 Book available vehicles
* 👤 View personal bookings
* 🔒 Protected API routes with JWT authentication
* 📱 Fully responsive design
* 🔔 Toast notifications and error handling

## 🛠️ Technologies

**Frontend**

* Next.js
* React
* Tailwind CSS
* HeroUI

**Backend**

* Node.js
* Express.js
* MongoDB

**Authentication**

* Better Auth
* JWT
* Google OAuth

**Deployment**

* Vercel

## 📂 Project Structure

This project contains two separate repositories:

```
DriveFleet
├── drivefleet-client   # Next.js Frontend
└── drivefleet-server   # Express.js Backend
```

## 🚀 Run Locally

### Client

```
npm install
npm run dev
```

Runs on `http://localhost:3000`

### Server

```
npm install
npm run dev
```

Runs on `http://localhost:5000`

## 🔑 Environment Variables

### Client

```
NEXT_PUBLIC_SERVER_URL=
NEXT_PUBLIC_BETTER_AUTH_URL=
BETTER_AUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

### Server

```
MONGODB_URI=
PORT=5000
CLIENT_URL=
```

## 👨‍💻 Author

**Tafhimul Islam**

Built with ❤️ for learning and portfolio purposes.
