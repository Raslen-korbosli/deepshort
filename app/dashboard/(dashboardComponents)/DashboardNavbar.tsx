import { SidebarTrigger } from '@/(components)/ui/sidebar';

export default function DashboardNavbar() {
  return (
    <nav className="sticky  top-0 z-50 backdrop-blur-md shadow-sm " id="home">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1>home</h1>
        <SidebarTrigger />

        {/* <NavActions user={user} isMobile={isMobile} /> */}
      </div>
    </nav>
  );
}
