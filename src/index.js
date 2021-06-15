import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css'

function BookList() {
  return ( 
    <section className='booklist'>
      <Book />
    </section>
  );
}

const author = 'Jace.K';
const Book = () => {
  const title = 'IRRESISTIBLE HUSBAND';
  return (
    <article className="book">
      <img src="https://cdn.shopify.com/s/files/1/1269/2171/products/IRRHUSB1_large.jpg?v=1477272293" alt="" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <p>{1+5}</p>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'));
