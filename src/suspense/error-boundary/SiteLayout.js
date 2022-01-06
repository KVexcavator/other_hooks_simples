import '../style.css'

export default function SiteLayout({
    children,
    menu = c => null
  }) {
  return (
    <div className="site-container">
      <div className='first'>{menu}</div>
      <div className='second'>{children}</div>
    </div>
  );
}