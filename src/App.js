import React from 'react';
import {Card, Input, Select, Button, Form, Typography, Empty, Descriptions} from 'antd';
import {callImdbApi, years} from './utils';

import styled from 'styled-components/macro';

const {Title} = Typography;

const App = () => {
    const [title, setTitle] = React.useState(null);
    const [year, setYear] = React.useState(null);
    const [results, setResults] = React.useState(null);

    const search = () => {
        callImdbApi({title, year}).then(results => setResults(results));
    }

    return (
        <Container>
            <Card>
                <Header>
                    <Title>IMDB SEARCH</Title>

                </Header>
                <Search>
                    <Form.Item label="Movie title" name="layout">
                        <Input size="large" placeholder="Title" value={title}
                               onChange={(event) => setTitle(event.target.value)}/>
                    </Form.Item>
                    <Form.Item label="Year of release" name="layout">
                        <Select allowClear placeholder="Year" size="large" showSearch
                                onClear={() => setYear(null)}
                                value={year}
                                defaultValue={null}
                                onSelect={(value) => setYear(value)}
                                options={years.map(year => ({
                                    label: year,
                                    value: year
                                }))}/>
                    </Form.Item>
                    <Button size="large" onClick={() => search()}>Search</Button>
                </Search>

                <Results>

                    <Title level={3}>Results for: {title} {year}</Title>
                    {results?.Response === 'False' || !results ? <Empty/> : (<Descriptions title={results?.results}>
                        <Descriptions.Item label="Year">{results?.Year}</Descriptions.Item>
                        <Descriptions.Item label="Director">{results?.Director}</Descriptions.Item>
                        <Descriptions.Item label="Actors">{results?.Actors}</Descriptions.Item>
                        <Descriptions.Item label="Plot">
                            {results?.Plot}
                        </Descriptions.Item>
                    </Descriptions>)}
                </Results>
            </Card>
        </Container>
    );
}

const Container = styled.div`
  margin: 30px auto;
  width: 60vw;
`;

const Header = styled.div``
const Search = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: normal;
`
const Results = styled.div``

export default App;
