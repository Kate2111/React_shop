import { LocalStorage } from './services/LocalStorage/localStorage.service'
import LayoutPage from '@components/layout/LayoutPage';
import MainPage from './pages/main_page/MainPage';

LocalStorage.get('foo');

function App() {
  return (<>
    <LayoutPage>
      <MainPage/>
    </LayoutPage>
  </>
  );
}

export default App;
