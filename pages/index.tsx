import type {NextPage} from 'next'
import Zoom from "next-image-zoom";
import image1 from "../public/claudio-schwarz-UcBq34HGK4c-unsplash.jpg"
import image2 from "../public/pawel-czerwinski-tNVMMcZ_HlQ-unsplash.jpg"

const Home: NextPage = () => {
    return (
        <div style={{
            maxWidth: 1000,
            margin: "0 auto"
        }}>
            <h1>Blog post</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae enim itaque iusto nisi reprehenderit
                sapiente! Cumque dolorem fugiat inventore laudantium magni nobis odio praesentium sint tempora. Alias
                atque autem culpa!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis deserunt facilis nisi, nulla odio
                quia reiciendis similique soluta vero. A, accusantium aut beatae ea eveniet ipsam numquam quam quisquam
                rerum!<br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis deserunt facilis nisi, nulla odio
                quia reiciendis similique soluta vero. A, accusantium aut beatae ea eveniet ipsam numquam quam quisquam
                rerum!
            </p>

            <Zoom src={image2} layout={"responsive"} backgroundOpacity={1} zoomPercentage={100}
                  backgroundColor={"black"}/>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae enim itaque iusto nisi reprehenderit
                sapiente! Cumque dolorem fugiat inventore laudantium magni nobis odio praesentium sint tempora. Alias
                atque autem culpa!<br/><br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae enim itaque iusto nisi reprehenderit
                sapiente! Cumque dolorem fugiat inventore laudantium magni nobis odio praesentium sint tempora. Alias
                atque autem culpa!
            </p>

            <div style={{
                aspectRatio: "1 / 1",
                width: "500px",
                margin: "0 auto",
            }}>
                <Zoom src={image1} layout={"fill"} objectFit={"cover"} backgroundOpacity={.8} animationDuration={1000}/>
            </div>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae enim itaque iusto nisi reprehenderit
                sapiente! Cumque dolorem fugiat inventore laudantium magni nobis odio praesentium sint tempora. Alias
                atque autem culpa!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis deserunt facilis nisi, nulla odio
                quia reiciendis similique soluta vero. A, accusantium aut beatae ea eveniet ipsam numquam quam quisquam
                rerum!<br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis deserunt facilis nisi, nulla odio
                quia reiciendis similique soluta vero. A, accusantium aut beatae ea eveniet ipsam numquam quam quisquam
                rerum!
            </p>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae enim itaque iusto nisi reprehenderit
                sapiente! Cumque dolorem fugiat inventore laudantium magni nobis odio praesentium sint tempora. Alias
                atque autem culpa!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis deserunt facilis nisi, nulla odio
                quia reiciendis similique soluta vero. A, accusantium aut beatae ea eveniet ipsam numquam quam quisquam
                rerum!<br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis deserunt facilis nisi, nulla odio
                quia reiciendis similique soluta vero. A, accusantium aut beatae ea eveniet ipsam numquam quam quisquam
                rerum!
            </p>

        </div>
    )
}

export default Home
