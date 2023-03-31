<template>
  <ClientOnly>


    <div>
      <Header />
    </div>

    <body class="font-[Poppins] bg-gradient-to-t from-[#ffffff] to-[#f2f2f2] h-screen">

      <div>
        <Slideshow />
        <!-- <img class="" src="bilde1.jpg" alt="..."> -->
      </div>


      <br><br><br>
      <div class="grid grid-cols-3 gap-6 place-items-center">
        <div class="text-4xl ">
          <MyIcon class="hover:text-green-500" />
          <hr>
        </div>
        <div class="text-4xl ">
          <myicon2 class="hover:text-green-500" />
          <hr>

        </div>
        <div class="text-4xl ">
          <myicon3 class="hover:text-green-500" />
          <hr>

        </div>
      </div>
      <br><br>
      <div class="grid grid-cols-3 gap-6 place-items-center">
        <div class="text-2xl">
          For opplæringskontor og læreplasser
          <ul class="text-xs text-gray-600">
            <li>✔ Enkel administrasjon av faglig innhold</li>
            <li>✔ Effektiv oppfølging av læringer og fremdrift</li>
            <li>✔ Fleksibelt og sentralisert administrasjon</li>
            <li>✔ Kostnadsbesparende</li>
            <li>✔ Skreddersydd for veksling</li>
          </ul>
        </div>
        <div class="text-2xl">
          For lærlingene
          <ul class="text-xs text-gray-600">
            <li>✔ Alltid tilgjengelig lærebok og kompetansemål</li>
            <li>✔ Økt realisme og engasjement via animasjoner, film og 3D</li>
            <li>✔ Plassbesparende</li>
            <li>✔ Test deg selv</li>
            <li>✔ Utnytt tiden bedre</li>
          </ul>
        </div>
        <div class="text-2xl">
          Flere kriterier
          <ul class="text-xs text-gray-600">
            <li>✔ Mobilapplikasjon tilpasset smarttelefoner og nettbrett</li>
            <li>✔ Funksjonalitet for å håndtere online/offline – utfordringer</li>
            <li>✔ Intuitivt og enkelt</li>
            <li>✔ Kortere vei til Bestått meget godt</li>
            <li>✔ Optimalisert for Apple- og Androidenheter (mobil og nettbrett), samt tradisjonell desktop</li>
          </ul>
        </div>
      </div>




      <br><br><br><br><br><br>

      <Footer />



    </body>
  </ClientOnly>
</template>

<script>
// import Slideshow from "@/components/slideshow.vue";

// export default {
//   components: {
//     Slideshow,
//   },
// };


import Slideshow from "@/components/Slideshow.vue";

export default {
  components: {
    Slideshow
  }
}
</script>
<style>
.container {
  position: relative;
}

.first-div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: red;
  z-index: 1;
}

.second-div {
  position: absolute;
  top: 50px;
  left: 50px;
  width: 200px;
  height: 200px;
  background-color: blue;
  z-index: 2;
}
</style>



