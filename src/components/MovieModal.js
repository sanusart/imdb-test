import React from "react";
import {Descriptions, Modal} from "antd";

export const MovieModal = ({result, setResult}) => {
  return result?.Response !== undefined && (
    <Modal title={result?.Title}
           open={result?.Response !== 'False'}
           onOk={() => setResult(null)}
           width={650}
           onCancel={() => setResult(null)}>
      <Descriptions title={result?.result} layout="vertical">
        <Descriptions.Item label="Year">{result?.Year}</Descriptions.Item>
        <Descriptions.Item label="Director">{result?.Director}</Descriptions.Item>
        <Descriptions.Item label="Actors">{result?.Actors}</Descriptions.Item>
        <Descriptions.Item label="Plot">
          {result?.Plot}
        </Descriptions.Item>
      </Descriptions>
    </Modal>
  )
}
