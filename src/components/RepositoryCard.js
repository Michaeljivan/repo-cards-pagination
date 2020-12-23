import React from 'react';
import PropTypes from 'prop-types';

const RepositoryCard = ({repository}) => {
  return (
    <div className="col-md-12">
      <div className="country-card-container border-gray rounded border mx-2 my-3 d-flex flex-row align-items-center p-0 bg-light">
        <div className="px-3">
          <img style={{ height: "75px", width: "75px" }} src={repository.avatar_url}/>
          {' '}
          <a href={repository.svn_url} target={"blank"}>
              {repository.title}
            </a>
          <span className="country-name text-dark d-block font-weight-bold">Agency Name: {repository.org_name}</span>
          <p className="country-region text-secondary">Title: { repository.title }</p>
          <span className="country-region text-secondary">Description: { repository.description }</span>
          <div className="datetime">
            Last updated:{" "}
            {`${new Date(repository.updated_at).toDateString()}, ${new Date(
              repository.updated_at
            ).toLocaleTimeString()}`}
          </div>

          <div>
            Languages:{" "}
            {repository.languages.length !== 0 ? (
              <i>{repository.languages.join(", ")}</i>
            ) : (
              <i>No Languages</i>
            )}
          </div>

          <div>
            Score:{" "}
            {repository.score === "null" ? (repository.score = "Unverified") : null}
            
              {repository.score === "Alerts"
                ? `${repository.score} (${repository.alerts.length})`
                : repository.score}
            
          </div>
        </div>
      </div>
    </div>
  )
}

RepositoryCard.propTypes = {
    repository: PropTypes.shape({})
};

export default RepositoryCard;