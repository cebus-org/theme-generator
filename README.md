# Theme Generator

A tool used to dynamically create accessible themes.

All themes are dynamically generated based on the canvas color to ensure safe contrast ratios.

## Installation

1. Install the `themeGenerator`.

Using NPM

```
npm install @calebz/react-theme-generator
```

Using Yarn

```
yarn add @calebz/react-theme-generator
```

## Input

```tsx
import { themeGenerator } from '@calebz/react-theme-generator';

const theme = themeGenerator({
  canvasColor: '#202020',
  semanticColors: {
    inherit: '#908D8D',
    brand: '#2165da',
  },
});
```

## Output

```tsx
{
  textColor: "#dfdfdf"
  canvasColor: "#202020"
  inherit: "#908D8D"
  brand: "#2165da"
  inheritHover: "#a09d9d"
  inheritPressed: "#a8a6a6"
  inheritBackground: "#3c3b3b"
  inheritBackgroundDisabled: "#636161"
  inheritDisabled: "#585757"
  inheritForegroundHover: "#242424"
  inheritForegroundPressed: "#292929"
  brandHover: "#477ddb"
  brandPressed: "#5a8adc"
  brandBackground: "#20314f"
  brandBackgroundDisabled: "#214990"
  brandDisabled: "#21437d"
  brandForegroundHover: "#202327"
  brandForegroundPressed: "#20262f"
  elevate: "drop-shadow(0 0 2px rgb(223,223,223,0.12))drop-shadow(0 4px 8px rgb(223,223,223,0.14))"
  hoverShadow: "0px 3px 1px -2px rgb(223,223,223,0.2), 0px 2px 2px 0px rgb(223,223,223,0.14), 0px 1px 5px 0px rgb(223,223,223,0.12)"
```
