import React from "react";
import styled from "styled-components";

import Buttons from "./components/Buttons";
import Display from "./components/Display";

interface IState {
  display: string | number;
  calculatorArray: any[];
}

class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <Wrapper>
        <Display valueArray={[0, "x", 2, "=", 0]} />
        <br />
        <Buttons />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 300px;
  margin: 0 auto;
`;

export default App;
