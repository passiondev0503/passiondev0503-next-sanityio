import React from 'react';
import styled from 'styled-components';

import Page from '../components/page';
import {column} from '../styles/mixins';
import {spacing} from '../styles/vars';
import Nav from '../components/nav';
import Timeline from '../components/timeline';

const Main = styled.main`
    display: flex;
    flex: 1;
`;

const Content = styled.div`
    ${column}
    margin-bottom: ${spacing.normal};
    padding: ${spacing.normal};
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Subtitle = styled.h2`
    text-align: center;
    font-style: italic;
    margin: 0;
    color: ${(props) => props.theme.accent};
    letter-spacing: 0.03;
`;

const Title = styled.h1`
    display: initial;
    font-size: 1.65em;
    text-align: center;
    line-height: 1.35;
    font-weight: bold;
    margin: 0 auto;
    background-image: linear-gradient(120deg, #2ec7c0 0%, #1a86e4 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 100%;

    @media (min-width: 737px) {
        font-size: 2.3em;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px 0;

    @media (min-width: 737px) {
        padding: 30px 0 80px;
    }
`;

const Details = styled.div`
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
    margin-bottom: ${spacing.large};
`;

const description = 'Developer, writer, and UI/UX enthusiast.';

const Index = () => (
    <Page
        description={description}
        image={'/static/images/speaking/speaking.jpg'}
        title={`Lee Robinson - ${description}`}
    >
        <Nav />
        <Main>
            <Content>
                <Container>
                    <Subtitle>{description}</Subtitle>
                    <Title>{'Lee Robinson'}</Title>
                </Container>
                <Details>{`Welcome to my personal slice of the internet 👋🏼 Here you'll find everything you want to know about me - blog posts, work history, projects, contact information, and more!`}</Details>
            </Content>
        </Main>
        <Timeline />
    </Page>
);

export default Index;
