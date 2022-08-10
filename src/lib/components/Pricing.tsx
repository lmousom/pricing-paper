import React from 'react';
import './style.pricing.css';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import Button from './Button';
import { PricingProps } from '../typeDefinition';

const Pricing = (props: PricingProps) => {
  return (
    <>
      <div className="pricing">
        <div className="plan" style={props?.styles?.planCard}>
          <h2 style={props?.styles?.planCardTitle}>{props.firstPlan.title}</h2>
          <div style={props?.styles?.planCardPrice} className="price">
            {props.firstPlan.price}
          </div>
          <ul className="features">
            {props.firstFeatures.map((feature, index) => (
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
          <Button
            buttonStyle={props?.styles?.planButton}
            handleClick={props.handleClick}
            disabled={props.buttonDisabled}
            title={props.buttonValue}
          />
        </div>
        <div className="plan popular" style={props?.styles?.planHeroCard}>
          <span style={props?.styles?.badge} className="badge">
            Most Popular
          </span>
          <h2 style={props?.styles?.planCardTitle}>
            {props.popularPlan.title}
          </h2>
          <div style={props?.styles?.planCardPrice} className="price">
            {props.popularPlan.price}
          </div>
          <ul className="features">
            {props.popularFeatures.map((feature, index) => (
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
          <Button
            buttonStyle={props?.styles?.planButton}
            handleClick={props.handleClick}
            disabled={props.buttonDisabled}
            title={props.buttonValue}
          />
        </div>
        <div className="plan" style={props?.styles?.planCard}>
          <h2 style={props?.styles?.planCardTitle}>{props.lastPlan.title}</h2>
          <div style={props?.styles?.planCardPrice} className="price">
            {props.lastPlan.price}
          </div>
          <ul className="features">
            {props.lastFeatures.map((feature, index) => (
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
          <Button
            buttonStyle={props?.styles?.planButton}
            handleClick={props.handleClick}
            disabled={props.buttonDisabled}
            title={props.buttonValue}
          />
        </div>
      </div>
    </>
  );
};

export default Pricing;
