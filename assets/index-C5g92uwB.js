(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const o={Ongoing:"Ongoing",Completed:"Completed"},d=[{title:"ModuWeb (C++ & Drogon Framework)",status:o.Ongoing,description:"ModuWeb is a modular C++ backend project built using the Drogon framework. It demonstrates a Modular Monolith architecture with separate plugins for authentication, email notifications, and user management. This project is ideal for learning C++ web development, REST APIs, and plugin-based architecture in a structured and maintainable way.",sourceLink:"#",liveLink:"#"},{title:"Voicechat App (C# & WindowsForm & TCP)",status:o.Completed,description:"A simple VoiceChat appliction in C# and NET. I used Windows Form for the user interface because this program is only for learning sockets and a simple example of VoiceChat and may have problems and errors in real practice. This project is in the form of two client and server programs and the logic of its operation is very simple and non-practical.",sourceLink:"#",liveLink:"#"},{title:"Game DLL Injection (C++)",status:o.Ongoing,description:"Structured DLL injection system for GTA: San Andreas with hooked rendering functions.",sourceLink:"#",liveLink:"#"},{title:"DigiNumber (Vue.js & Tailwind)",status:o.Completed,description:"Frontend of a Telegram Mini-App for virtual SIM card store.",sourceLink:"#",liveLink:"#"},{title:"Snake Game (C++ & windows.h)",status:o.Completed,description:"A SnakeGame with cpp for windows.",sourceLink:"#",liveLink:"#"},{title:"Box Urls (PHP & Bootstrap)",status:o.Completed,description:"A website for save and protect your urls and links.",sourceLink:"#",liveLink:"#"},{title:"Learn Vue ",status:o.Completed,description:"Three projects for learning Vue.js",sourceLink:"#",liveLink:"#"}],l=()=>d.map(i=>{const r=i.status==o.Completed?"green":"yellow";return`
      <div class="min-h-48 bg-white shadow shadow-gray-200 rounded-md py-4 px-5 flex flex-col gap-3 max-w-96 sm:w-72 w-96 md:w-96 min-w-72">
        <div class="flex gap-3 justify-center items-start">
          <h1 class="font-medium">${i.title}</h1>
          <div class="cursor-default bg-${r}-400 text-sm text-white rounded-md p-0.5 px-2 font-medium shadow shadow-${r}-200">
            <p>${i.status}</p>
          </div>
        </div>
        <div class="text-gray-700 text-sm">
          <p>${i.description}</p>
        </div>
        <div class="flex mt-auto justify-around p-2 w-full gap-6">
          ${i.sourceLink?`<a href="${i.sourceLink}" class="shadow shadow-gray-200 p-2 rounded-md text-gray-700 cursor-pointer hover:scale-105 hover:font-medium">Source</a>`:""}
          ${i.liveLink?`<a href="${i.liveLink}" class="shadow shadow-teal-200 p-2 rounded-md text-white cursor-pointer bg-teal-300 hover:scale-105 hover:font-medium">Live View</a>`:""}
        </div>
      </div>
    `}).join(`
`);document.getElementById("project-container").innerHTML=l();
