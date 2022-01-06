import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Checkbox from './intro-use-effect/Checkbox';
import Phrase from "./intro-use-effect/Phrase";
import CheckboxReducer from './intro-use-reducer/CheckboxReducer';
import User from './intro-use-reducer/User';
import App from './update-use-hooks/App';
import FetchGitHub from './intro-data-fetch/FetchGitHub';
import StatePromise from './intro-data-fetch/StatePromise';
import RenderProps from './intro-data-fetch/RenderProps';
import VirtualizedList from './intro-data-fetch/VirtualizedList';
import FetchGitHubDeep from './deep-in-fetch/FetchGitHub';
import GraphQL from './intro-graph-ql/GraphQL';
import Suspense from './suspense/error-boundary/Suspense';
import CodeFragment from './suspense/code-fragments/CodeFragment';


function Glob(){  
  const ItemsArr = [
  <Checkbox />,
  <Phrase />,
  <CheckboxReducer />,
  <User />,
  <App />,
  <FetchGitHub />,
  <StatePromise />,
  <RenderProps />,
  <VirtualizedList />,
  <FetchGitHubDeep />,
  <GraphQL />,
  <Suspense />,
  <CodeFragment />
]
  const [activ, setActiv] = useState(<FetchGitHubDeep />)
  return (
    <div className='glob-container'>
      <div className='glob-first'>
        <ol>
          {ItemsArr.map((item,i) => 
            <li 
              key={i} 
              onClick={() => setActiv(item)}
              style={{cursor: "pointer"}}
            >
              {item.type.name}
            </li>
          )}
        </ol>
      </div>
      <div className='glob-second'>{activ}</div>
    </div>
  )
}

ReactDOM.render(
  <Glob />,
  document.getElementById('root')
);