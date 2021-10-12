import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Layout } from 'antd';
import './App.css';
import Home from './components/pagehome/Home';
import Nav from './components/pagehome/Nav';
import Favourites from './components/fav/Favourites';

const { Header, Content, Footer } = Layout;

function App() {

  return (
    
    <>
      <Router>
        <Layout className="layout">
          <Header>
            <Nav />
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">
              <Switch>
                <Route path="/home" component={Home} />
                <Route exact path="/favourties" component={Favourites} />
                {/*<Route path="/list/:id" component={CoinDetail} />
                <Route path="/login" component={Login}/>
                <Route path="/forms" component={Forms}/>)
                <Route path="*" component={NotFoundComponent} /> */}
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Superedings App</Footer>
        </Layout>
      </Router>
    </>
  );
}

export default App;
