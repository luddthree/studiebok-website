<template>
    <ClientOnly>

        <Header />

        <body class="font-[Poppins] bg-gradient-to-t from-[#ffffff] to-[#f2f2f2] h-screen text-gray-600">




            <div class="grid grid-cols-3">
                <div>

                </div>




                <form method="post" action="" accept-charset="UTF-8">
                    <input type="hidden" name="CRAFT_CSRF_TOKEN" value="xvHXdmHYBhnHWJ_uobLN~eMgYBh~s0GFSX~LsWuZ">
                    <input type="hidden" name="action" value="contactForm/sendMessage">
                    <br><br>
                    <h1 class="text-center text-2xl">Kontakt oss</h1>
                    <br>
                    <hr><br><br>
                    <h4><label for="bedriftselvskapskole">Bedrift/selskap/skole (obligatorisk)<br><br>

                        </label></h4>
                    <input class="border-2 border-black-500" id="bedriftselvskapskole" type="text"
                        name="bedriftselvskapskole" value="" size="70"><br><br><br>

                    <h4><label for="fromName">Ditt navn (obligatorisk)<br><br>

                        </label></h4>
                    <input class="border-2 border-black-500" id="fromName" type="text" name="fromName" value=""
                        size="70"><br><br><br>


                    <h4><label for="fromEmail">E-post (obligatorisk)<br><br>

                        </label></h4>
                    <input class="border-2 border-black-500" id="fromEmail" type="text" name="fromEmail" value=""
                        size="70"><br><br><br>

                    <h4><label for="your-subject">Emne<br><br>

                        </label></h4>
                    <input class="border-2 border-black-500" id="your-subject" type="text" name="your-subject" value=""
                        size="70"><br><br><br>

                    <h4><label for="message">Melding</label></h4>
                    <textarea class="border-2 border-black-500" rows="6" cols="73.9" id="message" name="message"></textarea>

                    <br><br>

                    <br>
                    <div class="grid grid-cols-5 gap-6 ">
                        <div>
                            <div class="container">
                                <button class="btn btn--primary" type="submit">Send</button>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>

                </form>

            </div>
            <br><br><br><br><br><br><br><br>
            <Footer />
        </body>

    </ClientOnly>
</template>
<style>
.container {
    position: relative;
    width: 100%;
    max-width: 400px;
}

.container img {
    width: 100%;
    height: auto;
}

.container .btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: #f1f1f1;
    color: black;
    font-size: 16px;
    padding: 16px 30px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    text-align: center;
}

.container .btn:hover {
    background-color: black;
    color: white;
}
</style>
<!-- <script setup>
const mail = useMail()

mail.send({
    from: 'John Doe',
    subject: 'Incredible',
    text: 'This is an incredible test message',
})
</script> -->