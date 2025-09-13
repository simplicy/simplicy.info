import Insta from "./common/assets/insta.svg";
import XLogo from "./common/assets/x.svg";
import LinkedIn from "./common/assets/linkedin.svg";
import Github from "./common/assets/github.svg";

export let items = [
  {
    icon: XLogo,
    openHotkey: 'Twitter',
    onClick: () => { window.open("https://x.com/simplicy_", "_blank") }
  },
  {
    icon: Github,
    openHotkey: 'GitHub',
    onClick: () => { window.open("https://github.com/simplicy", "_blank") }
  },
  {
    icon: Insta,
    openHotkey: 'Instagram',
    onClick: () => { window.open("https://instagram.com/simplicy_", "_blank") },
  },
  {
    icon: LinkedIn,
    openHotkey: 'LinkedIn',
    onClick: () => { window.open("https://linkedin.com/in/sean-p-hopkins", "_blank") },
  }
];
export let donate_links = [
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
    enabled: true
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

