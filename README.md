# Xintai 2.0

A cross-platform mobile app built with React Native, Expo, Expo Router, and TypeScript.

## Getting started

```bash
npm install
npx expo start
```

For local device development, install the development client once and then keep the Metro server running while editing TypeScript and UI code:

```bash
npx expo install expo-dev-client
npx eas-cli@latest build:configure
npx eas-cli@latest build --profile development --platform android
npx eas-cli@latest build --profile development --platform ios
npx expo start
```

## App structure

- `src/app/` — file-based routes and native tab navigation.
- `src/components/` — reusable screen components.
- `src/constants/` — shared design tokens.

The initial screens are scaffolding for the Xintai business app and do not connect to a backend yet.
