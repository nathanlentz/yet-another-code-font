import React from "react";
import { graphql } from 'gatsby';

import Layout from "../components/layout";
import SEO from "../components/seo";
import FontCard from "../components/font-card";

function IndexPage(props) {
  const fonts = props.data.allFontsCollection.nodes[0].fonts.map(x => {
    return <FontCard 
              key={x.id}
              name={x.name}
              description={x.description}
              url={x.url}
              image={x.image}
              price={x.price}
            />
  });

  return (
    <Layout>
      <SEO title="Fonts" />
      <section className="font-cards">
        {fonts}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query FontsQuery {
    allFontsCollection {
      nodes {
        fonts {
          id
          description
          name
          image
          price
          url
        }
      }
    }
  }`;


export default IndexPage;
