import * as Utilities from './utilities';

export const fonts = [
  {
    children: 'Commit Mono V143 [OFL]',
    onClick: () => Utilities.onHandleFontChange('font-use-commit-mono'),
  },
  {
    children: 'Departure Mono [MIT]',
    onClick: () => Utilities.onHandleFontChange('font-use-departure-mono'),
  },
  {
    children: 'Fira Code [OFL]',
    onClick: () => Utilities.onHandleFontChange('font-use-fira-code'),
  },
  {
    children: 'Fragment Mono [OFL]',
    onClick: () => Utilities.onHandleFontChange('font-use-fragment-mono'),
  },
  {
    children: 'Geist Mono [OFL] [DEFAULT]',
    onClick: () => Utilities.onHandleFontChange(''),
  },
  {
    children: 'Iosevka Term [OFL]',
    onClick: () => Utilities.onHandleFontChange('font-use-iosevka-term'),
  },
  {
    children: 'JetBrains Mono [OFL]',
    onClick: () => Utilities.onHandleFontChange('font-use-jet-brains-mono'),
  },
  {
    children: 'SFMono Square [FOSS]',
    onClick: () => Utilities.onHandleFontChange('font-use-sfmono-square'),
  },
  {
    children: 'Server Mono 0.0.6 [OFL]',
    onClick: () => Utilities.onHandleFontChange('font-use-server-mono'),
  },
  {
    children: 'TX-02 Berkeley Mono™',
    onClick: () => Utilities.onHandleFontChange('font-use-berkeley-mono'),
  },
]

export const themes = [
  {
    children: 'Refined White [DEFAULT]',
    onClick: () => Utilities.onHandleThemeChange(''),
  },
  {
    children: 'Black Midnight Vapor',
    onClick: () => Utilities.onHandleThemeChange('theme-dark'),
  },
  {
    children: 'U-571 Code Red',
    onClick: () => Utilities.onHandleThemeChange('theme-black-red'),
  },
  {
    children: 'Digital Bioluminescence',
    onClick: () => Utilities.onHandleThemeChange('theme-black-teal'),
  },
  {
    children: 'Operation Safe Blue',
    onClick: () => Utilities.onHandleThemeChange('theme-blue'),
  },
  {
    children: 'Neon Green Garden',
    onClick: () => Utilities.onHandleThemeChange('theme-green'),
  },
  {
    children: 'Kirkland Signature AS/400',
    onClick: () => Utilities.onHandleThemeChange('theme-black-green'),
  },
]


