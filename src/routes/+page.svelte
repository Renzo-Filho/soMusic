<script>
    import Footer from "./footer.svelte";
    import Slider from "./slider.svelte";

    var cardImages = [
        { src: "./Cards/rock.jpg", type: "ROCK INTERNACIONAL", path: 'rockInt', id: 0 },
        { src: "./Cards/rock_br.jpg", type: "ROCK NACIONAL", path: 'rockNac', id: 1 },
        { src: "./Cards/mpb.png", type: "MPB", path: 'mpb', id: 2 },
        { src: "./Cards/rap.jpg", type: "RAP", path: 'rap', id: 3 },
        { src: "./Cards/sertanejo.png", type: "SERTANEJO", path: 'sertanejo', id: 4 },
        { src: "./Cards/jazz.png", type: "JAZZ", path: 'jazz', id: 5 },
        { src: "./Cards/classica.png", type: "MÚSICA CLÁSSICA", path: 'classica', id: 6 },
        { src: "./Cards/bossaNova.jpg", type: "BOSSA NOVA", path:'bossanova', id: 7 },
        { src: "./Cards/pagode.png", type: "PAGODE E SAMBA", path:'pagode', id: 8 },
        { src: "./Cards/forro.png", type: "FORRÓ E PISEIRO", path: 'forro_piseiro', id: 9 },
        { src: "./Cards/Pop.png", type: "POP", path: 'pop', id: 10 },
        { src: "./Cards/blues.jpg", type: "BLUES", path: 'blues', id: 11 }
    ];
    
</script>


<main>
    <Slider/>
    <div class="row">
        {#each cardImages as cardImage (cardImage.id)}
            <a href= {`/musics/${cardImage.path}`}>
                <div class="col s3">
                    <div class="container-card box">
                        <div class="card">
                            <div
                                class="card-image waves-effect waves-block waves-light"
                            >
                                <img src={cardImage.src} alt="error" />
                            </div>
                        </div>
                        <div class="card-content">
                            <p>{cardImage.type}</p>
                        </div>
                    </div>
                </div>
            </a>
        {/each}
    </div>
    <Footer/>
</main>

<style>
    main {
        background-image: url(wall2.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 125vh;
        padding-top: 15px;
    }

    /* .row {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 5%;
    } */

    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: white;
        text-align: center;
        margin-top: 6%;
    }

    .card-content {
        text-align: center;
    }

    .container-card {
        background-color: rgba(107, 95, 94, 0.3);
        border-radius: 5px;
        height: 310px;
        width: 325px;
        margin: 15px;
    }

    .box {
        border: 0px solid white;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.35);
        transition: transform 0.6s ease-in-out;
        transition: box-shadow 0.2s ease-in-out;
        transition-duration: 0.6s;
    }

    .box:hover {
        border: 0px solid black;
        transform: scale(1.1);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.6);
        transition-duration: 0s;
    }
</style>
