import React from "react";
import styled from "styled-components";
import useAxios, { Edges } from "../hooks/useAxios";
import {Grid, GridCard, Item, GridImage, H1Grid, GridButton} from '../home/GridSectionStyled'




export default function Sport() {
  const { data, isError, isLoading } = useAxios();
  if (data == null) return null;
  if (isLoading) return <h1>Loading</h1>;
  if (isError) return <p>erro</p>;

  const removeDash = (txt: string) => {
    return txt.replaceAll("-", " ");
  };

  return (
    <>
     
      
        <Grid>
          {data?.games[2].jackpots.edges.map((edge: Edges, idx: number) => {
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

const TextSport = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 100%;
  margin-top: 20rem;
  margin-left: 10rem;
  margin-right: 10rem;
  margin-bottom: 10rem;
  color: white;
  font-family: "Source Sans Pro", sans-serif;

  @media (min-width: 844px) {
    margin-top: 3rem;
    margin-left: 5rem;
    margin-right: 5rem;
  }

  @media (max-width: 765px) {
    margin-top: 13rem;
    margin-left: 5rem;
    margin-right: 5rem;
  }
`;

const SportH1 = styled.h1`
  font-weight: 900;
  font-size: 2.5rem;
  width: 100%;

  @media (min-width: 375px) and (max-width: 1000px) {
    margin-bottom: -1.5rem;
    font-size: 1.5rem;
  }
`;

const SportP = styled.p`
  font-weight: 900;
  margin-top: 2rem;
  width: 100%;
  color: white;
  font-size: 1.5rem;
  text-align: center;
  line-height: 2rem;

  @media (min-width: 375px) and (max-width: 1000px) {
    margin-bottom: -1.5rem;
    font-size: 1rem;
  }
`;
