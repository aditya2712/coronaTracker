import React from 'react';
import 'tachyons';
import { Cards, Charts, CountryPicker } from './components'; 
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      data: {},
      country: 'Global',
      url: 'https://covid19.mathdro.id/api'
    }
  }
  fetchApi = (country) => {
    let url='';
    if(country==='Global'){
      url='https://covid19.mathdro.id/api';
    }
    else{
      url=`https://covid19.mathdro.id/api/countries/${country}`;
    }
    fetch(url)
    .then(response => response.json())
    .then( ({confirmed,recovered,deaths,lastUpdate}) => this.setState({data:{confirmed,recovered,deaths,lastUpdate}}));
  }
  componentDidMount(){
    this.fetchApi('Global');
  }

  onCountryChange = (event) => {
    const currentCountry=event.target.value
    this.setState({country: event.target.value})
    this.fetchApi(currentCountry);
  }
  render(){
    const { data,country } = this.state
    return(
      <div className='tc container'>
        <Cards data={data} country={country}/>
        <CountryPicker onCountryChange={this.onCountryChange}/>
        <Charts data={data} country={country} />
      </div>
    )
  }
}

export default App;
