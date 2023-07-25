import React from "react";
import {Button, Input, Select, Space} from "antd";
import styled, {createGlobalStyle} from 'styled-components/macro';

import {years} from "../utils";

export const Search = ({title, year, setYear, setTitle, search, reset}) => (
  <SearchWrapper>
    <Space size="large">
      <Input size="large" placeholder="Title" value={title}
             onChange={(event) => setTitle(event.target.value)}
             addonAfter={<Select allowClear placeholder="Year" size="large" showSearch
                                 onClear={() => setYear(null)}
                                 value={year}
                                 defaultValue={null}
                                 onSelect={(value) => setYear(value)}
                                 options={years.map(year => ({
                                   label: year,
                                   value: year
                                 }))}/>}/>
      <Button type="primary" size="large" onClick={() => search()}>Search</Button>
      {title && <Button type="dashed" size="large" onClick={() => reset()}>Reset</Button>}
    </Space>
  </SearchWrapper>
)

const SearchWrapper = styled.div`
  display: flex;
  justify-content: start;
`
