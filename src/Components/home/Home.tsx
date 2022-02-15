import styled from "styled-components";
import useAxios, { Edges } from "../hooks/useAxios";
import Game from "../../Contexts/Games";
import GonzoSection from "./home-sections/GonzoSection";
import { Grid, DivGrid } from "../ui-libary/grid/GridSectionStyled";
import BetSection from "./home-sections/BetSection";
import MobileSection from "./home-sections/MobileSection";

export default function Home() {
  const { data, isError, isLoading } = useAxios();
  if (data == null) return null;
  if (isLoading) return <h1>Loading</h1>;
  if (isError) return <p>erro</p>;

  return (
    <>
      <GonzoSection />
      <MobileSection />

      <Grid>
        <DivGrid>
          <h1>Senaste</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            ut voluptate voluptatibus! Pariatur, eveniet eum quam quos vitae
            sequi molestiae. Facere quas perferendis distinctio obcaecati illo
            quisquam rerum reiciendis eveniet?
          </p>
        </DivGrid>
        {data.games[3].newest.edges.map((edge: Edges, idx: number) => {
          return <Game key={`${edge.node.url}${idx}`} game={edge.node} />;
        })}
      </Grid>

      <BetSection />
    </>
  );
}
