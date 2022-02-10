import React from "react";
import {
  Grid,
  H1Grid,
  GridCard,
  Item,
  GridImage,
  GridButton,
  DivGrid,
} from "../Components/home/GridSectionStyled";

import useAxios, { Edges } from "../Components/hooks/useAxios";

export default function Live() {
  const removeDash = (txt: string) => {
    return txt.replaceAll("-", " ");
  };
  const { data, isError, isLoading } = useAxios();
  if (data == null) return null;
  if (isLoading) return <h1>Loading</h1>;
  if (isError) return <p>erro</p>;
  return (
    <>
      <Grid>
        <DivGrid>
          <h1>Senaste</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            maxime nesciunt temporibus molestias accusamus, totam molestiae quam
            vel neque eveniet facilis quasi distinctio reiciendis nulla impedit
            ipsam. Aspernatur, harum repellendus.
          </p>
        </DivGrid>

        {data?.games[3].newest.edges.map((edge: Edges, idx: number) => {
          return (
            <GridCard key={idx}>
              <Item>
                <GridImage src={edge.node.image.icon.src} alt="image" />
                <H1Grid>{removeDash(edge.node.slug)} </H1Grid>
                <GridButton>Spela</GridButton>
              </Item>
            </GridCard>
          );
        })}
      </Grid>
    </>
  );
}

{
  /* <BetVideo autoPlay loop muted >
          <source src={betVideo} type="video/mp4" />
          </BetVideo>
        */
}
