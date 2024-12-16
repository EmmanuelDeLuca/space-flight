import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { NavBar } from "./components/Navbar/NavBar";
import { Article } from "./components/Article/Article";
import { Footer } from "./components/Footer/Footer";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

export function App() {
  // Método responsável por renderizar o conteúdo HTML do componente

  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const response = await axios.get(
        "https://api.spaceflightnewsapi.net/v4/articles"
      );
      const newsData = response.data;

      setNews(newsData.results);
    }

    loadNews();
  }, []);

  return (
    <>
      <NavBar />

      <section id="articles">
        {news.length === 0 ? (
          <div style={{height: '400px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <ThreeDots
              height={80}
              width={80}
              radius={9}
              color={"white"}
              ariaLabel={"loading"}
              wrapperStyle={{ marginTop: "20px", display: "flex" }} // Correção aqui
              wrapperClass="spinner-class" // Classe CSS
            />
          </div>
        ) : (
          news.map((article) => {
            return (
              <Article
                key={article.id}
                title={article.title}
                provider={article.news_site}
                description={article.summary}
                imageNoticia={article.image_url}
              />
            );
          })
        )}
      </section>
      <Footer />
    </>
  );
}
