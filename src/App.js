import React from 'react';
import {
  Card,
  Typography,
  Empty,
  Row,
  Divider
} from 'antd';

import {callImdbSearchApi} from './utils';

import styled, {createGlobalStyle} from 'styled-components/macro';
import {Search} from "./components/Search";
import {Movie} from "./components/Movie";
import {MovieModal} from "./components/MovieModal";

const {Title} = Typography;

const Global = createGlobalStyle`
  html {
    background: #f5c518;
  }
`

const App = () => {
  const [title, setTitle] = React.useState(null);
  const [year, setYear] = React.useState(null);
  const [results, setResults] = React.useState(null);
  const [result, setResult] = React.useState(null);

  const search = () => {
    callImdbSearchApi({title, year}).then(results => setResults(results));
  }

  const reset = () => {
    setTitle(null)
    setYear(null)
    setResult(null)
    setResults(null)
  }

  return (
    <Container>
      <Global/>
      <Card>
        <Header>
          <Title>IMDB SEARCH</Title>
        </Header>

        <Search search={search}
                setTitle={setTitle}
                title={title}
                year={year}
                setYear={setYear}
                reset={reset}/>

        <Results>
          {results?.Response === "False" && <Empty/>}
          {results?.Response === "True" &&
            <Divider>Results for: <strong>{title}</strong> {year && '/'} {year} search term</Divider>}
          <Row gutter={[16, 16]}>
            {results?.Response === "True" && results.Search.map(movie => (
              <Movie movie={movie} setResult={setResult}/>))}
          </Row>
        </Results>

        <MovieModal result={result} setResult={setResult}/>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  margin: 30px auto;
  width: 60vw;
`;

const Header = styled.div``

const Results = styled.div`
  margin: 20px 0 20px;
`

export default App;
