# Simple Authentication flow using React, TypeScript, and Supabase

## Overview

Welcome to the **React Dashboard** project, which features **Supabase** authentication for user login, registration, and password reset functionality. Once logged in, users can access a protected **dashboard** page where a confetti animation that celebrates their login for a brief period.

## Table of Contents
1. [Project Features](#project-features)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Supabase Setup](#supabase-setup)
4. [Running the App](#running-the-app)

## Project Features

1. **User Authentication**: 
   - Sign-up, login, and logout functionalities using Supabase.
   
2. **Protected Dashboard**:
   - Only authenticated users can access the dashboard.
   
3. **Password Reset**:
   - Allows users to request a password reset email and update their password.
   
4. **Confetti Celebration**:
   - Brief confetti animation is displayed upon entering the dashboard page.

5. **Responsive Design**: 
   - The app is mobile-friendly, with proper handling of viewport resizing.

---

## Tech Stack

- **Vite** (TypeScript) - Front-end framework.
- **Supabase** - Authentication, database, and backend-as-a-service.
- **React Router** - For navigation between pages.
- **react-confetti** - Confetti animation for user celebration.

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (>=14.x) & **npm** (or **yarn**)
- **Supabase Account**: [Sign up here](https://supabase.io/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/auth-flow.git
   cd auth-flow

2. **Install Dependencies**:
   ```bash
   npm install

### Supabase Setup

  1. **Create a Supabase Project**: Go to the [Supabase website](https://supabase.io/) and create a new project.

  2. **Get your API Keys**:
      - In your project dashboard, navigate to **Settings > API** and copy your supabase URL and supabase Anon Key
  
  3. **Create a ```.env``` in the root of your project**:
        ```
          VITE_SUPA_URL=your-supabase-url
          VITE_SUPA_ANON=your-supabase-anon-key
        ```
  
  4. **Configure Supabase Client**:
      - In the ../supabase/auth.ts, set up your Supabase client using the environment variables:
          ```
          import { createClient } from '@supabase/supabase-js';

          const supabaseUrl = import.meta.env.VITE_SUPA_URL;
          const supabaseKey = import.meta.env.VITE_SUPA_ANON;
          export const supabase = createClient(supabaseUrl, supabaseKey);

  ## Running the App

  - Once your supabase credentials are set up, you can run the app:
  ```bash
  npm start