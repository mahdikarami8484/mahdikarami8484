const Status = {
    Ongoing: "Ongoing",
    Completed: "Completed",
    Pending: "Pending"
};

type Project = {
    title: string;
    status: string;
    description: string;
    sourceLink?: string;
    liveLink?: string | undefined;
};


const projects: Project[] = [
    {
        title: "ModuWeb (C++ & Drogon Framework)",
        status: Status.Ongoing,
        description: "ModuWeb is a modular C++ backend project built using the Drogon framework. It demonstrates a Modular Monolith architecture with separate plugins for authentication, email notifications, and user management. This project is ideal for learning C++ web development, REST APIs, and plugin-based architecture in a structured and maintainable way.",
        sourceLink: "https://github.com/mahdikarami8484/ModuWeb",
        liveLink: ""
    },
    {
        title: "Voicechat App (C# & WindowsForm & TCP)",
        status: Status.Completed,
        description: "A simple VoiceChat appliction in C# and NET. I used Windows Form for the user interface because this program is only for learning sockets and a simple example of VoiceChat and may have problems and errors in real practice. This project is in the form of two client and server programs and the logic of its operation is very simple and non-practical.",
        sourceLink: "https://github.com/mahdikarami8484/VoicechatApp",
        liveLink: ""
    },
    {
        title: "Game DLL Injection (C++)",
        status: Status.Ongoing,
        description: "Structured DLL injection system for GTA: San Andreas with hooked rendering functions.",
        sourceLink: "https://github.com/mahdikarami8484/DoomDLL",
        liveLink: ""
    },
    {
        title: "DigiNumber (Vue.js & Tailwind)",
        status: Status.Completed,
        description: "Frontend of a Telegram Mini-App for virtual SIM card store.",
        sourceLink: "https://github.com/mahdikarami8484/diginumber",
        liveLink: "https://mahdikarami8484.github.io/diginumber/front-end/build"
    },
    {
        title: "Snake Game (C++ & windows.h)",
        status: Status.Completed,
        description: "A SnakeGame with cpp for windows.",
        sourceLink: "https://github.com/mahdikarami8484/SnakeGame",
        liveLink: ""
    },
    {
        title: "Box Urls (PHP & Bootstrap)",
        status: Status.Completed,
        description: "A website for save and protect your urls and links.",
        sourceLink: "https://github.com/mahdikarami8484/Box-Urls",
        liveLink: ""
    },
    {
        title: "Learn Vue ",
        status: Status.Completed,
        description: "Three projects for learning Vue.js",
        sourceLink: "https://github.com/mahdikarami8484/learn-vue",
        liveLink: "https://mahdikarami8484.github.io/learn-vue/project3"
    },
];



export const renderProjects = () => {
  return projects.map((project) => {
    const color = project.status == Status.Completed ? "green" : "yellow";
    return `
      <div class="min-h-48 bg-white shadow shadow-gray-200 rounded-md py-4 px-5 flex flex-col gap-3 max-w-96 sm:w-72 w-96 md:w-96 min-w-72">
        <div class="flex gap-3 justify-center items-start">
          <h1 class="font-medium">${project.title}</h1>
          <div class="cursor-default bg-${color}-400 text-sm text-white rounded-md p-0.5 px-2 font-medium shadow shadow-${color}-200">
            <p>${project.status}</p>
          </div>
        </div>
        <div class="text-gray-700 text-sm">
          <p>${project.description}</p>
        </div>
        <div class="flex mt-auto justify-around p-2 w-full gap-6">
          ${project.sourceLink ? `<a target="_blank" href="${project.sourceLink}" class="shadow shadow-gray-200 p-2 rounded-md text-gray-700 cursor-pointer hover:scale-105 hover:font-medium">Source</a>` : ""}
          ${project.liveLink ? `<a target="_blank" href="${project.liveLink}" class="shadow shadow-teal-200 p-2 rounded-md text-white cursor-pointer bg-teal-300 hover:scale-105 hover:font-medium">Live View</a>` : ""}
        </div>
      </div>
    `;
  }).join("\n");
};
