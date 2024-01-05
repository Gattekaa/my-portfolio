import portfolio_yure_1 from "@/assets/portfolio-yure-1.png";
import portfolio_yure_2 from "@/assets/portfolio-yure-2.png";
import todo_app_1 from "@/assets/todo-app-1.png";
import todo_app_2 from "@/assets/todo-app-2.png";
import telecom_1 from "@/assets/telecom-1.png";
import telecom_2 from "@/assets/telecom-2.png";

export const projects = [
  {
    title: {
      en: "Telecom Management System",
      pt_br: "Sistema de Gerenciamento de Telecomunicações",
    },
    description: {
      en: "A system developed for the management of clients and telecommunications boxes. The system allows the manager to create, edit, delete and search for clients and boxes. System made using the latest technologies such as: Next.JS, Typescript, Tailwind CSS, Prisma, Node.JS, PostgreSQL database and Google maps.",
      pt_br:
        "Um sistema desenvolvido para o gerenciamento de clientes e caixas de telecomunicações. O sistema permite que o gerente crie, edite, exclua e pesquise clientes e caixas. Sitema feito utilizando as tecnologias mais recentes como: Next.JS, Typescript, Tailwind CSS, Prisma, Node.JS, banco de dados PostgreSQL e mapas do Google.",
    },
    photo: telecom_1,
    alterPhoto: telecom_2,
  },
  {
    title: {
      en: "Portfolio Yure Macedo | Archviz",
      pt_br: "Portfólio Yure Macedo | Archviz",
    },
    description: {
      en: "Developed using Next.js and enhanced with the fluid styling of Tailwind CSS on the frontend. Behind the scenes, the power of Node.js, Prisma, and JWT come together to provide a robust and secure backend. A seamless fusion of technologies for an exceptional experience.",
      pt_br:
        "Desenvolvido usando Next.js e aprimorado com o estilo fluido do Tailwind CSS no front-end. Nos bastidores, o poder do Node.js, Prisma e JWT se unem para fornecer um back-end robusto e seguro. Uma fusão perfeita de tecnologias para uma experiência excepcional.",
    },
    href: "https://yure3d.vercel.app",
    photo: portfolio_yure_1,
    alterPhoto: portfolio_yure_2,
  },
  {
    title: {
      en: "TodoAPP | Web & Mobile",
      pt_br: "TodoAPP | Web & Mobile",
    },
    description: {
      en: "Elevate Your Productivity with the Ultimate TodoApp: Powered by Next.js and Tailwind for a stunning, responsive frontend. Backed by Node.js, it ensures security and efficiency with JWT token authentication. Plus, take your tasks on the go with the integrated React Native app. Manage your to-dos like never before, wherever you are!",
      pt_br:
        "Aumente Sua Produtividade com este TodoAPP: Desenvolvido com Next.js e Tailwind para um front-end impressionante e responsivo. Seu backend em Node.js garante segurança e eficiência com a autenticação por token JWT. Além disso, leve suas tarefas para onde for com o aplicativo React Native integrado. Gerencie suas tarefas como nunca antes, onde quer que esteja!",
    },
    href: "https://gattekatodo.vercel.app/",
    photo: todo_app_1,
    alterPhoto: todo_app_2,
  },
];
