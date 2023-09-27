import styled from 'styled-components';

export const MainMenuContainer = styled.nav`
    ul {
        list-style: none;
        display: flex;
        justify-content: space-around;
        padding: 0;
       
        li {
            cursor: pointer;
            display: inline-block;
            margin: 0 10px;
        }
    }
`;