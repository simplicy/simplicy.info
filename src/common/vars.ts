import * as Utilities from './utilities';
import Insta from "./assets/insta.svg";
import XLogo from "./assets/x.svg";
import LinkedIn from "./assets/linkedin.svg";
import Github from "./assets/github.svg";
import Gitea from "./assets/gitea.svg";
import Kofi from "./assets/kofi.svg";
import Ebay from "./assets/ebay.svg";
import CopyIcon from "./assets/copy.svg";
import { toast } from "react-toastify";



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

export let items = [
  {
    enabled: true,
    icon: XLogo,
    openHotkey: 'Twitter',
    onClick: () => { window.open("https://x.com/simplicy_", "_blank") }
  },
  {
    enabled: true,
    icon: Github,
    openHotkey: 'GitHub',
    onClick: () => { window.open("https://github.com/simplicy", "_blank") }
  },
  {
    enabled: false,
    icon: Gitea,
    openHotkey: 'Gitea',
    onClick: () => { window.open("https://git.sympil.com/git/simplicy", "_blank") }
  },
  {
    enabled: true,
    icon: Insta,
    openHotkey: 'Instagram',
    onClick: () => { window.open("https://instagram.com/simplicy_", "_blank") },
  },
  {
    enabled: true,
    icon: LinkedIn,
    openHotkey: 'LinkedIn',
    onClick: () => { window.open("https://linkedin.com/in/sean-p-hopkins", "_blank") },
  }
];
export let donate_links = [
  {
    name: "Bitcoin",
    onClick: () => {
      let bit = "bc1qf2z5879n6h9cvedph3cckx05zukg0nxevn4588";
      navigator.clipboard.writeText(bit);
      toast.info("Copied to clipboard");
    },
    icon: CopyIcon,
    description: "",
    enabled: true
  },
  {
    name: "Ethereum",
    onClick: () => {

      let eth = "0x94D184f62c936017e2DE70aD4cD01Cc1f1ae003e";
      navigator.clipboard.writeText(eth);
      toast.info("Copied to clipboard");
    },
    icon: CopyIcon,
    description: "",
    enabled: true
  },
  {
    name: "Solana",
    onClick: () => {
      let sol = "FFDNYsmByTaRqpLxTfnsP5G7DkEPwQcr4pvHfSUCw7on";
      //copy address to clipboard
      navigator.clipboard.writeText(sol);
      toast.info("Copied to clipboard");
    },
    icon: CopyIcon,
    description: "",
    enabled: true
  },
  {
    name: "Ebay",
    onClick: () => {
      window.open("https://ebay.com/usr/simplicy_0", "_blank");
    },
    icon: Ebay,
    description: "",
    enabled: true
  },
  {
    name: "Ko-Fi",
    onClick: () => {
      window.open("https://ko-fi.com/simplicy", "_blank");
    },
    icon: Kofi,
    description: "",
    enabled: true
  },

];
export let links = [
  {
    name: "Blog",
    onClick: () => {
      window.open("https://blog.simplicy.info", "_self");
    },
    description: "",
    enabled: true
  },
  {
    name: "Closyt",
    onClick: () => {
      window.open("https://closyt.com", "_blank");
    },
    description: "",
    enabled: true
  },
  {
    name: "Sympil",
    onClick: () => {
      window.open("https://sympil.com", "_blank");
    },
    description: "",
    enabled: false
  },
  {
    name: "Ebay",
    onClick: () => {
      window.open("https://ebay.com/usr/simplicy_0", "_blank");
    },
    description: "",
    enabled: true
  },
  {
    name: "Ko-Fi",
    onClick: () => {
      window.open("https://ko-fi.com/simplicy", "_blank");
    },
    description: "",
    enabled: true
  },

];

export let work = [
    {
      "companyname": "MSC Cruises",
      "title": "IT Support Specialist",
      "start": "2015",
      "end": "2020",
    },
    {
      "companyname": "Corporate Message Services",
      "title": "IT Manager",
      "start": "2021",
      "end": "2023",
    },
    {
      "companyname": "Map Communications",
      "title": "Software Developer",
      "start": "2023",
      "end": "Present",
    },
  ]
