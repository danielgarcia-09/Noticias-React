import { useEffect, useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Form from "./components/Form";
import Header from "./components/Header";
import NewsList from "./components/NewsList";

function App() {

  //* Define category
  const [ category, updateCategory ] = useState('');

  //* News state
  const [ news, updateNews ] = useState([]);
  useEffect(()=>{
    const API = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=f88834de927f45d59ac21d85d2694506`;

      const resp = await fetch(url);
      const news = await resp.json();

      updateNews(news.articles);
    }
    API();
  },[category])

  return (
    <Fragment>
      <Header title="Buscador de Noticias" />

      <div className="container white">
        <Form
          updateCategory={updateCategory}
        />

        <NewsList
          news={news}
        />
      </div>
    </Fragment>
  );
}

export default App;
