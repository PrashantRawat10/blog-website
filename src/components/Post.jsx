// import { div } from "prelude-ls";
import React from "react";
import "./Post.css";
import {Carousel} from 'react-bootstrap';

// frist carousel
function Carousel_cont() {
  return (
    <div className="caro">
<Carousel pause={true}>
  <Carousel.Item interval={10000}>
    <img
      // className="d-block w-100"
      src="https://i.pinimg.com/originals/10/82/e4/1082e4e9800d58755f87fc64d5340c4e.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Dominating Technology</h3>
      <p>Machine Learning and AI will rule over the future</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={10000}>
    <img
      // className="d-block w-100"
      src="https://www.setaswall.com/wp-content/uploads/2017/06/Flying-Bird-Text-Facebook-Timeline-Cover-Wallpaper-850-x-315-768x285.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={null}>
    <img
      // className="d-block w-100"
      src="https://live.staticflickr.com/4606/26267188318_dbd3f05f6e_o.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
  );
}


function Post(props) {
  return (
    <div className="post">
      <h1>{props.heading}</h1>
      <p>{props.content}</p>
      <h1 className="heading">Technology that will dominate humanity!</h1>
      <p>
      Angelique Hedberg, senior corporate strategy analyst at RTI International, said, “If we choose a future we want in 50 years, and work toward creating it, there is a nonzero probability we will reach a version of that future. In that vein of thought, we will see waves of platform companies that change the way we live and enjoy our lives. The platform companies that exist today will fade, as will the ones that follow. This is not because they fail, but rather, because they succeed. We will find a way to make decisions in a network of decisions. In 50 years, multiple generations of a family will gather for dinner and share sights, smells, sounds, tastes and touches, even if they are in different hemispheres, countries and time zones. You’ll be at a child’s social activity and they will hear the voices [of] all of those who love (and critique) him. You will say goodbye to aging loved ones, even if they cannot hear you. This will all happen with the assistance of technology (some embedded in our brain) that know our wants and needs better than we know our own. The definition of what it means to be human will evolve and the laws and regulation will follow, albeit in a less than direct manner. We will value governments in new and different ways, and we will expect more from our technology platforms. The deluge of data will provide new inputs into the decision models for platforms, bringing greater clarity to the short-term benefits and long-term risks, in return making the financial decisions more social, environmental and moral. Where laws and regulations can put a bottom line, they will. Where law and regulations cannot, the planet will step in and regulate the excess.”
      Daniel Riera, a professor of computer science at Universitat Oberta de Catalunya, commented, “Everything will be connected; automation will be everywhere; most of the jobs will be done by machines. Society will have fully changed to adapt to the new reality: Humans will need to realize the importance of sustainability and equality. In order to reach this point, technology, ethics, philosophy, laws and economics, among other fields, will have done a big joint effort. We have a very good opportunity. It will depend on us to take advantage of it. I hope and trust we will. Otherwise, we will disappear.”</p>
    </div>
  );
}

export {Carousel_cont,Post};
