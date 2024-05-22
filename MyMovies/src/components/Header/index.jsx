import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { Input } from "../Input";

import { Container, Search, Profile } from "./styles";

export function Header() {
  return (
    <>
      <Container>
        <p>MyMovies</p>

        <Search>
          <Input className="search" placeholder="Search by title" icon={MdSearch} />
        </Search>

        <Profile>
          <div>
            <strong>Brenno Eudes</strong>
            <Link to="/signin">Logout</Link>
          </div>

          <Link to="/profile">
            <img
              id="profile-img"
              src="https://github.com/brennoEudes.png"
              alt="GitHub profile image"
            />
          </Link>
        </Profile>
      </Container>
    </>
  );
}
