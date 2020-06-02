import React from 'react';

import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from '../../pages/homepage/homepage.styles';
import './homepage.styles.scss';

const HomePage = () => (
    <HomePageContainer>
        <Directory />
    </HomePageContainer>
    
);

export default HomePage;