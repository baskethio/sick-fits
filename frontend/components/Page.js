import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'
import Header from './Header'

const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: 'radnika_next';
        src: url('/static/radnikanext-medium-webfont.woff2')
        format("woff2");
        font-weight: normal;
        font-style: normal;
    }
    html{
        --red: #ff0000;
        --black: #393939;
        --grey: #Bada55;
        --gray: var(--grey);
        --lightGrey: #e1e1e1;
        --lightGray: var(--lightGrey);
        --offWhite: #ededed;
        --maxWidth: 1000px;
        --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
        box-sizing: border-box;
    }
    *, *::before, *::after{
        box-sizing: inherit;
    }
    body{
        font-family: 'tadnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 0;
        margin: 0;
        font-style: 0.5rem;
        line-height: 2;
    }
    a{
        text-decoration: none;
        color:(--black);
    }
    a:hover{
        text-decoration: underline;
    }
    button{
        font-family: 'tadnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;

const InnerStyles = styled.div`
    max-width:var(--maxWidth);
    margin: 0 auto;
    padding: 2rem;
`

export default function Page({children}){
    return <>
    <GlobalStyles/>
    <Header />
    <InnerStyles>
    {children}
    </InnerStyles>
    </>
}

Page.propTypes = {
    children: PropTypes.any
}