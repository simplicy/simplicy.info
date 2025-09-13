import Insta from "./common/assets/insta.svg";
import XLogo from "./common/assets/x.svg";
import LinkedIn from "./common/assets/linkedin.svg";
import Github from "./common/assets/github.svg";
import Kofi from "./common/assets/kofi.svg";
import Ebay from "./common/assets/ebay.svg";
import CopyIcon from "./common/assets/copy.svg";
import { toast } from "react-toastify";

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

