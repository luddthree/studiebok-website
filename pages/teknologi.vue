<template>
    <ClientOnly>

        <Header />

        <body class="font-[Poppins] bg-gradient-to-t from-[#ffffff] to-[#f2f2f2] h-screen">

            <div class="text-3xl">
                <br><br>
                <h1 class="text-center"><b>Teknologi</b></h1>
                <br>
                <hr>
            </div>
            <br>
            <div class="grid grid-cols-2">

                <div>
                    <p class="text-center text-gray-600">
                        Studiebok er utviklet med den nyeste webteknologien, noe som betyr <br>maksimal hastighet og
                        samtidig
                        optimale muligheter for skalering både med <br>tanke på Informasjonsmengde og automatisk justering i
                        forhold
                        til om <br>brukeren benytter iPhone, iPad eller laptop med Google Chrome. <br>Publiseringsløsningen
                        er
                        robust
                        slik at redaktører raskt kan tilpasse innholdet <br>etter hvert som pensum endres.<br><br>
                        Studiebok installeres med eget ikon for rask tilgjengelighet.<br><br><br><br><br>
                        <hr>
                    </p>
                </div>
                <div>
                    <img class="min-h-max" src="studiebok-mobil.png" alt="...">
                </div>
            </div>

            <div class="grid grid-cols-5 gap-4 place-items-end">
                <div>
                    <world />
                </div>
                <div>Enkel administrasjon og god oversikt bygget i HTML5</div>
            </div>

            <br>

            <div class="grid grid-cols-5 gap-4 place-items-end">
                <div>
                    <Wrench />
                </div>
                <div>Standardiserte og robuste rammeverk bygget med Javascript</div>
            </div>

            <br>

            <div class="grid grid-cols-5 gap-4 place-items-end">
                <div>
                    <Gear />
                </div>
                <div>Utviklingsverktøy for app/mobilt rammeverk: Angular</div>
            </div>



            <br><br><br><br><br>

            <Footer />
        </body>
    </ClientOnly>
</template>