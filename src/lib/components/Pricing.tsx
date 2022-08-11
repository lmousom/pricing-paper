import React from 'react';
import './style.pricing.css';
import Button from './Button';
import { PricingProps } from '../typeDefinition';
import FeatureContainer from './FeatureContainer';

const Pricing = (props: PricingProps) => {
  return (
    <>
      <div className="main">
        <div className="pricing">
          <div className="plan" style={props?.styles?.planCard}>
            <h2 style={props?.styles?.planCardTitle}>
              {props.firstPlan.title}
            </h2>
            <div style={props?.styles?.planCardPrice} className="price">
              {props.firstPlan.price}
            </div>
            <FeatureContainer features={props.firstFeatures} />
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
            <FeatureContainer features={props.popularFeatures} />
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
            <FeatureContainer features={props.lastFeatures} />
            <Button
              buttonStyle={props?.styles?.planButton}
              handleClick={props.handleClick}
              disabled={props.buttonDisabled}
              title={props.buttonValue}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
