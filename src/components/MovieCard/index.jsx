import stars from "../../assets/stars.svg";
import { Tag } from "../Tag";
import { Container } from "./styles";

export function MovieCard({ data, ...rest }) {
  return (
    <>
      <Container {...rest}>
        <main>
          <movie-title>
            <h2>{data.title}</h2>
            <img src={stars} alt="stars rating" />
          </movie-title>
          <p>{data.article}</p>

          {/* Aqui, o "map" é usado COM chaves {} em torno do corpo da função de callback. Nesse caso, é necessário explicitamente usar a instrução RETURN para retornar o resultado da expressão dentro da função de callback.  */}
          {data.tags && (
            <footer>
              {data.tags.map((tag) => {
                return <Tag key={tag.id} title={tag.name} className="moviecard-tag" />;
              })}
            </footer>
          )}

          {/* Formato do exercício da aula:
          O "map" é usado com uma sintaxe de arrow function SEM chaves {}. Assim, o resultado da expressão dentro da arrow function será retornado automaticamente.
          {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )} */}
        </main>
      </Container>
    </>
  );
}
