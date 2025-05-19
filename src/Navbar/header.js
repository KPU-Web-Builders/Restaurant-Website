document.addEventListener("DOMContentLoaded", () => {
  const smallScreenHeader = `
  <aside class="text-2xl transition-all duration-500 ease-in-out flex flex-col items-center justify-between md:text-4xl    bg-[#02eb02] w-full h-full pt-10 pb-8 text-white font-semibold font-serif md:hidden">

    <!-- close Icon -->
    <button class="absolute top-2 right-3.5 cursor-pointer  text-2xl">✖</button>

    <!-- Logo Or Name -->
     <span>Restuarnat <sup>Name</sup></span>
     <!-- Pages -->
      <ul class="flex flex-col  gap-8 items-center">
        <li >Home</li>
        <li >About</li>
        <li >Menu</li>
        <li >Contact</li>
      </ul>
      <!-- Icon -->

      <span>Icon</span>
  </aside>`;

  const largeScreenHeader = `
  <nav class="hidden transition-all duration-500 ease-in flex md:flex bg-[#02eb02]  w-full h-40 pl-8 pr-8 md:gap-2.5 items-center justify-between font-semibold font-serif md:text-3xl text-white  ">
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
    <span>Icon</span>
  </nav>
  `;
  document.getElementById("largeScreensidbarLoader").innerHTML =
    largeScreenHeader;
  document.getElementById("smallScreensidbarLoader").innerHTML =
    smallScreenHeader;
});
