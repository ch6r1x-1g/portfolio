import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "한체린",
  initials: "CR",
  url: "https://dillion.io",
  location: "청주, 한국",
  locationLink: "https://www.google.com/maps/place/%EC%B6%A9%EC%B2%AD%EB%B6%81%EB%8F%84+%EC%B2%AD%EC%A3%BC%EC%8B%9C/data=!3m1!4b1!4m6!3m5!1s0x356527ade464af7d:0xfc99789c7c6a8889!8m2!3d36.6283272!4d127.4913407!16zL20vMDIydGcx?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
  description:
    "더 나은 세상의 디자인을 위해 노력하는 디자이너가 꿈인 사람이에요! 저는 디스코드에서 주로 활동합니다!",
  summary:
    "디자인을 공부하고 배운지는 아직 1년 정도이지만, 디스코드 서버의 로고들을 만들어주며 성장중입니다. 지금 저작권 전권을 가지고 있는 서버는 [Free Server Korea](https://discord.com/servers/free-server-korea-958869586479038474) 하나뿐이지만, 성장하는 모습으로 더 나아갈 예정입니다.",
  avatarUrl: "/me.png",
  skills: [
    "Figma",
    "HTML",
    "CSS",
    "JavaScript",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sechan963@gmail.com",
    tel: "#",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ch6r1x-1g",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/r6hex1in",
        icon: Icons.linkedin,

        navbar: false,
      },
      Discord: {
        name: "Discord",
        url: "https://discord.gg/DZPxzrG5",
        icon: Icons.discord,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "누리안심다리",
      href: "https://www.nurisafe.org/",
      badges: [],
      location: "Remote",
      title: "사무국원",
      logoUrl: "/nuri.png",
      start: "2025년 6월",
      end: "2025년 10월",
      description:
        "누리안심다리는 가상관계중독 청소년을 구제하고 마음의 병에 다리를 놓아서 상담을 제공해주는 비영리단체입니다. 해당 단체에서 사무국원으로써 활동하면서, 사이버관계중독 청소년에게 도움을 줄 수 있는 방법을 찾아 나서는 경험을 해봤습니다.",
    },
    {
      company: "HOCO CREW",
      href: "https://hoco.kr/",
      badges: [],
      location: "Remote",
      title: "1기 크루원",
      logoUrl: "/HOCO.webp",
      start: "2025년 2월",
      end: "2025년 5월",
      description:
        "하비스트코딩클럽 (이하, HOCO)는 온라인 개발자 모임을 디스코드에서 구성하고 성공한 최초의 커뮤니티입니다. 해당 커뮤니티에서 1기 크루원으로 발탁되어 활동하면서 개발자분들과 소통을 해보면사 동시에 해당 직군에 관해 이해하는 계기가 되었습니다.",
    },
  ],
  education: [
    {
      school: "이지디자인컴퓨터학원",
      href: "https://ezdesign.or.kr/",
      degree: "웹앱 개발자 양성 과정 (중도포기)",
      logoUrl: "/ez.svg",
      start: "2024년 3월",
      end: "2024년 8월",
    },
    {
      school: "스파르타코딩클럽",
      href: "https://nbcamp.spartaclub.kr/ios?utm_source=youtube&utm_medium=26imc_pmax&utm_campaign=23395037517&utm_content=&utm_term=&gad_source=1&gad_campaignid=23399945996&gbraid=0AAAAAoj6CQrzmIWvb7TA6uTgD-6Z2PVv5&gclid=Cj0KCQiAsNPKBhCqARIsACm01fQu-JaFnLkVVhsqpptXzJb70kjGdLJgg_4YXJQxL6p52TCMJ4oSeaUaAs6WEALw_wcB",
      degree: "iOS 캠프 1기 (중도포기)",
      logoUrl: "/logo_nbc.webp",
      start: "2023년 7월",
      end: "2023년 10월",
    },
    {
      school: "청주농업고등학교",
      href: "https://school.cbe.go.kr/cjagh-h/M01/",
      degree: "식품가공과",
      logoUrl: "/logo.png",
      start: "2017년",
      end: "2020년",
    },
  ],
  projects: [
    {
      title: "Journet",
      href: "https://r6hex-1g.github.io/Journet/Journet-Web/Home/main.html",
      dates: "2024년 3월 - 2024년 6월",
      active: true,
      description:
        "Journet은 지도를 기반으로 한 일기 프로젝트로, 유저가 장소 기반의 일기를 기준으로 감정과 후기를 쓰고 공유할 수 있는 서비스입니다. \n 저는 이 프로젝트에서 SupaBase를 통한 Kakao map 연결을 주도했습니다. 또한 프론트엔드에서 UI/UX적으로 문제가 되는 점에 대해 조언하는 등의 업무를 수행했습니다.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Supabase",
        "Kakao Map",
        "Figma",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/ch6r1x-1g/Journet",
          icon: <Icons.github className="h-4 w-4" />,
        },
        {
          type: "Figma",
          href: "https://www.figma.com/design/uHyVKM1n3QZ3F77aHOhSeE/Journet?node-id=0-1&t=xvkxR3Y4jmhmk2ak-1",
          icon: <Icons.figma className="h-4 w-4" />,
        },
      ],
      image: "/journet.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Free Server Korea",
      dates: "2025년 10월 9일 - 현재",
      location: "Discord Community (Korea)",
      description:
        "해당 커뮤니티의 로고와 디스코드 서버 아이콘과 배너 등을 직접 디자인했고, Fan Kit 배포도 시행한 바 있습니다.",
      image:
        "/fsk.svg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Server Intro Page",
          icon: <Icons.discord className="h-4 w-4" />,
          href: "https://discord.com/servers/free-server-korea-958869586479038474",
        },
        {
          title: "Figma",
          icon: <Icons.figma className="h-3 w-3" />,
          href: "https://www.figma.com/design/TNZvRGAKVXoNv7pV8EX3mv/Free-Server-Korea?node-id=0-1&t=axB5fQQ1JzTlVlM0-1",
        },
      ],
    },
    {
      title: "Bellus",
      dates: "2025년 2월 6일 - 2025년 11월 1일",
      location: "Game Clan (PUBG)",
      description:
        "해당 클랜의 로고 이미지와, 디스코드 아이콘 팩, 서버 아이콘과 배너 이미지를 제작한 바 있습니다.",
      image:
        "/Bellus.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Figma",
          icon: <Icons.figma className="h-3 w-3" />,
          href: "https://www.figma.com/design/2ZZS8WQRn2R8ydOlQGoU1L/Bellus?node-id=0-1&t=7JRUTIZsnoijryl8-1",
        },
      ],
    },
  ],
} as const;
