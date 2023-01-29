import React from 'react';
import Card from './Card';
import "./style.css";

export default function App() {
  return (

    <div className='wrapper'>
      <Card
        img="https://webmindset.net/wp-content/uploads/2022/11/The-Lean-Startup-Book-Cover.jpg"
        title="The Lean Startup"
        description="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses is a book by Eric Ries describing his proposed lean startup strategy."
        price="Rs.200"
      />
      <Card
        img="https://i0.wp.com/purplecrayonyourworld.com/wp-content/uploads/2020/06/AtomicHabitsJC.png?fit=640%2C673&ssl=1"
        title="Atomic Habbits"
        description="James Clear, an expert on habit formation, ...........reveals practical & strategies that will teach you how to form good habits, break bad.... ones,achieve your goals ,fears."
        price="Rs.180"
      />
      <Card
        img="http://cdn.shopify.com/s/files/1/0584/4667/6158/products/limitlessbookspringindia.jpg?v=1639304301"
        title="Limitless"
        description="JIM KWIK, the world’s #1 brain coach, has written the owner’s.... manual for mental expansion and brain fitness. Limitless gives people.. ability to accomplish more productivit,transform & success."
        price="Rs.250"
      />
      <Card
        img="https://cdn.shopify.com/s/files/1/0584/4667/6158/products/the10xrule_530x@2x.jpg?v=1626263583://rukminim1.flixcart.com/image/416/416/kpbipow0/regionalbooks/e/c/i/the-10x-rule-english-electronic-book-text-cardone-grant-original-imag3h2ubxk4qggp.jpeg?q=70"
        title="The 10x Rule"
        description="Achieve results and accomplish your business dreams ,people operate with only three degrees of action-no action, retreat, or normal action-if you're after big goals "
        price="Rs.220"
      />

    </div>

  )
}
