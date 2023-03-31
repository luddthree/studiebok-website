<template>
    <header class="bg-white">
        <nav class="flex justify-between items-center w-[92%]  mx-auto">
            <div>
                <!-- <a href="#" class="relative" @mouseover="hover = true" @mouseleave="hover = false">
                    <img src="bilde3.jpg" alt="Image 1" class="w-64 h-64 object-cover">
                    <img v-if="hover" src="bilde4.jpg" alt="Image 2"
                        class="w-64 h-64 object-cover absolute top-0 left-0 opacity-0 transition duration-500">
                </a> -->


                <a class="w-48 cursor-pointer md:opacity-100 absolute top-2 md:right-10 md:left-1/4" href="/">

                    <img src="bilde3.jpg" alt="..."
                        class="w-48 cursor-pointer md:opacity-100 hover:opacity-0 absolute top-0 md:right-10 md:left-1/4">

                    <img src="bilde4.jpg" alt="..."
                        class="w-48 cursor-pointer opacity-0 md:hover:opacity-100 absolute top-0 md:right-10 md:left-1/4">
                </a>
            </div>
            <div class="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full md:flex md:items-center px-5"
                :class="showmenu ? 'top-[10.2%]' : 'top-[-100%]'">
                <ul class="flex md:flex-row flex-col md:items-center md:gap-[1.5vw] gap-6 h-24">
                    <li>
                        <a class="text-gray-600 hover:text-green-500 text-s" href="/Om_studiebok">Om Studiebok</a>
                    </li>
                    <li>
                        <a class="text-gray-600 hover:text-green-500 text-s" href="/referanser">Referanser</a>
                    </li>
                    <li>
                        <a class="text-gray-600 hover:text-green-500 text-s" href="/teknologi">Teknologi</a>
                    </li>
                    <!-- <li>
                        <a class="text-gray-600 hover:text-green-500 text-s" href="#">Bestill demo</a>
                    </li> -->
                    <li>
                        <a class="text-gray-600 hover:text-green-500 text-s" href="/om_oss">Om oss</a>
                    </li>
                    <li>
                        <a class="text-gray-600 hover:text-green-500 text-s" href="/kontakt_oss">Kontakt oss</a>
                    </li>
                    <li>
                        <a class="text-gray-600 hover:text-green-500 text-s" href="/manual">Manual</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="fixed top-3 left-30 right-3">
            <!-- <button class="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign in</button> -->
            <ion-icon @click="onToggleMenu(this)" name="menu" class="text-3xl cursor-pointer md:hidden "></ion-icon>
        </div>
    </header>
</template>




<script>

export default {
    methods: {
        onToggleMenu(e) {
            this.showmenu = !this.showmenu
        }
    },
    data() {
        return {
            showmenu: false,
            hover: false
        }
    }

}

</script>