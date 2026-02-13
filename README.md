# 🏋️‍♂️ AI Workout Tracker

A modern, high-performance workout tracking application built with **Expo**, **React Native**, and **Clerk**, featuring AI-powered insights and professional-grade styling with **NativeWind v4**.

## 🚀 Overview

This project is a state-of-the-art fitness companion designed to help users track their workouts, monitor progress, and leverage AI to optimize their training routines. It uses the latest experimental stack (Expo 54+) for maximum performance and a seamless cross-platform experience.

## ✨ Features

- **🔐 Secure Authentication:** Powered by [Clerk](https://clerk.com/) for a robust and seamless login experience.
- **📱 Cross-Platform:** Runs beautifully on iOS, Android, and Web using a single codebase.
- **🎨 Modern UI/UX:** Styled with [NativeWind v4](https://www.nativewind.dev/) (Tailwind CSS for Native) for a premium, responsive feel.
- **🎬 Fluid Animations:** High-performance animations using [React Native Reanimated v4](https://docs.swmansion.com/react-native-reanimated/).
- **🛠️ Navigation:** File-based routing with [Expo Router](https://docs.expo.dev/router/introduction/).
- **🤖 AI Integration:** (Planned) Smart workout suggestions and form analysis.

## 🛠️ Tech Stack

- **Core:** [Expo](https://expo.dev/) (v54.0.33)
- **Framework:** [React Native](https://reactnative.dev/) (0.81.5)
- **Navigation:** [Expo Router](https://docs.expo.dev/router/introduction/) (v6.0.23)
- **Styling:** [NativeWind v4](https://www.nativewind.dev/) / [Tailwind CSS](https://tailwindcss.com/)
- **Auth:** [Clerk Expo](https://clerk.com/docs/quickstarts/expo) (v2.19.22)
- **Animations:** [Reanimated v4](https://docs.swmansion.com/react-native-reanimated/) + [Worklets](https://docs.swmansion.com/react-native-worklets/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/)
- [Expo Go](https://expo.dev/expo-go) app (for physical device testing)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/ai-workout-tracker.git
   cd ai-workout-tracker
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```
   *Note: `--legacy-peer-deps` is required due to the experimental Expo 54 / React 19 / Reanimated 4 dependency tree.*

3. **Set up Environment Variables:**
   Create a `.env` file in the root (if not present) and add your Clerk credentials:
   ```env
   EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   ```

4. **Start the development server:**
   ```bash
   npx expo start --clear
   ```

## 🏗️ Project Structure

```text
├── src/
│   ├── app/            # Expo Router (Pages & Layouts)
│   │   ├── (app)/      # Authenticated routes
│   │   ├── _layout.tsx # Root layout & providers
│   ├── components/     # Reusable UI components
│   ├── constants/      # App config & theme tokens
│   ├── hooks/          # Custom React hooks
│   └── global.css      # Tailwind core styles
├── assets/             # Images, fonts, and icons
├── tailwind.config.js  # NativeWind configuration
└── app.json            # Expo configuration
```

## 🚀 Deployment

The app is ready for deployment via [EAS (Expo Application Services)](https://expo.dev/eas).

- **Web:** `npm run deploy`
- **Mobile Builds:** `npx eas-cli build`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
Built with ❤️ by [Your Name/Handle]
