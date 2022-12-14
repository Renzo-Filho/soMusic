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
            artist: "Legi??o Urbana",
            src: "../Musics/RockNac/Legi??o Urbana - Tempo perdido.mp3",
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
            title: "Bete Balan??o",
            artist: "Bar??o Vermelho",
            src: "../Musics/RockNac/Bar??o Vermelho - Bete Balan??o.mp3",
            img: "../MusicImages/RockNac/barao.jpeg",
            id: "2",
        },

        {
            title: "Pra Dizer Adeus",
            artist: "Tit??s",
            src: "../Musics/RockNac/Tit??s - Pra Dizer Adeus.mp3",
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

    mpb: [
        {
            title: "All Star",
            artist: "Nando Reis",
            src: "../Musics/MPB/Nando Reis - All Star (Clipe Oficial).mp3",
            img: "../MusicImages/MPB/nandoReis.png",
            id: "0",
        },

        {
            title: "Admir??vel Mundo Novo",
            artist: "Z?? Ramalho",
            src: "../Musics/MPB/Z??_Ramalho_Admir??vel_Gado_Novo.mp3",
            img: "../MusicImages/MPB/zeRamalho.jpg",
            id: "1",
        },

        {
            title: "Se...",
            artist: "Djavan",
            src: "../Musics/MPB/Djavan_Se_Ao_Vivo.mp3",
            img: "../MusicImages/MPB/djavan.jpg",
            id: "2",
        },

        {
            title: "N??o Quero Dinheiro (S?? Quero Amar)",
            artist: "Tim Maia",
            src: "../Musics/MPB/Tim Maia - N??o Quero Dinheiro (S?? Quero Amar).mp3",
            img: "../MusicImages/MPB/timMaia.jpg",
            id: "3",
        },

        {
            title: "Malandragem",
            artist: "C??ssia Eller",
            src: "../Musics/MPB/C??ssia Eller - Malandragem (Ao Vivo).mp3",
            img: "../MusicImages/MPB/cassiaEller.jpg",
            id: "4",
        },

        {
            title: "L??grimas E Chuva",
            artist: "Kid Abelha",
            src: "../Musics/MPB/Kid Abelha - L??grimas E Chuva (Ao Vivo).mp3",
            img: "../MusicImages/MPB/kidAbelha.png",
            id: "5",
        },

        {
            title: "Anuncia????o",
            artist: "Alceu Valen??a",
            src: "../Musics/MPB/Alceu Valenca - Anuncia????o.mp3",
            img: "../MusicImages/MPB/alceuValenca.png",
            id: "6",
        },

        {
            title: "Apenas Um Rapaz Latino Americano",
            artist: "Belchior",
            src: "../Musics/MPB/Belchior - Apenas Um Rapaz Latino Americano.mp3",
            img: "../MusicImages/MPB/belchior.png",
            id: "7",
        },
    ],

    pagode: [
        {
            title: 'Falta Voc??',
            artist: 'Tiaguinho',
            src: '../Musics/Pagode/Thiaguinho - Falta Voc?? (Infinito Vol. 2) [V??deo Oficial].mp3',
            img: '../MusicImages/Pagode/Falta voc??_.jpg',
            id: '0'
        },

        {
            title: 'Amor e F??',
            artist: 'Grupo Pixote e Hungria',
            src: '../Musics/Pagode/Amor e F?? - Grupo Pixote  Hungria -  [Pixote House Music] EP.02.mp3',
            img: '../MusicImages/Pagode/Amor e f??_.jpg',
            id: '1'
        },
        {
            title: 'Nossa Vida Parou',
            artist: 'Ferrugem',
            src: '../Music/Pagode/Ferrugem - Nossa Vida Parou.mp3',
            img: '../MusicImages/Pagode/Nossa vida parou_.jpg',
            id: '2'
        },
        {
            title: 'S??bado E Domingo',
            artist: 'Felipe Ara??jo e Thiaguinho',
            src: '../Music/Pagode/S??bado E Domingo.mp3',
            img: '../MusicImages/Pagode/S??bado e domingo_.jpg',
            id: '3'
        },

        {
            title: 'P??dio',
            artist: 'Dilsinho e Jorge Mateus',
            src: '../Music/Pagode/Dilsinho, Jorge  Mateus - P??dio (Garrafas e Bocas).mp3',
            img: '../MusicImages/Pagode/Podio_.jpg',
            id: '4'
        },

        {
            title: 'Mensagem Apagada ',
            artist: 'Dilsinho, Sorriso Maroto',
            src: '../Music/Pagode/Dilsinho, Sorriso Maroto - Mensagem Apagada (Clipe Oficial).mp3',
            img: '../MusicImages/Pagode/Mensagem apagada_.jpg',
            id: '5'
        },

        {
            title: 'Cachorrinho',
            artist: 'Ferrugem',
            src: '../Music/Pagode/Ferrugem - Cachorrinho ( Clipe Oficial).mp3',
            img: '../MusicImages/Pagode/Cachorrinho_.jpg',
            id: '6'
        },

        {
            title: 'Nosso Amor Quer Paz',
            artist: 'P??ricles e Marvvila',
            src: '../Music/Pagode/P??ricles e Marvvila  Nosso Amor Quer Paz - Pagode Do Peric??o II (Video Oficial).mp3',
            img: '../MusicImages/Pagode/Nosso amor quer paz_.jpg',
            id: '7'
        },
    ],

    bossanova: [
        {
            title: 'Garota de Ipanema',
            artist: 'Tom Jobim',
            src: '../Music/Bossa/Garota De Ipanema.mp3',
            img: '../MusicImages/Bossa/garota.jpg',
            id: '0'
        },

        {
            title: 'Pela Luz dos Olhos Teus',
            artist: 'Mi??cha, Tom Jobim',
            src: '../Music/Bossa/Mi??cha, Tom Jobim - Pela Luz dos Olhos Teus (Pseudo V??deo).mp3',
            img: '../MusicImages/Bossa/luz.jpg',
            id: '1'
        },

        {
            title: 'Desafinado',
            artist: 'Jo??o Gilberto, Tom Jobim, Stan Getz',
            src: '../Music/Bossa/Desafinado - Jo??o Gilberto, Tom Jobim, Stan Getz.mp3',
            img: '../MusicImages/Bossa/desafiado.jfif',
            id: '2'
        },

        {
            title: ' Aguas de Mar??o',
            artist: 'Elis Regina  Tom Jobim',
            src: '../Music/Bossa/Elis Regina  Tom Jobim -  Aguas de Mar??o - 1974.mp3',
            img: '../MusicImages/Bossa/aguas.jfif',
            id: '3'
        },

        {
            title: 'Chega De Saudade',
            artist: 'Tom Jobim',
            src: '../Music/Bossa/Chega De Saudade.mp3',
            img: '../MusicImages/Bossa/chega.jfif',
            id: '4'
        },

        {
            title: 'Ela ?? Carioca',
            artist: 'Antonio Carlos Jobim',
            src: '../Music/Bossa/Antonio Carlos Jobim - Ela ?? Carioca.mp3',
            img: '../MusicImages/Bossa/ela.jfif',
            id: '5'
        },

        {
            title: 'Insensatez',
            artist: 'Tom Jobim',
            src: '../Music/Bossa/Insensatez - Tom Jobim.mp3',
            img: '../MusicImages/Bossa/insensatez.jfif',
            id: '6'
        },

        {
            title: 'Samba Do Avi??o',
            artist: 'Gal Costa',
            src: '../Music/Bossa/Samba Do Avi??o.mp3',
            img: '../MusicImages/Bossa/sambaNota.jfif',
            id: '7'
        },
    ],

    blues: [
        {
            title: 'Cross Road Blues',
            artist: 'Robert Johnson',
            src: '../Musics/Blues/Blues/Cross Road Blues - Robert Johnson (1936).mp3',
            img: '../MusicImages/Blues/1.jpg',
            id: '0'
        },

        {
            title: 'Muddy Waters',
            artist: 'Manish Boy',
            src: '../Musics/Blues/Muddy Waters plays Manish Boy.mp3',
            img: '../MusicImages/Blues/2.jfif',
            id: '1'
        },

        {
            title: 'Howlin Wolf',
            artist: ' Spoonful',
            src: '../Musics/Blues/Howlin Wolf - Spoonful.mp3',
            img: '../MusicImages/Blues/3.jfif',
            id: '2'
        },

        {
            title: 'x Baby, Please Dont Goxxx',
            artist: 'John Lee Hooker',
            src: '../Musics/Blues/John Lee Hooker - Baby, Please Dont Go (1959).mp3',
            img: '../MusicImages/Blues/4.jfif',
            id: '3'
        },

        {
            title: 'Keep It To Your Self',
            artist: 'Sonny II',
            src: '../Musics/Blues/Sonny II - Keep It To Your Self.mp3',
            img: '../MusicImages/Blues/5.jfif',
            id: '4'
        },

        {
            title: 'Pearline',
            artist: 'Son House',
            src: '../Musics/Blues/Son House - Pearline.mp3',
            img: '../MusicImages/Blues/6.jpg',
            id: '5'
        },

        {
            title: 'Where Did you Sleep Last Night',
            artist: 'Leadbelly',
            src: '../Musics/Blues/Leadbelly - Where Did you Sleep Last Night.mp3',
            img: '../MusicImages/Blues/7.jfif',
            id: '6'
        },

        {
            title: 'Me And The Devil Blues',
            artist: 'Robert Johnson',
            src: '../Musics/Blues/Robert Johnson - Me And The Devil Blues (Legendado) HD.mp3',
            img: '../MusicImages/Blues/8.jfif',
            id: '7'
        },
    ],

    rap: [
        {
            title: '777-666',
            artist: 'Matu??',
            src: '../Musics/Rap/Matu?? - 777-666.mp3',
            img: '../MusicImages/Rap/777-666.jpg',
            id: '0'
        },
        {
            title: 'M??quina do Tempo',
            artist: 'Matu??',
            src: '../Musics/Rap/Matu?? - M??quina do Tempo.mp3',
            img: '../MusicImages/Rap/Maquina do tempo.png',
            id: '1'
        },
        {
            title: 'A Morte do Tempo',
            artist: 'Matu??',
            src: '../Musics/Rap/Matu?? - A Morte do Autotune.mp3',
            img: '../MusicImages/Rap/Morte do autotune.jpg',
            id: '2'
        },
        {
            title: '?? sal',
            artist: 'Matu??',
            src: '../Musics/Rap/Matu?? - ?? sal.mp3',
            img: '../MusicImages/Rap/?? sal.jpg',
            id: '3'
        },
        {
            title: 'Jovens do Reggae',
            artist: 'Kawe e Wiu',
            src: '../Musics/Rap/Kawe e Wiu - Jovens do Reggae.mp3',
            img: '../MusicImages/Rap/Jovens do Reggae.jpg',
            id: '4'
        },
        {
            title: 'Balazul',
            artist: 'Teto & Mateca',
            src: '../Musics/Rap/Teto & Mateca - Balazul.mp3',
            img: '../MusicImages/Rap/Balazul.jpg',
            id: '5'
        },
        {
            title: 'M4',
            artist: 'Teto',
            src: '../Musics/Rap/Teto - M4 feat. Matu??.mp3',
            img: '../MusicImages/Rap/M4.jpg',
            id: '6'
        },
        {
            title: 'Kenny G',
            artist: 'Matu??',
            src: '../Musics/Rap/Matu?? - kenny G.mp3',
            img: '../MusicImages/Rap/Kenny G.jpg',
            id: '7'
        }
    ],

    pop: [
        {
            title: 'Barking',
            artist: 'Ramz',
            src: '../Musics/POP/Ramz - Barking.mp3',
            img: '../MusicImages/Pop/Barking.jpg',
            id: '0'
        },
        {
            title: 'Holiday',
            artist: 'Lil Nas X',
            src: '../Musics/POP/HOLIDAY.mp3',
            img: '../MusicImages/Pop/Holiday.jpg',
            id: '1'
        },
        {
            title: 'Industry Baby',
            artist: 'Lil Nas X',
            src: '../Musics/POP/Lil Nas X - Industry Baby ft. Jack Harlow.mp3',
            img: '../MusicImages/Pop/Industry Baby.jpg',
            id: '2'
        },
        {
            title: 'Lalala',
            artist: 'Y2K, bbno$',
            src: '../Musics/POP/Lalala.mp3',
            img: '../MusicImages/Pop/Lalala.jpg',
            id: '3'
        },
        {
            title: 'Life After Salem',
            artist: 'Lil Nas X',
            src: '../Musics/POP/life after salem - lil nas x.mp3',
            img: '../MusicImages/Pop/Life After Salem.jpg',
            id: '4'
        },
        {
            title: 'Montero',
            artist: 'Lil Nas X',
            src: '../Musics/POP/MONTERO(Call Me By Your Name).mp3',
            img: '../MusicImages/Pop/Montero.jpg',
            id: '5'
        },
        {
            title: 'Tales of Dominica',
            artist: 'Lil Nas X',
            src: '../Musics/POP/TALES OF DOMINICA.mp3',
            img: '../MusicImages/Pop/Tales of Dominica.jfif',
            id: '6'
        },
        {
            title: 'Thats What I Want',
            artist: 'Lil Nas X',
            src: '../Musics/POP/Lil Nas X - THATS WHAT I WANT.mp3',
            img: '../MusicImages/Pop/Thats What I Want.jpg',
            id: '7'
        }
    ],

    sertanejo: [
        {
            title: 'Facas',
            artist: 'Diego & Victor Hugo e Bruno & Marrone',
            src: '../Musics/facas.mp3',
            img: '../MusicImages/Sertanejo/facas.jpg',
            id: '0'
        },

        {
            title: 'Molhando o Volante',
            artist: 'Jorge & Mateus',
            src: '../Musics/Jorge & Mateus - Molhando o Volante.mp3',
            img: '../MusicImages/Sertanejo/molhandoovolante.jpg',
            id: '1'
        },

        {
            title: 'Seu Perfil',
            artist: 'Henrique & Juliano',
            src: '../Musics/Henrique e Juliano -  SEU PERFIL - DVD Manifesto Musical.mp3',
            img: '../MusicImages/Sertanejo/seuperfil.jpg',
            id: '2'
        },

        {
            title: 'Termina Comigo Antes',
            artist: 'Gustavo Lima',
            src: '../Musics/Gusttavo Lima - Termina Comigo Antes  (Ao Vivo em Porto Alegre).mp3',
            img: '../MusicImages/Sertanejo/terminacomigoantes.jpg',
            id: '3'
        },

        {
            title: 'Foi Voc?? Quem Trouxe',
            artist: 'Luana Prado',
            src: '../Musics/Lauana Prado - Foi Voc?? Quem Trouxe (Ao Vivo).mp3',
            img: '../MusicImages/Sertanejo/foivoc??quemtrouxe.jpg',
            id: '4'
        },

        {
            title: 'Expectativa vc Realidade',
            artist: 'Matheus & Kauan',
            src: '../Musics/Matheus & Kauan - Expectativa x Realidade.mp3',
            img: '../MusicImages/Sertanejo/expectativa_vs_realidade.jpg',
            id: '5'
        },

        {
            title: 'Bem pior que eu',
            artist: 'Mar??lia Mendon??a',
            src: '../Musics/Mar??lia Mendon??a - BEM PIOR QUE EU.mp3',
            img: '../MusicImages/Sertanejo/bem pior que eu.jpg',
            id: '6'
        },

        {
            title: 'Clone',
            artist: 'J??lio & C??zar',
            src: '../Musics/J??nior e C??zar - CLONE - EP Provou, Gostou.mp3',
            img: '../MusicImages/Sertanejo/clone.jpg',
            id: '7'
        }
    ],

    jazz: [
        {
            title: 'Its Only A Paper Moon',
            artist: 'Morgana King',
            src: '../Musics/JAZZ/Morgana King - Its Only A Paper Moon.mp3',
            img: '../MusicImages/Jazz/1.jfif',
            id: '0'
        },

        {
            title: 'What a Little Moonlight can do',
            artist: ' Billie Holiday',
            src: '../Musics/JAZZ/What a Little Moonlight can do -- Billie Holiday 1935.mp3',
            img: '../MusicImages/Jazz/2.jfif',
            id: '1'
        },

        {
            title: 'Blue Moon',
            artist: 'Ella Fitzgerald',
            src: '../Musics/JAZZ/Blue Moon - Ella Fitzgerald.mp3',
            img: '../MusicImages/Jazz/3.jfif',
            id: '2'
        },

        {
            title: 'Moonlight Serenade',
            artist: 'Glenn Miller',
            src: '../Musics/JAZZ/Moonlight Serenade.mp3',
            img: '../MusicImages/Jazz/4.jfif',
            id: '3'
        },

        {
            title: 'How High the Moon',
            artist: 'Dave Brubeck',
            src: '../Musics/JAZZ/Dave Brubeck_How High the Moon.mp3',
            img: '../MusicImages/Jazz/5.jfif',
            id: '4'
        },

        {
            title: 'Moonlight in Vermont',
            artist: 'Betty Carter  Ray Bryant',
            src: '../Musics/JAZZ/Betty Carter  Ray Bryant Moonlight in Vermont.mp3',
            img: '../MusicImages/Jazz/6.webp',
            id: '5'
        },

        {
            title: 'Old Devil Moon',
            artist: 'Frank Sinatra',
            src: '../Musics/JAZZ/Old Devil Moon.mp3',
            img: '../MusicImages/Jazz/7.jfif',
            id: '6'
        },

        {
            title: 'Fly Me To The Moon',
            artist: 'Frank Sinatra and Count Basie',
            src: '../Musics/JAZZ/Fly Me To The Moon  Frank Sinatra and Count Basie.mp3',
            img: '../MusicImages/Jazz/8.jpg',
            id: '7'
        },
    ],

    classica: [
        {
            title: 'Sinfonia do Destino',
            artist: 'Beethoven',
            src: '../Musics/Classica/Beethoven-Quinta sinfonia Sinfonia do Destino.mp3',
            img: '../MusicImages/Classica/Beethoven_.jpg',
            id: '0'
        },

        {
            title: 'Carl Orff',
            artist: 'Carmina Burana',
            src: '../Musics/Classica/Carmina Burana - Carl Orff.mp3',
            img: '../MusicImages/Classica/Carl_Orff.jpg',
            id: '1'
        },


        {
            title: 'Entrada dos gladiadores',
            artist: 'Fucik',
            src: '../Musics/Classica/Entry Of The Gladiators - Julius Fucik.mp3',
            img: '../MusicImages/Classica/Fucik.jpg',
            id: '2'
        },

        {
            title: 'O Barbeiro de Sevilha',
            artist: 'Gioachinoimg',
            src: '../Musics/Classica/O Barbeiro de Sevilha; Rossini.mp3',
            img: '../MusicImages/Classica/gioachinoimg.jpg',
            id: '3'
        },

        {
            title: 'Pequena Serenata',
            artist: 'Mozart',
            src: '../Musics/Classica/Mozart   Pequena Serenata Noturna.mp3',
            img: '../MusicImages/Classica/Mozart.jpg',
            id: '4'
        },

        {
            title: 'Orpheus',
            artist: 'Orff',
            src: '../Musics/Classica/OFFENBACH  Orpheus in the Underworld Galop Infernal [HD].mp3',
            img: '../MusicImages/Classica/Orff Carl.jpg',
            id: '5'
        },

        {
            title: 'Piano trio',
            artist: 'Tchaikovisky',
            src: '../Musics/Classica/Tchaikovsky Piano trio em L?? Menor.mp3',
            img: '../MusicImages/Classica/Tchaikovsky_.jpg',
            id: '6'
        },

        {
            title: 'Quatro esta????es',
            artist: 'Vivaldi',
            src: '../Musics/Classica/As Quatro Esta????es (A Primavera -  Ant??nio Vivaldi) A Primavera Disney Fantasia.mp3',
            img: '../MusicImages/Classica/Vivaldi.jpg',
            id: '7'
        }
    ],

    forro_piseiro: [
        {
            title: 'No Ouvidinho',
            artist: 'Felipe Amorim',
            src: '../Musics/Forro/Felipe Amorim - No Ouvidinho.mp3',
            img: '../MusicImages/Forro/Noouvidinho.jpg',
            id: '0'
        },

        {
            title: 'Cominuca????o FalhouS',
            artist: 'Mari Fernandez e Nattan',
            src: '../Musics/Forro/Mari Fernandez - COMUNICA????O FALHOU feat. Nattan (DVD Ao Vivo em Fortaleza).mp3',
            img: '../MusicImages/Forro/Comunica????o_falhou.jpg',
            id: '1'
        },

        {
            title: 'Dengo',
            artist: 'Jo??o Gomes',
            src: '../Musics/Forro/Jo??o Gomes - Dengo.mp3',
            img: '../MusicImages/Forro/dengo.jpg',
            id: '2'
        },

        {
            title: 'Balan??o da Rede',
            artist: 'Matheus Fernandes e Xand Avi??o ',
            src: '../Musics/Forro/Matheus Fernandes e Xand Avi??o - Balan??o da Rede (Clipe Oficial).mp3',
            img: '../MusicImages/Forro/balan??o_na_rede.jpg',
            id: '3'
        },

        {
            title: 'Meu Mel',
            artist: 'Z?? Vaqueiro',
            src: '../Musics/Forro/Meu Mel - Z?? Vaqueiro (V??deo Oficial) (128 kbps).mp3',
            img: '../MusicImages/Forro/meu_mel.jpg',
            id: '4'
        },

        {
            title: 'Coisas do Interior',
            artist: 'Z?? Vaqueiro',
            src: '../Musics/Forro/COISAS DO INTERIOR - Z?? VAQUEIRO (V??deo Oficial) (128 kbps) (1).mp3',
            img: '../MusicImages/Forro/interior.jpg',
            id: '5'
        },

        {
            title: '??udio Que Te Entrega',
            artist: 'L??o Santana, MC Don Juan e Mari Fernandez',
            src: '../Musics/Forro/??udio Que Te Entrega - Lyric Video _ L??o Santana, MC Don Juan, Mari Fernandez (128 kbps).mp3',
            img: '../MusicImages/Forro/audio_que_te_entrega.jpg',
            id: '6'
        },

        {
            title: 'Tem cabar?? essa noite',
            artist: 'Nivaldo Marques e Nattan',
            src: '../Musics/Forro/Tem cabar?? essa noite - Nivaldo Marques _ Nattan (Clipe Oficial) (128 kbps).mp3',
            img: '../MusicImages/Forro/tem_cabare_essa_noite.jpg',
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