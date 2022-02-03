import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextDate,
  CardTextTitle,
  CardTextBody,
  CardStatWrapper,
  CardStats,
  LinkText,
} from "../home/Card-Styled";
import Tilt from "react-parallax-tilt";

 type CardTypes = {
  title?: string;
  date?: number;
//   imgUrl?:string
};

 const Card: React.FunctionComponent<CardTypes> = ()  => {
  return (
    // <Tilt></Tilt>
    
                 <CardWrapper>
        {/* <CardImage  /> */}
        <CardTextWrapper>
          <CardTextDate>22 igig</CardTextDate>
          <CardTextTitle>Wanted</CardTextTitle>
          <CardTextBody>
            Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
            temporibus omnis illum maxime quod deserunt eligendi dolor
          </CardTextBody>
        </CardTextWrapper>
        <CardStatWrapper>
          {/* <CardStats>
            <div>
              1<sup>m</sup>
            </div>
            <div>read</div>
          </CardStats> */}
          {/* <CardStats>
            <LinkText href="#">website</LinkText>
          </CardStats> */}
          <CardStats>
            <LinkText href="#">Spela</LinkText>
          </CardStats>
        </CardStatWrapper>
      </CardWrapper>
    
     
    
  );
};



export default Card