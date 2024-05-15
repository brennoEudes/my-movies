import { Container, Search, Profile } from "./styles";

export function Header() {
  return (
    <>
      <Container>
        <p>MyMovies</p>
        <Search>
          <p>Search by title</p>
        </Search>
        <Profile>
          <div>
            <strong>Brenno Eudes</strong>
            <span>sair</span>
          </div>

          <img
            src="https://github.com/brennoEudes.png"
            alt="GitHub profile image"
          />
        </Profile>
      </Container>
    </>
  );
}
