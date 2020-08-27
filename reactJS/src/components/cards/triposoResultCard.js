import React from 'react';

const TriposoResultCard = (result, ...props) => {

    // console.log('triposo result card', result)
    const [showDetails, setShowDetails] = React.useState(false);

    return (
        <div
            style={{
                border: '1px solid black',
                borderRadius: '1em',
                margin: '1em',
            }}
        >
            <h5
                style={{
                    borderBottom: '1px solid black',
                    padding: '0.5em',
                }}
            >
                { result.name }
            </h5>

            <div
                style={{
                    padding: '0 0.5em 0.5em 0.5em',
                }}
            >
                { showDetails ? 
                (
                    <>
                        { result.content.sections.map(section => {
                            const image = section.image ? 
                                `<img 
                                    src="${section.image.source_url}" 
                                    style="max-width: 100%; display: block; margin: auto;"
                                >` : "";

                            return (
                                <>
                                    <h6>{ section.title }</h6>
                                    <div
                                        style={{
                                            // display: 'flex',
                                            // flexDirection: 'column',   
                                        }}
                                        dangerouslySetInnerHTML={{__html: `${section.body} ${image}`}}
                                    >
                                    </div>
                                </>
                                // <div>
                                //     {/* document.write(section.body) */}
                                //     {section.image && <img src={section.image.source_url} style="max-width: 100%;"></img>}
                                // </div>
                            );
                            })
                        }
                        <p
                            style={{
                                textAlign: 'right',
                                margin: '0 0.5em',
                                cursor: 'pointer',
                                height: '1em',
                                color: 'skyblue',
                            }}
                            onClick={() => setShowDetails(false)}
                        >
                            Show less.
                        </p>
                    </>
                ) : (
                    <div>
                        <span

                        >
                            { result.snippet }
                            <span
                                style={{
                                    // float: 'right',
                                    margin: '0 0.5em',
                                    cursor: 'pointer',
                                    height: '1em',
                                    color: 'skyblue',
                                }}
                                onClick={() => setShowDetails(true)}
                            >
                                Read more...
                            </span>
                        </span>

                    </div>
                ) 
                }
            </div>
        </div>
    );
}

export default TriposoResultCard;