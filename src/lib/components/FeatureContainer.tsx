import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { FeaturesProp } from '../typeDefinition';

const FeatureContainer = (props: FeaturesProp) => {
  return (
    <ul className="features">
      {props.features.map((feature, index) => (
        <li key={index}>
          <span>
            {feature.applicable ? (
              <FaCheckCircle className="fas fa-check-circle" />
            ) : (
              <FaTimesCircle className="fas fa-cross-circle" />
            )}
          </span>
          {feature.name}
        </li>
      ))}
    </ul>
  );
};

export default FeatureContainer;
