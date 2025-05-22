// Creating a DOM  that work when the pages loades
document.addEventListener("DOMContentLoaded", () => {
  // Creating a sidebar in javaScript 
  const smallScreenHeader = `
  <aside class=" text-2xl gap-6 transition-all duration-500 ease-in-out flex flex-col items-center bg-[#dd9714] w-full h-full pt-10 pb-8 text-white font-semibold font-serif md:hidden lg:hidden" id="sideBar">

    <!-- close Icon -->
     <button class="absolute top-2 right-3.5 cursor-pointer  text-2xl" class="close" onClick = 'handleClick()'><i class="ri-close-line"></i></button>

     <!-- Pages -->
      <ul class="flex flex-col  gap-8 items-center">
        <li >Home</li>
        <li >About</li>
        <li >Menu</li>
        <li >Contact</li>
      </ul>
      <!-- Icon -->

      <span><i class="ri-shopping-cart-line"></i></span>
  </aside>`;
  // Creating a navbar in javaScript 
  const largeScreenHeader = `
    <!-- Open Icon -->
  
  <nav class="hidden transition-all duration-500 ease-in md:flex bg-[#dd9714]  w-full h-40 pl-8 pr-8 md:gap-2.5 items-center justify-between font-semibold font-serif md:text-3xl text-white  ">
    <!-- Logo Or Name -->
    <span class="md:text-xl">Restaurant <sup class="">Name</sup></span>
    <!-- Link to the Pages -->
    <ul class="md:gap-5 text-2xl flex lg:gap-10">
      <li class="">Home</li>
      <li class="">About</li>
      <li class="">Menu</li>
      <li class="">Contact</li>
    </ul>
    <!-- Basket Icon -->
    <span><i class="ri-shopping-cart-line"></i></span>
  </nav>
  `;
  // Attaching the navbar to the html page
  document.getElementById("largeScreensidbarLoader").innerHTML =
    largeScreenHeader;
  // Attaching the sidbar to the html page
  document.getElementById("smallScreensidbarLoader").innerHTML =
    smallScreenHeader;
});

const openBtn = document.getElementById("open");
const SmallScreen = document.getElementById("smallScreensidbarLoader");
const showSidbar = document.getElementById("showSidbar");

function handleClick(){
    SmallScreen.classList.add("hidden");
    openBtn.classList.remove("hidden");
    openBtn.classList.add("flex");
    showSidbar.classList.remove("absolute");
}
openBtn.addEventListener("click", function(){
  SmallScreen.classList.remove("hidden");
  SmallScreen.classList.add("flex");
   openBtn.classList.remove("flex");
    openBtn.classList.add("hidden");
    showSidbar.document.getElementById("showSidbar").classList.add("hidden");

  
})




