import React from 'react';
import PropTypes from 'prop-types';
import '../../src/components/css/GitHubButton.css';
import GitHubIcon from '../images/github-mark-white.png'; 

const GitHubButton = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="github-button">
      <img src={GitHubIcon} alt="GitHub" className="github-icon" />
      <span>Visit GitHub</span>
    </a>
  );
};

GitHubButton.propTypes = {
  link: PropTypes.string.isRequired,
};

export default GitHubButton;
