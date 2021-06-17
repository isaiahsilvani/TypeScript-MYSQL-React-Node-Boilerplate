import React, { useState } from 'react';
// Components
import { useSelector, useDispatch } from 'react-redux'
// action creators for redux store state management
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';
import styled from '@emotion/styled'
import * as api from './services/api'

const StyledComponent = styled.div`
  background-color: lightblue;
`

function App() {
  // set up action creators for state management
  const dispatch = useDispatch()
  const { setTestState } = bindActionCreators(actionCreators, dispatch)
  // set up so you can also see state
  const testState = useSelector((state: State) => state.test)

  const postRequest = () => {
    api.postRequest(testState)
  }
  const getRequest = () => {
    api.getRequest()
  }

  return (
    <StyledComponent>
      <h2>The Ultimate Typescript React Redux Node MongoDB Boilerplate</h2>
      <h3>By Isaiah Silvani</h3>
      <hr/>
      <h2>State in Redux Store: {testState}</h2>
      <input
        value={testState}
        onChange={e => setTestState(e.target.value)}
      />
      <button
        onClick={postRequest}
      >
        Send POST request to backend
      </button>
      <button
        onClick={getRequest}
      >
        Send GET request to backend
      </button>
    </StyledComponent>
  );
}

export default App;
