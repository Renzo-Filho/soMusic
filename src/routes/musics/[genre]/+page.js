import { error } from '@sveltejs/kit';

let AllMusics = {
    rockInt: [
        {
            title: "Have You Ever Seen The Rain?",
            artist: "Creedence Clearwater Revival",
            src: "../Musics/RockInt/Creedence Clearwater Revival - Have You Ever Seen The Rain.mp3",
            img: "../MusicImages/RockInt/creedence.jpg",
            id: "0",
        },

        {
            title: "Back In Black",
            artist: "AC/DC",
            src: "../Musics/RockInt/AC_DC - Back In Black.mp3",
            img: "../MusicImages/RockInt/acdc.jpg",
            id: "1",
        },

        {
            title: "I Cant Get No (Satisfaction)",
            artist: "The Rolling Stones",
            src: "../Musics/RockInt/The Rolling Stones - (I Cant Get No) Satisfaction.mp3",
            img: "../MusicImages/RockInt/rollingStones.png",
            id: "2",
        },

        {
            title: "Sweet Child O Mine",
            artist: "Guns N Roses",
            src: "../Musics/RockInt/Guns N Roses - Sweet Child O Mine.mp3",
            img: "../MusicImages/RockInt/gunsNroses.png",
            id: "3",
        },

        {
            title: "Twist And Shout",
            artist: "The Beatles",
            src: "../Musics/RockInt/Twist And Shout (Remastered 2009).mp3",
            img: "../MusicImages/RockInt/beatles.jpg",
            id: "4",
        },

        {
            title: "Dont Stop Me Now",
            artist: "The Queen",
            src: "../Musics/RockInt/Queen - Dont Stop Me Now.mp3",
            img: "../MusicImages/RockInt/queen.jpg",
            id: "5",
        },

        {
            title: "Johnny B. Goode",
            artist: "Chuck Berry",
            src: "../Musics/RockInt/Chuck Berry - Johnny B. Goode.mp3",
            img: "../MusicImages/RockInt/chuckBerry.png",
            id: "6",
        },

        {
            title: "Smells Like Teen Spirit",
            artist: "Nirvana",
            src: "../Musics/RockInt/Nirvana - Smells Like Teen Spirit.mp3",
            img: "../MusicImages/RockInt/nirvana.png",
            id: "7",
        },
    ],

    rockNac: [
        {
            title: "Tempo Perdido",
            artist: "Legião Urbana",
            src: "../Musics/RockNac/Legião Urbana - Tempo perdido.mp3",
            img: "../MusicImages/RockNac/legiao.png",
            id: "0",
        },

        {
            title: "Infita Highway",
            artist: "Engenheiros do Hawaii",
            src: "../Musics/RockNac/Engenheiros_do_Hawaii_Infinita_Highway_Acustico_MTV.mp3",
            img: "../MusicImages/RockNac/engenheiros.jpg",
            id: "1",
        },

        {
            title: "Bete Balanço",
            artist: "Barão Vermelho",
            src: "../Musics/RockNac/Barão Vermelho - Bete Balanço.mp3",
            img: "../MusicImages/RockNac/barao.jpeg",
            id: "2",
        },

        {
            title: "Pra Dizer Adeus",
            artist: "Titãs",
            src: "../Musics/RockNac/Titãs - Pra Dizer Adeus.mp3",
            img: "../MusicImages/RockNac/titas.jpg",
            id: "3",
        },

        {
            title: "Do Seu Lado",
            artist: "Jota Quest",
            src: "../Musics/RockNac/Jota Quest - Do Seu Lado (Ao Vivo).mp3",
            img: "../MusicImages/RockNac/jotaQuest.jpg",
            id: "4",
        },

        {
            title: "Garota Nacional",
            artist: "Skank",
            src: "../Musics/RockNac/SKANK - GAROTA NACIONAL.mp3",
            img: "../MusicImages/RockNac/skank.jpg",
            id: "5",
        },

        {
            title: "Primeiros Erros",
            artist: "Capital Inicial",
            src: "../Musics/RockNac/Capital_Inicial_Primeiros_Erros_Chove.mp3",
            img: "../MusicImages/RockNac/capital.png",
            id: "6",
        },

        {
            title: "Metamorfose Ambulante",
            artist: "Raul Seixas",
            src: "../Musics/RockNac/Raul Seixas - Metamorfose Ambulante.mp3",
            img: "../MusicImages/RockNac/raul.jpg",
            id: "7",
        },
    ],

    pagode: [
        {
            title: 'Falta Você', 
            artist: 'Tiaguinho',
            src:'../Musics/Pagode/Thiaguinho - Falta Você (Infinito Vol. 2) [Vídeo Oficial].mp3',
            img: '../MusicImages/Falta você_.jpg',
            id: '0'
        },
    
        { 
            title: 'Amor e Fé', 
            artist: 'Grupo Pixote e Hungria', 
            src:'../Musics/Pagode/Amor e Fé - Grupo Pixote  Hungria -  [Pixote House Music] EP.02.mp3', 
            img:'../MusicImages/Pagode/Amor e fé_.jpg',
            id: '1' 
        },
        { 
            title: 'Nossa Vida Parou', 
            artist: 'Ferrugem',
            src: '../Music/Pagode/Ferrugem - Nossa Vida Parou.mp3', 
            img:'../MusicImages/Pagode/Nossa vida parou_.jpg',
            id: '2' 
        },
        {
            title: 'Sábado E Domingo', 
            artist: 'Felipe Araújo e Thiaguinho',
            src: '../Music/Pagode/Sábado E Domingo.mp3', 
            img:'../MusicImages/Pagode/Sábado e domingo_.jpg',
            id: '3'
        },
    
        { 
            title: 'Pódio', 
            artist: 'Dilsinho e Jorge Mateus',
            src: '../Music/Pagode/Dilsinho, Jorge  Mateus - Pódio (Garrafas e Bocas).mp3', 
            img:'../MusicImages/Pagode/Podia_.jpg',
            id: '4' 
        },
    
        { 
            title: 'Mensagem Apagada ',
            artist: 'Dilsinho, Sorriso Maroto',
            src: '../Music/Pagode/Dilsinho, Sorriso Maroto - Mensagem Apagada (Clipe Oficial).mp3', 
            img:'../MusicImages/Pagode/Mensagem apagada_.jpg',
            id: '5' 
        },
    
        { 
            title: 'Cachorrinho', 
            artist: 'Ferrugem',
            src: '../Music/Pagode/Ferrugem - Cachorrinho ( Clipe Oficial).mp3', 
            img:'../MusicImages/Pagode/Cachorrinho_.jpg',
            id: '6' 
        },
    
        { 
            title: 'Nosso Amor Quer Paz', 
            artist: 'Péricles e Marvvila',
            src: '../Music/Pagode/Péricles e Marvvila  Nosso Amor Quer Paz - Pagode Do Pericão II (Video Oficial).mp3', 
            img:'../MusicImages/Pagode/Nosso amor quer paz_.jpg',
            id: '7' 
        },
    ],

    bossanova: [
        {
            title: 'Garota de Ipanema', 
            artist: 'Tom Jobim',
            src: '../Music/Bossa/Garota De Ipanema.mp3', 
            img:'../MusicImages/Bossa/garota.jpg',
            id: '0'
        },
    
        { 
            title: 'Pela Luz dos Olhos Teus', 
            artist: 'Miúcha, Tom Jobim', 
            src:'../Music/Bossa/Miúcha, Tom Jobim - Pela Luz dos Olhos Teus (Pseudo Vídeo).mp3', 
            img:'../MusicImages/Bossa/luz.jpg',
            id: '1' 
        },
    
        {
            title: 'Desafinado', 
            artist: 'João Gilberto, Tom Jobim, Stan Getz',
            src: '../Music/Bossa/Desafinado - João Gilberto, Tom Jobim, Stan Getz.mp3', 
            img:'../MusicImages/Bossa/desafiado.jfif',
            id: '2'
        },
    
        { 
            title: ' Aguas de Março', 
            artist: 'Elis Regina  Tom Jobim',
            src: '../Music/Bossa/Elis Regina  Tom Jobim -  Aguas de Março - 1974.mp3', 
            img:'../MusicImages/Bossa/aguas.jfif',
            id: '3' 
        },
    
        { 
            title: 'Chega De Saudade', 
            artist: 'Tom Jobim',
            src: '../Music/Bossa/Chega De Saudade.mp3', 
            img:'../MusicImages/Bossa/chega.jfif',
            id: '4' 
        },
    
        { 
            title: 'Ela é Carioca', 
            artist: 'Antonio Carlos Jobim',
            src: '../Music/Bossa/Antonio Carlos Jobim - Ela é Carioca.mp3', 
            img:'../MusicImages/Bossa/ela.jfif',
            id: '5' 
        },
    
        { 
            title: 'Insensatez', 
            artist: 'Tom Jobim',
            src: '../Music/Bossa/Insensatez - Tom Jobim.mp3', 
            img:'../MusicImages/Bossa/insensatez.jfif',
            id: '6' 
        },
    
        { 
            title: 'Samba Do Avião', 
            artist: 'Gal Costa',
            src: '../Music/Bossa/Samba Do Avião.mp3', 
            img:'../MusicImages/Bossa/sambaNota.jfif',
            id: '7' 
        },
    ],

    blues: [
        {
            title: 'Cross Road Blues', 
            artist: 'Robert Johnson',
            src: '../MusicImages/Blues/Cross Road Blues - Robert Johnson (1936).mp3', 
            img:'../MusicImages/Blues/1',
            id: '0'
        },
    
        { 
            title: 'xxxxxx', artist: 'xxxxx', 
        src:'music/Muddy Waters plays Manish Boy.mp3', id: '1' 
        },
    
        {
            title: 'xxxxxxxxx', artist: 'xxxxxxxx',
            src: 'music/Howlin Wolf - Spoonful.mp3', id: '2'
        },
    
        { 
            title: 'xxxx', artist: 'xxxxxxxx',
         src: 'music/John Lee Hooker - Baby, Please Dont Go (1959).mp3', id: '3' 
        },
    
        { 
            title: 'xxxx', artist: 'xxxxxxxx',
         src: 'music/Sonny II - Keep It To Your Self.mp3', id: '4' 
        },
    
        { 
            title: 'xxxx', artist: 'xxxxxxxx',
         src: 'music/Son House - Pearline.mp3', id: '5' 
        },
    
        { 
            title: 'xxxx', artist: 'xxxxxxxx',
         src: 'music/Leadbelly - Where Did you Sleep Last Night.mp3', id: '6' 
        },
    
        { 
            title: 'xxxx', artist: 'xxxxxxxx',
         src: 'music/Robert Johnson - Me And The Devil Blues (Legendado) HD.mp3', id: '7' 
        },
    ],
    rap: [
        {
            title: '777-666', 
            artist: 'Matuê',
            src: '../Musics/Rap/Matuê - 777-666.mp3', 
            img:'../MusicImages/Rap/777-666.jpg',
            id: '0'
        },
        {
            title: 'Máquina do Tempo', 
            artist: 'Matuê',
            src: '../Musics/Rap/Matuê - Máquina do Tempo.mp3', 
            img:'../MusicImages/Rap/Maquina do tempo.png',
            id: '1'
        },
        {
            title: 'A Morte do Tempo', 
            artist: 'Matuê',
            src: '../Musics/Rap/Matuê - A Morte do Autotune.mp3', 
            img:'../MusicImages/Rap/Morte do autotune.jpg',
            id: '2'
        },
        {
            title: 'É sal', 
            artist: 'Matuê',
            src: '../Musics/Rap/Matuê - É sal.mp3', 
            img:'../MusicImages/Rap/É sal.jpg',
            id: '3'
        },
        {
            title: 'Jovens do Reggae', 
            artist: 'Kawe e Wiu',
            src: '../Musics/Rap/Kawe e Wiu - Jovens do Reggae.mp3', 
            img:'../MusicImages/Rap/Jovens do Reggae.jpg',
            id: '4'
        },
        {
            title: 'Balazul', 
            artist: 'Teto & Mateca',
            src: '../Musics/Rap/Teto & Mateca - Balazul.mp3', 
            img:'../MusicImages/Rap/Balazul.jpg',
            id: '5'
        },
        {
            title: 'M4', 
            artist: 'Teto',
            src: '../Musics/Rap/Teto - M4 feat. Matuê.mp3', 
            img:'../MusicImages/Rap/M4.jpg',
            id: '6'
        },
        {
            title: 'Kenny G', 
            artist: 'Matuê',
            src: '../Musics/Rap/Matuê - kenny G.mp3', 
            img:'../MusicImages/Rap/Kenny G.jpg',
            id: '7'
        }


    ]
    
}

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    if (Object.keys(AllMusics).includes(params.genre)) {
        return AllMusics[params.genre];
    }

    throw error(404, 'Not found');
}