import React from "react";

export default function About() {
  return (
    <div className="w-full md:h-screem p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid md:grid-cols-3 gap-8">
        <div className="col-span-2 space-y-2">
          <p className="uppercase text-xl tracking-widest text-[#FF7F50]">
            About
          </p>
          <h2 className="">Who I am</h2>
          {/* Look into styling this like a commented out bit of code */}
          <p className="">I am a developer.....</p>
          <p>
            As a soon-to-be honours BSc graduate in Web & Mobile Development, I
            have always had a passion for technology. From tweaking and
            experimenting with gadgets to exploring the endless possibilities of
            smart automation, I find the field to be incredibly fascinating.
            What particularly draws me to programming languages is the constant
            challenge of leveling up, and I am currently upskilling with Next.js
            while planning to delve into Typescript in the upcoming summer. With
            my love for technology and my dedication to improving my skills
          </p>
          <p>
            During my studies, I have had the opportunity to gain experience
            with a wide range of programming languages and frameworks, including
            C++, C#, ASP.NET Razor, MySQL, PHP, Laravel, Java, AWS EC2, and
            Apache web servers. I am also well-versed in JavaScript, jQuery,
            React, Vue, MongoDB, Express, and Node. I am particularly proud of
            some of the projects I have worked on, such as a music database
            using SQLite and ASP.NET Razor, and a personal blog CMS using
            Laravel, MySQL, and Tailwind. This project included advanced backend
            features, such as user registration, login with username and
            password, OAuth sign-in options, and admin authorisation.{" "}
          </p>

          <p>
            Currently, I am working on three projects that are set to be
            completed by May. These projects include a full-stack application
            for a consultancy agency, which utilizes the MERN stack to provide
            users with a dashboard that allows them to play three games and
            receive suggestions for a career stream based on their results.
            Additionally, I am developing a progressive web application that can
            be accessed offline on a mobile device, as well as a recipe manager
            built in React and Vue to compare performance differences. I am
            excited to continue developing my skills and taking on new
            challenges as I pursue a career in web and mobile development.
          </p>
          <p className="underline cursor-pointer hover:text-[#FF7F50] font-bold ease-in duration-300">
            Please check out my recent projects
          </p>
        </div>
        <div className="w-full h-3/4 m-auto shadow-xl hover:shadow-custom rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img src="/assets/profile-picture.jpg" className="rounded-xl h-full" />
        </div>
      </div>
    </div>
  );
}
