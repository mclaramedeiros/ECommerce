import React from 'react';
import styled from 'styled-components';
// import Button from '@mui/material/Button';
import { Search } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Container = styled.div`
  height: 60px;
  //   background-color: black;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const Input = styled.input`
  border: none;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            {/* <Button variant="contained" color="secondary"> */}
              <Search style={{ fontSize: 16 }} />
            {/* </Button> */}
          </SearchContainer>
        </Left>
        <Center>
          <Logo>HOBI.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartIcon color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
