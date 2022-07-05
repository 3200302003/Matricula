import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <main>
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/users">Estudiantes</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>
      <section>
        <Outlet />
      </section>
    </main>
  );
}