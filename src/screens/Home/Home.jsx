import React from 'react';
import CategoryList from 'components/Homepage/CategoryList/CategoryList';
import Terms from 'components/Homepage/Terms/Terms';

const Home = () => (
  <div className="search">
    <CategoryList />
    <Terms />
  </div>
);

export { Home };
export default (Home);
