// import React from 'react';
// import SingleArticle from './SingleArticle';
// import './Articles.css';

// function Articles() {
//   return (
//     <section id="articles">
//       <h2>Articles</h2>
//       {/* Add article components or hard-coded content */}
//       <SingleArticle />
//     </section>
//   );
// }

// export default Articles;

import React from 'react';
import SingleArticle from './SingleArticle';
import './Articles.css';

function Articles() {
  return (
    <section id="articles">
      <h2>Articles</h2>
      <div className="horizontal-scroll">
        <SingleArticle />
        <SingleArticle />
        <SingleArticle />
        <SingleArticle />
        <SingleArticle />
        <SingleArticle />
        <SingleArticle />
        <SingleArticle />
        <SingleArticle />
        {/* Add more <SingleArticle /> instances as needed */}
      </div>
    </section>
  );
}

export default Articles;
