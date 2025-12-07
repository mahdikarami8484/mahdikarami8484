const Status = {
    Ongoing: "Ongoing",
    Completed: "Completed",
};

const faStatus: { [key: string]: string } = {
  "Ongoing": "درحال انجام",
  "Completed": "تکمیل شده"
};

type Project = {
    title: string;
    status: string;
    description: string;
    faDescription: string;
    sourceLink?: string;
    liveLink?: string | undefined;
};


const projects: Project[] = [
    {
        title: "ModuWeb (C++ & Drogon Framework)",
        status: Status.Ongoing,
        description: "ModuWeb is a modular C++ backend project built using the Drogon framework. It demonstrates a Modular Monolith architecture with separate plugins for authentication, email notifications, and user management. This project is ideal for learning C++ web development, REST APIs, and plugin-based architecture in a structured and maintainable way.",
        faDescription: "ModuWeb یک پروژه بک‌اند ماژولار با زبان ++C است که با استفاده از فریم‌ورک Drogon توسعه داده شده. این پروژه معماری Monolith ماژولار را پیاده‌سازی می‌کند و شامل پلاگین‌های جداگانه برای احراز هویت، اعلان‌های ایمیلی و مدیریت کاربران است. هدف آن یادگیری توسعه وب با ++C، کار با REST API‌ ها و معماری مبتنی بر پلاگین در قالبی ساخت‌یافته و قابل نگهداری می‌باشد.",
        sourceLink: "https://github.com/mahdikarami8484/ModuWeb",
        liveLink: ""
    },
    {
        title: "Voicechat App (C# & WindowsForm & TCP)",
        status: Status.Completed,
        description: "A simple Voice Chat application built with C# and .NET. The user interface is implemented using Windows Forms, since this project is intended purely for learning purposes. It demonstrates the basics of working with sockets through a simple voice chat example and may contain issues or limitations in real-world usage. The project consists of two separate programs: a client and a server. Its implementation is straightforward and designed for educational purposes rather than practical deployment.",
        faDescription: "یک برنامه ساده چت صوتی با استفاده از C# و .NET ساخته شده است. رابط کاربری آن با Windows Forms پیاده‌سازی شده، زیرا این پروژه صرفاً برای اهداف آموزشی طراحی شده است. این برنامه مبانی کار با سوکت‌ها را از طریق یک مثال ساده چت صوتی نشان می‌دهد و ممکن است در استفاده واقعی مشکلات یا محدودیت‌هایی داشته باشد. این پروژه شامل دو بخش مجزا است: یک کلاینت و یک سرور. پیاده‌سازی آن بسیار ساده است و بیشتر برای یادگیری و آموزش در نظر گرفته شده تا استفاده عملی.",
        sourceLink: "https://github.com/mahdikarami8484/VoicechatApp",
        liveLink: ""
    },
    {
        title: "Game DLL Injection (C++)",
        status: Status.Ongoing,
        description: "Structured DLL injection system for GTA: San Andreas with hooked rendering functions.",
        faDescription: "سیستم ساختار یافته اینجکت DLL برای بازی GTA: San Andreas با توابع رندرینگ هوک‌شده.",
        sourceLink: "https://github.com/mahdikarami8484/DoomDLL",
        liveLink: ""
    },
    {
        title: "DigiNumber (Vue.js & Tailwind)",
        status: Status.Completed,
        description: "Frontend of a Telegram Mini-App for virtual SIM card store.",
        faDescription: "فرانت‌اند یک مینی‌اپلیکیشن تلگرام برای فروشگاه سیم‌کارت مجازی.",
        sourceLink: "https://github.com/mahdikarami8484/diginumber",
        liveLink: "https://mahdikarami8484.github.io/diginumber/front-end/build"
    },
    {
        title: "Snake Game (C++ & windows.h)",
        status: Status.Completed,
        description: "A SnakeGame with cpp for windows.",
        faDescription: "یک بازی مار (Snake) با ++C برای ویندوز.",
        sourceLink: "https://github.com/mahdikarami8484/SnakeGame",
        liveLink: ""
    },
    {
        title: "Box Urls (PHP & Bootstrap)",
        status: Status.Completed,
        description: "A website for save and protect your urls and links.",
        faDescription: "یک وب‌سایت برای ذخیره و محافظت از آدرس‌ها و لینک‌های شما.",
        sourceLink: "https://github.com/mahdikarami8484/Box-Urls",
        liveLink: ""
    },
    {
        title: "Learn Vue ",
        status: Status.Completed,
        description: "Three projects for learning Vue.js",
        faDescription: "سه پروژه برای یادگیری Vue.js.",
        sourceLink: "https://github.com/mahdikarami8484/learn-vue",
        liveLink: "https://mahdikarami8484.github.io/learn-vue/project3"
    },
    {
      title: "MachineLearning",
      status: Status.Completed,
      description: "",
      faDescription: "MachineLearning یک ریپازیتوری آموزشی برای یادگیری مفاهیم پایه و میانی یادگیری ماشین است که با زبان Python و محیط Jupyter Notebook توسعه داده شده. این پروژه شامل چندین ماژول تمرینی مستقل است که هرکدام یک الگوریتم یا تکنیک مشخص را پوشش می‌دهند؛ از جمله پیش‌پردازش داده‌ها، رگرسیون، دسته‌بندی، خوشه‌بندی، کاهش ابعاد (PCA) و ارزیابی مدل‌ها.",
      sourceLink: "https://github.com/mahdikarami8484/MachineLearning",
    }
];



export const renderProjects = () => {
  return projects.map((project) => {
    const color = project.status == Status.Completed ? "green" : "yellow";
    return `
      <div class="min-h-48 bg-white shadow shadow-gray-200 rounded-md py-4 px-5 flex flex-col gap-3 max-w-96 sm:w-72 w-96 md:w-96 min-w-72">
        <div class="flex gap-3 justify-center items-start">
          <h1 class="font-medium">${project.title}</h1>
          <div class="cursor-default bg-${color}-400 text-sm text-white rounded-md p-0.5 px-2 font-medium shadow shadow-${color}-200">
            <p>${document.dir == "rtl" ? faStatus[project.status] : project.status}</p>
          </div>
        </div>
        <div class="text-gray-700 text-sm">
          <p>${document.dir == "rtl" ? project.faDescription : project.description}</p>
        </div>
        <div class="flex mt-auto justify-around p-2 w-full gap-6">
          ${project.sourceLink ? `<a target="_blank" href="${project.sourceLink}" class="shadow shadow-gray-200 p-2 rounded-md text-gray-700 cursor-pointer hover:scale-105 hover:font-medium">${document.dir == "rtl" ? "منبع" : "source" }</a>` : ""}
          ${project.liveLink ? `<a target="_blank" href="${project.liveLink}" class="shadow shadow-teal-200 p-2 rounded-md text-white cursor-pointer bg-teal-300 hover:scale-105 hover:font-medium">${document.dir == "rtl"  ? "مشاهده آنلاین" : "Live View"}</a>` : ""}
        </div>
      </div>
    `;
  }).join("\n");
};
