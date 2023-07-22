import CartPage from "../pages/cart_page/CartPage";
import CatalogPage from "../pages/catalog_page/CatalogPage";
import FavoritePage from "../pages/favorite_page/FavoritePage";
import MainPage from "../pages/main_page/MainPage";
import ProductPage from "../pages/product_page/ProductPage";

export const routes = [
    {path: "/React_shop", component: MainPage, exact: true},
    {path: "/React_shop/catalog", component: CatalogPage, exact: true},
    {path: "/React_shop/catalog/:id", component: ProductPage, exact: true},
    {path: "/React_shop/cart", component: CartPage, exact: true},
    {path: "/React_shop/favorite", component: FavoritePage, exact: true},
]

