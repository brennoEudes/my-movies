import { Link } from "react-router-dom";
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
            <Link to="/signin">Logout</Link>
          </div>

          <Link to="/profile">
            <img id="profile-img"
              src="https://github.com/brennoEudes.png"
              alt="GitHub profile image"
            />
          </Link>
        </Profile>
      </Container>
    </>
  );
}
