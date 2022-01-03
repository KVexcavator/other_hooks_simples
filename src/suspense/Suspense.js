import SiteLayout from "./SiteLayout";
import Callout from "./Callout";
import ErrorBoundary from "./ErrorBoundary";
import './style.css'

const BreakThings = () => {
  throw new Error("We intentionally broke something");
};

export default function Suspense(){
  return (
    <SiteLayout 
      menu={
        <ErrorBoundary>
          <p>Site Layout Menu</p>
          <BreakThings />
        </ErrorBoundary>
      }
    >
      <>
        <ErrorBoundary>
          <Callout>Callout<BreakThings /></Callout>
        </ErrorBoundary>
        <ErrorBoundary>
          <h1>Contents</h1>
          <p>This is the main part of the example layout</p>
          <BreakThings />
        </ErrorBoundary>
      </>
    </SiteLayout>
  )
}