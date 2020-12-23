import React, { Component } from 'react';
import Repos from '../src/Data/test_data.js';
import './App.css';
import Pagination from './components/Pagination';
import RepositoryCard from './components/RepositoryCard';

class App extends Component {
  state = { allRepositories: Repos, currentRepositories: [], currentPage: null, totalPages: null }
  componentDidMount() {
    // const { data: allCountries = [] } = Countries.findAll();    
    // const { data: allRepositories = [] } = Repos;  
    // console.log('allCountries: ', this.state.allCountries);
    // this.setState({ allCountries });    
  }
  
  onPageChanged = data => {
    const { allRepositories } = this.state;
    const { currentPage, totalPages, pageLimit } = data;
    const offset = (currentPage - 1) * pageLimit;
    const currentRepositories = allRepositories.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentRepositories, totalPages });
  }

  render() {
    const { allRepositories, currentRepositories, currentPage, totalPages } = this.state;
    const totalRepositories = allRepositories.length;

    if (totalRepositories === 0) return null;

    const headerClass = ['text-dark py-2 pr-4 m-0', currentPage ? 'border-gray border-right' : ''].join(' ').trim();

    return (
      <div className="container mb-5">
        <div className="row d-flex flex-column py-5">
          <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <h2 className={headerClass}>
                <strong className="text-secondary">{totalRepositories}</strong> Repositories
              </h2>
              { currentPage && (
                <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                  Page <span className="font-weight-bold">{ currentPage }</span> / <span className="font-weight-bold">{ totalPages }</span>
                </span>
              ) }
            </div>
            <div className="d-flex flex-row py-4 align-items-center">
              <Pagination totalRecords={totalRepositories} pageLimit={18} pageNeighbours={1} onPageChanged={this.onPageChanged} />
            </div>
          </div>
          {/* { currentCountries.map(country => <CountryCard key={country.cca3} country={country} />) } */}
          { currentRepositories.map(repo => <RepositoryCard key={repo.key} repository={repo} />) }
        </div>
      </div>
    );
  }

}

export default App;
