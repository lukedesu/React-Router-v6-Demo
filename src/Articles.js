import { useParams, Link } from "react-router-dom";

const Article = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "1rem" }}>
      <p>article content {id}</p>
      <p>Other Articles:</p>
      <ul>
        <li>
          <Link to="/articles/1">Article 1</Link>
        </li>
        <li>
          <Link to="/articles/2">Article 2</Link>
        </li>
        <li>
          <Link to="/articles/3">Article 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Article;
