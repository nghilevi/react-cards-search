

import { useData } from './hooks/useData';
import { LoadingStatusText, Status } from './utils/constants';
import CardsSearch from './components/CardsSearch/CardsSearch';

function App() {

  const { cards, autocompleteStrArr, loadingStatus } = useData()

  const renderApp = () => {
    if(loadingStatus === Status.Loading){
      return <>{LoadingStatusText.Loading}</>
    }else if(loadingStatus === Status.Failure){
      return <>{LoadingStatusText.Failure}</>
    }else{
      if(cards) {
        return <CardsSearch cards={cards} />
      }else{
        return <>{LoadingStatusText.UsersLoadFail}</>
      }
    }
  }

  return (
    <div className="app">
      <div>{renderApp()}</div>
    </div>
  );
}

export default App;

