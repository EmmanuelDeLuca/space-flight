import React from "react";
import "./styles/App.css";
import { NavBar } from "./components/Navbar/NavBar";
import { Article } from "./components/Article/Article";

import imageRetrato from "./assets/images/retrato.jpg";
import imageDias from "./assets/images/dias.jpg";
import imageDashboard from "./assets/images/dashboard.jpg";
import { Footer } from "./components/Footer/Footer";

export class App extends React.Component {
  // Método responsável por renderizar o conteúdo HTML do componente
  render() {
    return (
      <>
        <NavBar />

        <section id="articles">
          <Article
            title="Designing Dashboards"
            provider="NASA"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum itaque quo dicta natus odio veritatis, sint optio consequatur. Quidem porro impedit odit aspernatur optio voluptatibus animi blanditiis illum, aliquam doloremque?"
            imageNoticia={imageDashboard}
          />
          <Article
            title="Vibrant Portraits of 2020"
            provider="Space News"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eveniet facere sapiente, numquam assumenda nam unde debitis perspiciatis! Doloremque eveniet facere beatae laboriosam et totam maiores quasi, sint sunt repellendus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, voluptas? Laboriosam, obcaecati fuga libero molestias pariatur voluptate impedit, temporibus eos nulla inventore incidunt fugiat facilis eveniet, repudiandae voluptas exercitationem ratione."
            imageNoticia={imageRetrato}
          />
          <Article
            title="360 Days of Malayalam type"
            provider="Space Flight Now"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perspiciatis corrupti deserunt qui commodi quam alias placeat eos. Libero quod illo a labore velit porro soluta laboriosam asperiores repellat qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea odit amet numquam accusantium culpa voluptatibus architecto veniam vitae quas tempore vero autem non sint, nulla neque explicabo ratione dolore? Suscipit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo omnis obcaecati consequuntur dolores, ad incidunt repellendus officiis dolor tenetur necessitatibus molestiae, quasi ullam asperiores nesciunt sequi earum culpa veniam voluptas?"
            imageNoticia={imageDias}
          />
          <Article
            title="Designing Dashboards"
            provider="NASA"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum itaque quo dicta natus odio veritatis, sint optio consequatur. Quidem porro impedit odit aspernatur optio voluptatibus animi blanditiis illum, aliquam doloremque?"
            imageNoticia={imageDashboard}
          />
        </section>
        <Footer />
      </>
    );
  }
}
