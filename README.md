# MindEase 🧠💚

> A comprehensive mental health support platform designed for university students

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v5.0+-green)](https://www.mongodb.com/)
[![React](https://img.shields.io/badge/React-18.x-61dafb)](https://reactjs.org/)

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Environment Variables](#environment-variables)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Security](#security)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## 🎯 About

MindEase is a mental health support application specifically designed for university students facing challenges with stress, anxiety, depression, and overall wellbeing. The platform provides easy access to mental health resources, professional counseling, peer support, and self-assessment tools.

### Mission

To contribute to mental health awareness and support in the ALU community and beyond, breaking the stigma around mental health in African universities while providing accessible, culturally-sensitive mental health solutions.

### Problem Statement

Many universities in Africa face mental health challenges with limited access to support services. According to the World Mental Health International College Student Survey, depression and anxiety are among the leading causes of illness among young people. MindEase bridges this gap through technology.

---

## ✨ Features

### Core Features

- **🔐 User Authentication**
  - Secure registration and login
  - University email verification
  - Role-based access (Student/Counselor/Admin)

- **📊 Self-Assessment Tools**
  - Comprehensive mental health questionnaires
  - Automated risk detection
  - Personalized recommendations
  - Progress tracking over time

- **😊 Mood Tracking**
  - Quick daily mood check-ins
  - Visual mood history
  - Trend analysis
  - Notes and activity logging

- **👨‍⚕️ Counselor Services**
  - Browse available counselors
  - View specialties and ratings
  - Book counseling sessions
  - Session management

- **👥 Peer Support Groups**
  - Anonymous chat groups
  - Moderated discussions
  - Category-based communities
  - Safe space for sharing

- **📚 Resource Library**
  - Mental health articles
  - Video tutorials
  - Audio meditations
  - Coping strategies
  - Self-help guides

- **🚨 Crisis Intervention**
  - 24/7 emergency contacts
  - Automatic crisis detection
  - Counselor alerts
  - Immediate support access

### Additional Features

- Responsive mobile design
- Real-time notifications
- Data privacy protection
- GDPR compliance ready
- Accessibility features
- Multi-language support (planned)

---

## 📸 Screenshots

### Login & Registration
```
┌─────────────────────────────────┐
│         🧠 MindEase             │
│  Your Mental Health Companion   │
│                                 │
│  📧 Email: [____________]       │
│  🔒 Password: [____________]    │
│                                 │
│  [     Sign In      ]           │
│  Need an account? Register      │
└─────────────────────────────────┘
```

### Dashboard
```
┌─────────────────────────────────┐
│  Welcome back, Student!         │
│  How are you feeling today?     │
│                                 │
│  😊  🙂  😐  😔  😢            │
│                                 │
│  ┌──────┐ ┌──────┐             │
│  │ 📊   │ │ 📅   │             │
│  │Self  │ │Book  │             │
│  └──────┘ └──────┘             │
│                                 │
│  🚨 Crisis Support Available    │
└─────────────────────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **Lucide React** - Icon library
- **Tailwind CSS** - Styling
- **React Router** - Navigation (optional)

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM

### Authentication & Security
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication
- **helmet** - Security headers
- **express-rate-limit** - Rate limiting
- **express-validator** - Input validation

### Development Tools
- **nodemon** - Auto-restart server
- **Jest** - Testing framework
- **Supertest** - API testing
- **ESLint** - Code linting
- **Prettier** - Code formatting

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.0.0 or higher)
  ```bash
  node --version
  ```

- **npm** (v8.0.0 or higher)
  ```bash
  npm --version
  ```

- **MongoDB** (v5.0 or higher)
  ```bash
  mongod --version
  ```

- **Git**
  ```bash
  git --version
  ```

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/mindease.git
cd mindease
```

#### 2. Setup Backend

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env with your configuration
nano .env  # or use your preferred editor
```

**Backend `.env` Configuration:**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mindease
JWT_SECRET=your-super-secret-jwt-key-change-this
NODE_ENV=development
```

#### 3. Setup Frontend

```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install

# Create environment file (if needed)
echo "REACT_APP_API_URL=http://localhost:5000/api" > .env
```

#### 4. Initialize Database

```bash
# Start MongoDB (if not running)
# macOS:
brew services start mongodb-community

# Linux:
sudo systemctl start mongod

# Windows:
# Start MongoDB from Services or MongoDB Compass

# Optional: Seed database with sample data
cd backend
node scripts/seed.js
```

### Running the Application

#### Development Mode

**Option 1: Run Both Servers Separately**

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm start
```

**Option 2: Using Concurrently (Recommended)**

```bash
# Install concurrently in root
npm install -g concurrently

# Run both from root directory
concurrently "cd backend && npm run dev" "cd frontend && npm start"
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/health

#### Production Mode

```bash
# Build frontend
cd frontend
npm run build

# Start backend in production
cd ../backend
NODE_ENV=production npm start
```

---

## 📁 Project Structure

```
mindease-project/
├── backend/
│   ├── config/
│   │   └── db.js                 # Database configuration
│   ├── middleware/
│   │   ├── auth.js               # Authentication middleware
│   │   └── errorHandler.js       # Error handling
│   ├── models/
│   │   ├── User.js               # User schema
│   │   ├── Assessment.js         # Assessment schema
│   │   ├── MoodEntry.js          # Mood entry schema
│   │   ├── Session.js            # Counseling session schema
│   │   ├── SupportGroup.js       # Support group schema
│   │   └── Resource.js           # Resource schema
│   ├── routes/
│   │   ├── auth.js               # Authentication routes
│   │   ├── assessments.js        # Assessment routes
│   │   ├── moods.js              # Mood tracking routes
│   │   ├── sessions.js           # Session booking routes
│   │   ├── groups.js             # Support group routes
│   │   └── resources.js          # Resource routes
│   ├── scripts/
│   │   └── seed.js               # Database seeding
│   ├── utils/
│   │   ├── validators.js         # Input validation
│   │   └── helpers.js            # Helper functions
│   ├── .env                      # Environment variables
│   ├── .env.example              # Environment template
│   ├── .gitignore                # Git ignore rules
│   ├── package.json              # Dependencies & scripts
│   └── server.js                 # Main server file
│
├── frontend/
│   ├── public/
│   │   ├── index.html            # HTML template
│   │   ├── manifest.json         # PWA manifest
│   │   └── robots.txt            # SEO robots file
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js         # Header component
│   │   │   ├── Footer.js         # Footer component
│   │   │   ├── Navigation.js     # Navigation component
│   │   │   └── LoadingSpinner.js # Loading component
│   │   ├── pages/
│   │   │   ├── HomePage.js       # Dashboard page
│   │   │   ├── AssessmentPage.js # Assessment page
│   │   │   ├── ProfilePage.js    # User profile page
│   │   │   └── LoginPage.js      # Login/Register page
│   │   ├── utils/
│   │   │   ├── api.js            # API client
│   │   │   └── helpers.js        # Helper functions
│   │   ├── App.js                # Main app component
│   │   ├── App.css               # Global styles
│   │   └── index.js              # Entry point
│   ├── .env                      # Environment variables
│   ├── .gitignore                # Git ignore rules
│   ├── package.json              # Dependencies & scripts
│   └── README.md                 # Frontend documentation
│
├── docs/
│   ├── API.md                    # API documentation
│   ├── DEPLOYMENT.md             # Deployment guide
│   ├── CONTRIBUTING.md           # Contribution guidelines
│   └── USER_GUIDE.md             # User manual
│
├── tests/
│   ├── backend/
│   │   ├── auth.test.js          # Auth tests
│   │   ├── assessment.test.js    # Assessment tests
│   │   └── integration.test.js   # Integration tests
│   └── frontend/
│       └── components.test.js    # Component tests
│
├── .gitignore                    # Root git ignore
├── docker-compose.yml            # Docker configuration
├── LICENSE                       # MIT License
└── README.md                     # This file
```

---

## 📖 API Documentation

### Base URL

```
http://localhost:5000/api
```

### Authentication

Include JWT token in Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

### Endpoints

#### Authentication

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/auth/register` | Register new user | ❌ |
| POST | `/auth/login` | Login user | ❌ |

**Register Request:**
```json
{
  "name": "John Doe",
  "email": "john@university.edu",
  "password": "securepassword123",
  "role": "student"
}
```

**Login Request:**
```json
{
  "email": "john@university.edu",
  "password": "securepassword123"
}
```

#### Assessments

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/assessments` | Submit assessment | ✅ |
| GET | `/assessments/:userId` | Get user assessments | ✅ |

**Submit Assessment Request:**
```json
{
  "userId": "user_id_here",
  "responses": {
    "stress": 7,
    "anxiety": 6,
    "mood": 5,
    "sleep": 4
  }
}
```

#### Mood Tracking

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/mood-entries` | Log mood entry | ✅ |
| GET | `/mood-entries/:userId` | Get mood history | ✅ |

**Log Mood Request:**
```json
{
  "userId": "user_id_here",
  "mood": 4,
  "notes": "Feeling good today"
}
```

#### Sessions

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/sessions` | Book session | ✅ |
| GET | `/sessions` | Get user sessions | ✅ |
| PUT | `/sessions/:id` | Update session | ✅ |

#### Resources

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/resources` | List resources | ❌ |
| GET | `/resources/:id` | Get specific resource | ❌ |

For complete API documentation, see [docs/API.md](docs/API.md)

---

## 🔧 Environment Variables

### Backend Environment Variables

Create a `.env` file in the `backend` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/mindease

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-minimum-32-characters
JWT_EXPIRE=7d

# Email Configuration (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000

# Crisis Hotline
CRISIS_HOTLINE=1-800-273-8255
```

### Frontend Environment Variables

Create a `.env` file in the `frontend` directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_APP_NAME=MindEase
```

---

## 🧪 Testing

### Run Backend Tests

```bash
cd backend

# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test -- auth.test.js
```

### Run Frontend Tests

```bash
cd frontend

# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Generate coverage report
npm test -- --coverage
```

### Manual Testing

1. **Test User Registration**
   ```bash
   curl -X POST http://localhost:5000/api/auth/register \
     -H "Content-Type: application/json" \
     -d '{"name":"Test User","email":"test@university.edu","password":"password123"}'
   ```

2. **Test Health Endpoint**
   ```bash
   curl http://localhost:5000/health
   ```

3. **Test Login**
   ```bash
   curl -X POST http://localhost:5000/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{"email":"test@university.edu","password":"password123"}'
   ```

---

## 🚀 Deployment

### Deploy to Heroku

```bash
# Install Heroku CLI
npm install -g heroku

# Login to Heroku
heroku login

# Create app
heroku create mindease-app

# Add MongoDB addon
heroku addons:create mongolab:sandbox

# Set environment variables
heroku config:set JWT_SECRET=$(openssl rand -base64 32)
heroku config:set NODE_ENV=production

# Deploy
git push heroku main

# Open app
heroku open
```

### Deploy to Render

1. Push code to GitHub
2. Go to [render.com](https://render.com)
3. Create new Web Service
4. Connect GitHub repository
5. Set build command: `cd backend && npm install`
6. Set start command: `cd backend && npm start`
7. Add environment variables
8. Deploy

### Deploy Frontend to Netlify

```bash
# Build frontend
cd frontend
npm run build

# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=build
```

### Deploy Frontend to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd frontend
vercel --prod
```

For detailed deployment instructions, see [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)

---

## 🤝 Contributing

We welcome contributions to MindEase! Here's how you can help:

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow existing code style
- Write clear commit messages
- Add tests for new features
- Update documentation
- Ensure all tests pass

### Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Maintain professional communication

For detailed guidelines, see [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md)

---

## 🔒 Security

### Reporting Security Issues

If you discover a security vulnerability, please email security@mindease.app instead of using the issue tracker.

### Security Features

- ✅ Password hashing with bcrypt
- ✅ JWT authentication
- ✅ Input validation and sanitization
- ✅ Rate limiting
- ✅ CORS protection
- ✅ Helmet security headers
- ✅ HTTPS enforcement (production)
- ✅ Data encryption at rest

### Best Practices

- Never commit `.env` files
- Rotate JWT secrets regularly
- Use strong passwords
- Keep dependencies updated
- Regular security audits

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 MindEase Project

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

## 📞 Contact

**Project Lead:** Alliane Umutoniwase

- **Email**: alliane.umutoniwase@alueducation.com
- **University**: African Leadership University
- **GitHub**: [@yourusername](https://github.com/yourusername)

**Project Links:**
- **Repository**: https://github.com/yourusername/mindease
- **Documentation**: https://mindease-docs.netlify.app
- **Live Demo**: https://mindease.herokuapp.com

---

## 🙏 Acknowledgments

- **African Leadership University** - For supporting this initiative
- **World Mental Health International College Student Survey** - For research data
- **Open Source Community** - For amazing tools and libraries
- **Mental Health Professionals** - For guidance and expertise
- **Beta Testers** - For valuable feedback

### Built With

- [React](https://reactjs.org/) - Frontend framework
- [Node.js](https://nodejs.org/) - Backend runtime
- [Express](https://expressjs.com/) - Web framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide Icons](https://lucide.dev/) - Icon library

---

## 📊 Project Stats

- **Version**: 1.0.0
- **Status**: Active Development
- **Last Updated**: November 2024
- **Language**: JavaScript
- **Lines of Code**: ~5,000+

---

## 🗺️ Roadmap

### Version 1.0 (Current)
- ✅ User authentication
- ✅ Self-assessment tools
- ✅ Mood tracking
- ✅ Basic counselor booking
- ✅ Resource library
- ✅ Crisis intervention

### Version 1.5 (Q1 2025)
- 🔲 Video counseling integration
- 🔲 Real-time chat support
- 🔲 Advanced analytics dashboard
- 🔲 Mobile app (React Native)
- 🔲 Email notifications

### Version 2.0 (Q2 2025)
- 🔲 AI-powered recommendations
- 🔲 Multi-language support
- 🔲 Gamification features
- 🔲 Integration with university systems
- 🔲 Advanced reporting for admins

---

## ❓ FAQ

**Q: Is MindEase free to use?**  
A: Yes, MindEase is completely free for students.

**Q: Is my data private?**  
A: Yes, we take privacy seriously. All data is encrypted and never shared without consent.

**Q: Can I use MindEase if I'm not a student?**  
A: Currently designed for university students, but we plan to expand.

**Q: Is this a replacement for professional help?**  
A: No, MindEase is a support tool, not a replacement for professional mental health services.

**Q: How do I report a bug?**  
A: Create an issue on GitHub or email support@mindease.app

---

## 🌟 Star History

If you find this project helpful, please consider giving it a star on GitHub!

---

## 📱 Support

If you need help:

1. Check the [Documentation](docs/)
2. Search [Existing Issues](https://github.com/yourusername/mindease/issues)
3. Create a [New Issue](https://github.com/yourusername/mindease/issues/new)
4. Email support@mindease.app

---

**Remember:** If you or someone you know is in crisis, please call your local emergency number or crisis hotline immediately. This app is not a substitute for professional mental health care.

**Crisis Hotlines:**
- 🇺🇸 National Suicide Prevention Lifeline: 1-800-273-8255
- 🇰🇪 Kenya: 0800 720 990
- 🇿🇦 South Africa: 0800 567 567
- 🇷🇼 Rwanda: 3004 (Mental Health)

---

Made with ❤️ by the MindEase Team
