// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    css: ['~/assets/css/main.css'],
    app: {
        head: {
            link: [{
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap"
            }],
            script: [{ src: "https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js" }]
        }
    }

})


// export default {
//     modules: [
//         ['nuxt-mail', {
//             message: {
//                 to: 'foo@bar.de',
//             },
//             smtp: {
//                 host: "smtp.example.com",
//                 port: 587,
//             },
//         }],
//     ],
//     mail: {
//         message: {
//             to: 'foo@bar.de',
//         },
//         smtp: {
//             host: "smtp.example.com",
//             port: 587,
//         },
//         app: {
//             head: {
//                 link: [{
//                     rel: "stylesheet",
//                     href: "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap"
//                 }],
//                 script: [{ src: "https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js" }]
//             }
//         }
//     },
// }