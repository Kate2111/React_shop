import { createContext} from "react";

export const AppContext = createContext({});

/* export const NewCollection = createContext(null);
export const CatalogeList = createContext(null);
export const FavoritList = createContext(null);
export const CartList = createContext(null);
 */

/* export function AppProviders({children}) {
    const [newCollection, setNewCollection] = useState([]);
	const [catalog, setCatalog] = useState([]);
	const [favorite, setFavorite] = useState([]);
	const [cart, setCart] = useState([]);
	
	useEffect(() => {
		getDataList('catalog')
		.then(res=>setCatalog(res))
		.catch(err=>console.log(err));
	}, [])
	
	useEffect(() => {
		getDataList('newcollection')
		.then(res=>setNewCollection(res))
		.catch(err=>console.log(err));
	}, [])

	return (
		<NewCollection.Provider value={{newCollection, setNewCollection}}>
			<CatalogeList.Provider value={{catalog, setCatalog}}>
				<FavoritLisr.Provider value={{favorite, setFavorite}}>
					<CartList.Provider value={{cart, setCart}}>
						{children}
					</CartList.Provider>
				</FavoritLisr.Provider>
			</CatalogeList.Provider>
		</NewCollection.Provider>		
	);
}
 */
