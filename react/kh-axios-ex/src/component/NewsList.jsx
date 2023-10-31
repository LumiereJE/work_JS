import styled from "styled-components";
import NewsItem from "./NewsItems";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3em;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100px;
    padding-left: 1em;
    padding-right: 1em;
  }
`;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // 데이터 가져올때 로딩 걸어줌 → 데이터 가져오면 로딩 풀어줌
    const fetchData = async () => {
      setLoading(true);

      // status가 ok이면(로딩되면) article 부분만 data를 뽑아내는것임
      try {
        const query = category === "all" ? "all" : `category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr&${query}&apiKey=9db452727b59490bb204eae033a3eba1`
        );
        if (response.data.status === "ok") setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData(); // 함수 불러줌
  }, [category]);

  if (loading) {
    return <Loading />;
  }

  return (
    <NewsListBlock>
      {articles &&
        articles.map((article) => (
          <NewsItem key={article.url} article={article} />
        ))}
    </NewsListBlock>
  );
};

export default NewsList;
