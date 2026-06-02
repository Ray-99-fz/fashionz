import { NavLink, Outlet } from "react-router-dom"

const Products = () => {
  return (
    <div className="w-[730px] bg-red-700">
      Products Page

      <nav>
        <NavLink to="mens">Mens</NavLink>
        <NavLink to="womens">Womens</NavLink>
        <NavLink to="accessories">Accessories</NavLink>
      </nav>

      <Outlet />
    </div>
  )
}

export default Products
