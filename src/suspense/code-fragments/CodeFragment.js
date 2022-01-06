import React, { useState, Suspense, lazy } from 'react';
import Agreement from './Agreement';
// React Spinners — это библиотека анимированных спиннеров загрузки
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import ErrorBoundary from '../error-boundary/ErrorBoundary';
import '../style.css';

// отложить загрузку компонента Main до его рендеринга
const Main = React.lazy(() => import("./Main"));

export default function CodeFragment(){
  const [agree, setAgree] = useState(false)

  if (!agree)
    return <Agreement onAgree={() => setAgree(true)} />

    return (
      <ErrorBoundary>
        <Suspense fallback={<ClimbingBoxLoader />}>
          <Main />
        </Suspense>
      </ErrorBoundary>
    );
}