const {Client} = require('whatsapp-web.js');
const qrcode = require ('qrcode-terminal');

const client = new Client();

client.on('qr',(qr) => {
    // Generate and scan this code with your phone
    console.log('QR RECEIVED', qr);
    qrcode.generate(qr,{small:true})
})

client.on('ready',function(){
    console.log('Client is ready!')
})

client.on('message', function(msg) {
    if(msg.body=='Pesan Paket 1'){
        msg.reply('anda memilih paket 1 yang berisi: \n 1. Tempe orek \n 2. Tongkol\n 3. bayem \n total harga Rp 10.000 \n apakah ingin memesan paket 1? ketik "ya paket 1/bukan paket 1"')
    }
        else if(msg.body=='ya paket 1' || msg.body=='Ya paket 1'){
            msg.reply('total pembayaran sebesar Rp 10.000 \n terimakasih sudah memesan')
        }
        else if (msg.body=='bukan paket 1' || msg.body=='Bukan paket 1'){
            msg.reply('Hallo slemat datang di Warteg Tegal ada \n silahkan pilih menu dibawah ini. \n (pilih dan ketiknomor 1-4 dari paket dibawah ini)\n 1.Paket 1\n 2.Paket 2\n 3.Paket 3\n 4.Paket 4')
        }
        
    if(msg.body=="Pesan Paket 2"){
        msg.reply('anda memilih paket 2 yang berisi: \n 1. Tempe orek \n 2. Urap\n 3. Jengkol \n total harga Rp 10.000 \n apakah ingin memesan paket 2? ketik "ya paket 2/bukan paket 2"')
        }
        else if(msg.body=='ya paket 2' || msg.body=='Ya paket 2'){
            msg.reply('total pembayaran sebesar Rp 10.000 \n terimakasih sudah memesan')
        }
        else if(msg.body=='bukan paket 2' || msg.body=='Bukan paket 2'){
            msg.reply('Hallo slemat datang di Warteg Tegal ada \n silahkan pilih menu dibawah ini. \n (pilih dan ketik nomor 1-4 dari paket dibawah ini)\n 1. Paket 1\n 2. Paket 2\n 3. Paket 3\n 4. Paket 4')
        }
        

    if(msg.body=="Pesan Paket 3"){
        msg.reply('anda memilih paket 3 yang berisi: \n 1. Opor ayam \n 2. Urap \n total harga Rp 12.000 \n apakah ingin memesan paket 3? ketik "ya paket 3/bukan paket 3"')
    }
        else if(msg.body=='ya paket 3' || msg.body=='Ya paket 3'){
            msg.reply('total pembayaran sebesar Rp 12.000 \n terimakasih sudah memesan')
        }
        else if(msg.body=='bukan paket 3' || msg.body=='Bukan paket 3'){
            msg.reply('Hallo slemat datang di Warteg Tegal ada \n silahkan pilih menu dibawah ini. \n (pilih dan ketik nomor 1-4 dari paket dibawah ini)\n 1. Paket 1\n 2. Paket 2\n 3. Paket 3\n 4. Paket 4')
        }
        

    if(msg.body=="Pesan Paket 4"){
        msg.reply('anda memilih paket 4 yang berisi: \n 1. Ayam Bakar \n 2. Tempe orek \n total harga Rp 13.000 \n apakah ingin memesan paket 4? ketik "ya paket 4/bukan paket 4"')
    }
        else if(msg.body=='ya paket 4' || msg.body=='Ya paket 4'){
        msg.reply('total pembayaran sebesar Rp 13.000 \n terimakasih sudah memesan')
        }
        
        else if(msg.body=='bukan paket 4' || msg.body=='Bukan paket 4'){
        msg.reply('Hallo slemat datang di Warteg Tegal ada \n silahkan pilih menu dibawah ini. \n (pilih dan ketik nomor 1-4 dari paket dibawah ini)\n 1. Paket 1\n 2. Paket 2\n 3. Paket 3\n 4. Paket 4')
        
        } 
    
    
    if(msg.body=="menu" || msg.body=="Menu"){
        msg.reply('Hallo slemat datang di Warteg Tegal ada \n silahkan pilih menu dibawah ini. \n (pilih dan ketik nomor 1-4 dari paket dibawah ini)\n 1. Paket 1\n 2. Paket 2\n 3. Paket 3\n 4. Paket 4')
        }
    })

client.initialize();