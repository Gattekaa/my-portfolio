// Components
import ProjectItem from "../ProjectItem"

// Images
import portfolio_yure_1 from "@/assets/portfolio-yure-1.png"
import portfolio_yure_2 from "@/assets/portfolio-yure-2.png"
import todo_app_1 from "@/assets/todo-app-1.png"
import todo_app_2 from "@/assets/todo-app-2.png"
import clear_books from "@/assets/clear-books.webp"

export default function ExploreMyWork() {
  return (
    <section id="explore-my-work" className="w-full py-24 px-8 flex items-center text-center flex-col gap-24 bg-background-light">
      <h2 className="text-3xl md:text-4xl font-bold">Explore my work</h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectItem
          photo={portfolio_yure_1}
          alterPhoto={portfolio_yure_2}
          href="https://yure3d.vercel.app"
          title="Portfolio Yure Macedo | Archviz"
          description="Developed using Next.js and enhanced with the fluid styling of Tailwind CSS on the frontend. Behind the scenes, the power of Node.js, Prisma, and JWT come together to provide a robust and secure backend. A seamless fusion of technologies for an exceptional experience."
        />
        <ProjectItem
          photo={todo_app_1}
          alterPhoto={todo_app_2}
          href="https://gattekatodo.vercel.app/"
          title="TodoApp"
          description="Elevate Your Productivity with the Ultimate TodoApp: Powered by Next.js and Tailwind for a stunning, responsive frontend. Backed by Node.js, it ensures security and efficiency with JWT token authentication. Plus, take your tasks on the go with the integrated React Native app. Manage your to-dos like never before, wherever you are!"
        />
        <ProjectItem
          photo={clear_books}
          title="ClearBook | E-Commerce"
          description="Navigate with Style on a Web Application Developed in ReactJS and SASS, Powered by the Swiper. Enjoy a Unique Shopping Experience with our Internal API built with Ruby on Rails, and Immerse Yourself in the Vast Realm of Literature through the Integration of the Google Books External API."
        />
      </div>
    </section>
  )
}