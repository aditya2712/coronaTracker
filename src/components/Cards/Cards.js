import React from 'react';
import CountUp from 'react-countup';
import './Cards.css';

const Cards= ({data,country}) => {
    const {confirmed,recovered,deaths,lastUpdate}=data;
    if(!confirmed){
        return(
            <div className='tc f2'>Loading...</div>
        )
    }
    return(
        <div className='' style={{width:'100%'}}>
            <img src='https://directorsblog.nih.gov/wp-content/uploads/2020/07/COVID-19-Card-24.jpg' alt='banner' height='240px' width='65%' />
            <h2 className='tc'>{new Date(lastUpdate).toDateString()}</h2>
            <div className='f1 orange fw7'>{
                country==='Global'? 'World': country
            }</div>
            <div className='tc center'>
                <article className="mw5 mw6-ns br3 hidden ba b--black-10 mv4 shadow-4">
                    <h1 className="f3 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Active</h1>
                    <div className="pa3 bt b--black-10 bg-white" style={{color: '#f04826'}}>
                        <p className="f6 f2-ns lh-copy measure">
                            <CountUp start={0}
                            end={confirmed.value-recovered.value-deaths.value}
                            separator=','
                            duration={0.01} />
                        </p>
                        <h3>Number of Active cases of covid-19</h3>
                    </div>
                </article>
                <article className="mw5 mw6-ns br3 hidden ba b--black-10 mv4 shadow-4">
                    <h1 className="f3 bg-near-white br3 br--top black-60 mv0 pv2 ph3">confirmed</h1>
                    <div className="pa3 bt b--black-10 bg-white dark-blue">
                        <p className="f6 f2-ns lh-copy measure">
                            <CountUp start={0}
                            end={confirmed.value}
                            separator=','
                            duration={0.01} />
                        </p>
                        <h3>Number of confirmed cases to covid-19</h3>
                    </div>
                </article>
                <article className="mw5 mw6-ns br3 hidden ba b--black-10 mv4 shadow-4">
                    <h1 className="f3 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Recovered</h1>
                    <div className="pa3 bt b--black-10 bg-white" style={{color: 'green'}}>
                        <p className="f6 f2-ns lh-copy measure">
                            <CountUp start={0}
                            end={recovered.value}
                            separator=','
                            duration={1.5}/>
                        </p>
                        <h3>Number of Recovered cases of covid-19</h3>
                    </div>
                </article>
                <article className="mw5 mw6-ns br3 hidden ba b--black-10 mv4 shadow-4">
                    <h1 className="f3 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Death</h1>
                    <div className="pa3 bt b--black-10 bg-white" style={{color: '#e01414'}}>
                        <p className="f6 f2-ns lh-copy measure">
                            <CountUp start={0}
                            end={deaths.value}
                            separator=','
                            duration={0.01} />
                        </p>
                        <h3>Number of Deaths due to covid-19</h3>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Cards;