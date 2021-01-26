import {Section as S} from '../types';
import styled from 'styled-components';
import React, {ReactNode} from 'react';

const _Section = (props: {self: S; children: ReactNode}) => {
  return (
    <Styled isSelected={props.self.isSelected}>
      <div className="self">
        <div className="title">{props.self.title}</div>
        <pre className="content">{props.self.content}</pre>
      </div>
      <div className="children">{props.children}</div>
    </Styled>
  );
};

export const Section = React.memo(_Section);

interface StyledProps {
  isSelected: boolean;
}

const Styled = styled.div`
  text-align: left;
  .children {
    padding-left: 32px;
  }
  .self {
    .content {
      padding-left: 12px;
    }
  }
  background: ${(props: StyledProps) =>
    props.isSelected ? 'lightyellow' : ''};
`;