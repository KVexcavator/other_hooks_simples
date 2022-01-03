import SiteLayout from "./SiteLayout";
import Callout from "./Callout";

export default function Suspense(){
  return (
    <SiteLayout menu={<p>Menu</p>}>
      <>
        <Callout>Callout-Ba-Ba</Callout>
        <h1>Contents</h1>
        <p>This is the main part of the example layout</p>
      </>
    </SiteLayout>
  )
}