import React from "react";
import Work from '../../../assests/Work.png'
import Gif from '../../../assests/starting.png'
import Consult from '../../../assests/Consulting-amico.png'

import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBCarousel>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={Gif}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={Work}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={Consult}
        alt='...'
      />
    </MDBCarousel>
  );
}