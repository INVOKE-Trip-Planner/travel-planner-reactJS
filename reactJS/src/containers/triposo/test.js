import React from 'react';
import { ARTICLES } from './dummy';
import { Button, Container } from 'reactstrap';
import * as api from "../../api";

const TriposoArticle = props => {

    // const articles = ARTICLES
    const [articles, setArticles] = React.useState(ARTICLES);

    const handleClick = async () => {
        const {response, error} = await api.searchUser('query');

        if (error) {
            alert(error);
            setArticles(null);
        } else {
            setArticles(response.data);
        }
    }

    const renderArticles = () => {
        return articles.results.map(result => {
            return (
                <div>
                    {result.content.sections.map(section => {
                        const image = section.image ? `<img src="${section.image.source_url}" style="max-width: 100%;"></img>)` : "";

                        return (
                            <div
                                dangerouslySetInnerHTML={{__html: `${section.body} ${image}`}}
                            >
                                {/* { section.image ? (<img src={section.image.source_url} style="max-width: 100%;"></img>) : null } */}
                            </div>
                            // <div>
                            //     {/* document.write(section.body) */}
                            //     {section.image && <img src={section.image.source_url} style="max-width: 100%;"></img>}
                            // </div>
                        );
                        })
                    }
                </div>
            )
        })
    }
    return (
        <Container
            fluid="xl"
        >
            {/* { `${JSON.stringify(articles.results[0].content)}` } */}
            {/* { document.write(articles.results[0].content.sections[2].body) }
            { document.write(articles.results[0].content.sections[2].image.source_url) }
            <img src={articles.results[0].content.sections[2].image.source_url}></img> */}
            <Button 
                color="primary"
                onClick={ handleClick }
            >
                Get Articles    
            </Button>
            { renderArticles() }
        </Container>
    )
}

export default TriposoArticle;