export const smoothScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export const projectArray = [
  {
    projectName: "IIFL Wealth",
    srcImg: "/images/iifl.png",
    redirectUrl: "https://www.360.one/wealth/home",
    description:
      "Wealth management platform that provides investment advisory services, asset management.",
    stacks: ["React", "Redux-Toolkit", "Chart.js", "SASS", "Axios"],
  },
  {
    projectName: "Choice Connect",
    srcImg: "/images/choice.png",
    redirectUrl:
      "https://sso.choiceconnect.in/login/identifier?state=2c7ae1f44da19e6f8e6575587c499bfa1277e52d7f83e9fc29667380347eb6f6",
    description:
      " A platform that aims to make financial services more accessible and profitable for both users and financial advisors (CBAs).",
    stacks: ["NextJs", "Typescript", "React-Hooks", "SASS", "Axios"],
  },
  {
    projectName: "BOB Card",
    srcImg: "/images/BOB.png",
    redirectUrl: "https://www.bobcard.co.in/",
    description:
      "A customer-centric web platform developed for Bank of Baroda’s credit card services, aimed at streamlining card applications, offers, rewards, and user account management.",
    stacks: ["NextJs", "Typescript", "SSR", "SASS", "Axios"],
  },
  {
    projectName: "Royal Enfield",
    srcImg: "/images/RE.png",
    redirectUrl: "https://dealers.royalenfield.com/",
    description:
      "This project is a dedicated web portal designed to manage Royal Enfield dealership operations, including lead tracking, test ride scheduling, vehicle inventory, and customer interactions.",
    stacks: ["NextJs", "Typescript", "SASS", "Axios"],
  },
  {
    projectName: "Philips",
    srcImg: "/images/philips.png",
    redirectUrl: "https://www.philipslighting-stores.in/",
    description:
      " Philips has a wide variety of tools that can help with all of your lighting projects.",
    stacks: ["NextJs", "Typescript", "SASS", "Axios"],
  },
  {
    projectName: "Godrej GPL Alchemy",
    srcImg: "/images/godrej.png",
    redirectUrl: "https://gplalchemy-cr.nimapinfotech.com/login",
    description:
      " Talent development program for employees of Godrej Properties.",
    stacks: ["React", "Redux-Toolkit", "Chart.js", "SASS", "Axios"],
  },
  {
    projectName: "C2Hire – Hiring & Recruitment Portal",
    srcImg: "/images/c2hire.png",
    redirectUrl: "https://c2hire.com/",
    description:
      "A modern hiring and recruitment platform designed to streamline the hiring process for both recruiters and job seekers.",
    stacks: ["React", "Redux-Toolkit", "Chart.js", "SASS", "Axios"],
  },
];
