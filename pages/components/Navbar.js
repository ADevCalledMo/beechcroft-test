import styled from "styled-components";
import Link from "next/link";

const Nav = styled.nav`
  height: 80px;
  background: none;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 50px 250px;
`;

const StyledLink = styled.a`
  padding: 0rem 2rem;
  font-size: 0.9rem;
  font-weight: 600;
`;

const StyledButton = styled.button`
  height: 40px;
  width: 120px;
  background-color: orange;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

// const DropdownContent = styled.div`
//   display: none;
//   position: absolute;
//   background-color: #f9f9f9;
//   min-width: 160px;
//   box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2)   <--- Dropdown Div
//   z-index: 1;

//   &:hover {
//     display: block;
//   }
// `;

const Navbar = () => {
  return (
    <Nav>
      <img src="/logo.svg" alt="chat" />
      <Link href="">
        <StyledLink>Homes for sale</StyledLink>
      </Link>
      <div>
        <Link href="">
          <StyledLink>Why Beechcroft?</StyledLink>
        </Link>
        {/* <DropdownContent>
          <a href="">Award-winning quality</a>
          <a href="">Estate management</a>
          <a href="">Family</a>
          <a href="">Healthihouse</a>         <------ unfinished Dropdown 
          <a href="">Pets welcome</a>
          <a href="">Testimonials</a>
          <a href="">Unrivalled luxury</a>
          <a href="">Download brochure</a>
        </DropdownContent> */}
      </div>
      <Link href="">
        <StyledLink>Moving house</StyledLink>
      </Link>
      <Link href="">
        <StyledLink>Retirement living</StyledLink>
      </Link>
      <Link href="">
        <StyledLink>Blog</StyledLink>
      </Link>
      <img src="/icon-search.svg" alt="search" />
      <strong>01491 825522</strong>
      <StyledButton>
        <strong>Get in touch</strong>
        <img src="/icon-arrow-right.svg" alt="right" />
      </StyledButton>
    </Nav>
  );
};

export default Navbar;
