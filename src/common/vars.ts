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


export const banner = {
  message: "",
  repeated: 10,
  separator: "    •   ",
  link: null,
  enabled: false,
}


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
    companyname: "Map Communications",
    title: "Software Developer",
    start: "2023",
    end: "Present",
    notes: [
      "Analyzed partner networks to identify applications and services, designing solutions to transition customers and partners onto the company’s proprietary software platform.",
      "Managed and deployed software solutions declaratively across distributed infrastructure using Portainer, GitLab, Kubernetes, and ArgoCD.",
      "Built services using Terraform, Python and AWS to synchronize databases with external platforms such as Snowflake and Looker, streamlining data movement and integration.",
      "Engineered integrations between core systems, external APIs, and healthcare platforms (Athena, Epic, Oracle Cerner) to enable real-time messaging, unified booking, and seamless cross-platform communication with Java Spring Boot, Oracle and React.",
      "Leveraged AI-driven tools to analyze user and customer metrics, predicting cancellation risks, reducing churn, and improving long-term retention.",
      "Maintained and optimized databases with migrations and updates in SQL and Rust, consolidating legacy brand databases into a unified Oracle-backed system.",
    ]
  },
  {
    companyname: "Corporate Message Services",
    title: "IT Manager",
    start: "2021",
    end: "2023",
    notes: [
      "Orchestrated the upkeep and administration of IT infrastructure, including virtual machine deployments, remote workstation updates via VPN, and end-to-end imaging, configuration, and troubleshooting of laptops and workstations for on-site and remote staff, leveraging NinjaRMM, AnyDesk, and Zendesk for lifecycle and remote support management.",
      "Built and managed IVRs, phone numbers, and Twilio Shaken/Stir configurations to ensure secure, and reliable communication for our customers.",
      "Created disaster recovery action plans to ensure 24/7 system reliability, safeguarding critical operations and client emergency lines.",
      "Designed, developed, and deployed internal applications to extend booking system functionality and integrate with ServiceMinder, Zendesk, ServiceTitan, Google Calendar, and other 3rd party APIs.",
    ]
  },
  {
    companyname: "MSC Cruises",
    title: "IT Support Specialist",
    start: "2015",
    end: "2020",
    notes: [
      "Delivered on-site technical support during high-profile events (ship christenings, private island operations) and supported the setup of remote offices in Canada and the Caribbean, ensuring system stability, seamless connectivity, and workflow continuity for executive, management, and operations teams.",
      "Partnered with the Disaster Recovery team to maintain uninterrupted operations for sales offices and local functions, ensuring business continuity during multiple severe weather events.",
      "Leveraged ServiceNow to manage, triage, and route technical support requests for North American Operations, adhering to SLA standards and generating weekly reports to identify systemic issues and opportunities for improvement."
    ]
  },
]


export const bio = {
  description: " I make terminal applications, API's, and desktop applications; mostly with Rust. My free time is split between programming and DevOps, gaming, sewing, or modding electronics. Currently, I am working on a multi-platform outfit planner and a VoIP/Messaging application.",
  title: "Software Developer",
  links: items,
}
