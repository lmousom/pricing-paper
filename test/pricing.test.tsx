import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Pricing from '../dist';

const firstPlan = {
  title: 'Demo 1',
  price: 'FREE',
};
const popularPlan = {
  title: 'Demo 2',
  price: '$54',
};

const lastPlan = {
  title: 'Demo 3',
  price: '$99',
};

const firstFeatures = [
  {
    name: 'First Features',
    applicable: true,
  },
  {
    name: 'First Features',
    applicable: true,
  },
  {
    name: 'First Features',
    applicable: false,
  },
  {
    name: 'First Features',
    applicable: true,
  },
  {
    name: 'First Features',
    applicable: false,
  },
];

const popularFeatures = [
  {
    name: 'Popular Features',
    applicable: true,
  },
  {
    name: 'Popular Features',
    applicable: true,
  },
  {
    name: 'Popular Features',
    applicable: true,
  },
  {
    name: 'Popular Features',
    applicable: true,
  },
  {
    name: 'Popular Features',
    applicable: true,
  },
];

const lastFeatures = [
  {
    name: 'Last Features',
    applicable: true,
  },
  {
    name: 'Last Features',
    applicable: true,
  },
  {
    name: 'Last Features',
    applicable: true,
  },
  {
    name: 'Last Features',
    applicable: true,
  },
  {
    name: 'last Features',
    applicable: true,
  },
];

const styles = {
  planCard: {
    backgroundColor: '#ffebb3',
  },
  planHeroCard: {},
  planCardTitle: {},
  planCardPrice: {},
  planButton: {},
  badge: {},
};

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Pricing
        firstPlan={firstPlan}
        popularPlan={popularPlan}
        lastPlan={lastPlan}
        firstFeatures={firstFeatures}
        popularFeatures={popularFeatures}
        lastFeatures={lastFeatures}
        styles={styles}
        buttonValue={'Buy Now'}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
