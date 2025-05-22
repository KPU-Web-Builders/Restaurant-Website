
document.addEventListener("DOMContentLoaded", ()=>{
  const footer = `
        <footer class="flex-col gap-0 w-full h-180 bg-[#dd9714] flex md:flex-row md:h-60 pb-3 font-serif">
      <div class="items-center flex flex-col  md:items-start justify-between p-4">
        <h2 class="text-2xl text-white md:text-3xl font-mono">Reastaurant <sup class="font-mono">Name</su></h2>
        <div>
         <ul class=" flex gap-4 text-white text-2xl h-9">
          <li class="cursor-pointer hover:border-b-2 border-b-white"><a href="">Home</a></li>
          <li class="cursor-pointe hover:border-b-2 border-b-white"><a href="">About</a></li>
          <li class=" cursor-pointe hover:border-b-2 border-b-white"><a href="">Menu</a></li>
          <li class=" cursor-pointe hover:border-b-2 border-b-white"><a href="">Contact</a></li>
        </ul>
       </div>
        <div>
        <p class="text-gray-300">Copytight © 2025 MurtazaDeveloper All rights responsed</p>

      </div>
      </div>
      <div class="m-auto flex flex-col  md:items-start gap-2.5 p-6">
        <div class="flex gap-2  md:gap-8"><span class="rounded rounded-full bg-gray-400 p-2 pl-3 pr-3 text-white hover:bg-gray-500"><i class="ri-map-pin-line"></i></span> <span class="text-2xl text-white">Address</span></div>
        <div class="flex gap-2  md:gap-8"><span class="rounded rounded-full bg-gray-400 p-2 pl-3 pr-3 text-white hover:bg-gray-500"><i class="ri-phone-line"></i></span> <span class="text-2xl text-white">+93771846869</span></div>
        <div class="flex gap-2  md:gap-8"><span class="rounded rounded-full bg-gray-400 p-2 pl-3 pr-3 text-white hover:bg-gray-500"><i class="ri-mail-line"></i></span> <span class="text-2xl text-white">xyz@gmail.com</span></div>
      </div>
      <div class="flex items-center justify-center p-9">
        <div class="bg-white h-30 w-30 rounded rounded-full"></div>
      </div>
      <div class="items-center flex flex-col  md:items-start justify-between p-6">
        <div><h3 class="text-2xl text-white">About the company</h3></div>
        <div><p class="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quia suscipit omnis modi</p></div>
        <div class="flex justify-between w-full">
          <span class="rounded rounded-sm bg-gray-500 p-2 pl-3 pr-3 text-white hover:bg-gray-400"><a href=""><i class="ri-facebook-fill"></i></a></span>
          <span class="rounded rounded-sm bg-gray-500 p-2 pl-3 pr-3 text-white hover:bg-gray-400"><a href=""><i class="ri-instagram-fill"></i></a></span>
          <span class="rounded rounded-sm bg-gray-500 p-2 pl-3 pr-3 text-white hover:bg-gray-400"><a href=""><i class="ri-linkedin-fill"></i></a></span>
          <span class="rounded rounded-sm bg-gray-500 p-2 pl-3 pr-3 text-white hover:bg-gray-400"><a href=""><i class="ri-twitter-fill"></i></a></span>
          <span class="rounded rounded-sm bg-gray-500 p-2 pl-3 pr-3 text-white hover:bg-gray-400"><a href=""><i class="ri-youtube-fill"></i></a></span>
        </div>
      </div>
 


    </footer>
  `;

  document.getElementById("footerLoder").innerHTML = footer;
})