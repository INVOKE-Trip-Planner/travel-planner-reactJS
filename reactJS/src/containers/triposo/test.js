import React from 'react';
import { ARTICLES } from './dummy';
import { Button, Container } from 'reactstrap';
import * as api from "../../api";
import { getHeader } from "../../api/helper";
import axios from "axios";
import TriposoResultCard from '../../components/cards/triposoResultCard';
import { SearchArticlesInput } from '../../components/forms/trips/components';
import { PRIMARY_COLOR_FONT } from '../../common/styles';

const sample_response = require('./real_dummy_data.json');

const TriposoArticle = props => {

    // const articles = ARTICLES
    const [articles, setArticles] = React.useState(null); //sample_response);

    // const handleSubmit = (data) => {
    //         setArticles(null);
    //         setArticles(data);
    // }

    const renderArticles = () => {
        return articles && articles.results && articles.results.map(result => {
            return (
                <TriposoResultCard 
                    {...result}
                />
            )
        })
    }
    return (
        <Container
            fluid="xl"
            style={{
                minHeight: '100vh',
            }}
        >
            <div
                style={{
                    minHeight: articles ? 150 : '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: 'all 1s ease-out',
                }}
            >
                <h1
                    style={{
                        marginBottom: 50,
                        display: articles ? 'none' : 'initial',
                        transition: 'all 1s ease-out',
                    }}
                >
                    Trip<span style={PRIMARY_COLOR_FONT}>Bantu</span>
                </h1>
                <SearchArticlesInput 
                    handleSubmit={setArticles}
                />
            </div>
            
            {/* <Button 
                color="primary"
                onClick={ handleClick }
            >
                Get Articles    
            </Button> */}
            { renderArticles() }
        </Container>
    )
}

export default TriposoArticle;