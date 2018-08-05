import React from 'react'
import styled from 'styled-components'

const Footer = ({ links, children }) => (
    <FooterGroup>
        <Text>Tweet Something Something</Text>
        <Button>Tweet</Button>
        <LinkGroup>
            {links.map(link =>(
                <a href={link.node.url}>{link.node.title}</a>
            ))}
        </LinkGroup>
        <Copyright>{children}</Copyright>
    </FooterGroup>
)

export default Footer

const FooterGroup = styled.div`
    background: #F1F3F5;
    padding: 50px 0;
    display: grid;
    grid-gap: 20px;
`

const Text = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: #486791;
    max-width: 500px;
    margin: 0 auto;
`

const Button = styled.button`
    justify-self: center;
    color: white;
    border: none;
    background: linear-gradient(102.24deg, #9B51E0 0%, #3436E7 100%);
    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
    border-radius: 30px;
    font-size: 24px;
    padding: 16px 60px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:hover {
        box-shadow: 0 20px 40px rgba(0,0,0, 0.15);
        transform: translateY(-3px);
    }
`

const LinkGroup = styled.div`
    width: 500px;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    padding: 0 50px;
    box-sizing: border-box;

    a {
        transition: 1s;
    }

    a:hover {
        color: black;
    }
`

const Copyright = styled.div`
    color: #486791;
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;
`