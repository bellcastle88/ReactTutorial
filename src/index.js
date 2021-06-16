import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css'

const books = [
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/519rMWsoNiL._SX325_BO1,204,203,200_.jpg',
    title: 'Hood Feminism',
    author: 'Mikki Kendall',
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/61XOZFGGTZL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'The Color of Law',
    author: 'Richard Rothstein',
  },
];

function BookList() {
  return ( 
    <section className='booklist'>
      {names}
    </section>
  );
}

const names = ['jhon', 'kane', 'son'];

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt='' />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'));
