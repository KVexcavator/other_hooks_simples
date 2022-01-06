import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
// import Checkbox from './intro-use-effect/Checkbox';
// import Phrase from "./intro-use-effect/Phrase";
// import Checkbox from './intro-use-reducer/Checkbox';
// import User from './intro-use-reducer/User';
// import App from './update-use-hooks/App';
// import FetchGitHub from './intro-data-fetch/FetchGitHub';
// import StatePromise from './intro-data-fetch/StatePromise';
// import RenderProps from './intro-data-fetch/RenderProps';
// import VirtualizedList from './intro-data-fetch/VirtualizedList';
// import FetchGitHub from './deep-in-fetch/FetchGitHub';
// import GraphQL from './intro-graph-ql/GraphQL';
// import Suspense from './suspense/error-boundary/Suspense';
import CodeFragment from './suspense/code-fragments/CodeFragment';

const ItemsArr = ['CodeFragment']

function Glob(){
  return (
    <div className='glob-container'>
      <div className='glob-first'>
        <ol>
          {ItemsArr.map(item => (
            <li key={Math.random()}>{item}</li>
          ))}
        </ol>
      </div>
      <div className='glob-second'><CodeFragment /></div>
    </div>
  )
}

ReactDOM.render(
  // <Checkbox />
  // <Phrase />
  // <Checkbox />
  // <User />
  // <App />
  // <FetchGitHub />
  // <StatePromise />
  // <RenderProps />
  // <VirtualizedList />
  // <FetchGitHub />
  // <GraphQL />
  // <Suspense />
  <Glob />,
  document.getElementById('root')
);