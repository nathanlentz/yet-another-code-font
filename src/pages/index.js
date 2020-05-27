import React from "react";
import { graphql } from 'gatsby';

import Layout from "../components/layout";
import SEO from "../components/seo";
import FontCard from "../components/font-card";

function IndexPage(props) {
  const fonts = props.data.allFontsCollection.nodes[0].fonts.map(x => {
    return <FontCard 
              key={x.name}
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
      <div style={{
        marginBottom: `30px`
      }}>
        <h1>Yet Another Code Font</h1>
        <p>A collection of fonts for use in daily programming.</p>
      </div>
      <section className="font-cards">
        <div style={{
          display: 'flex',
          justifyContent: 'flex-start',
          flexWrap: 'wrap'
        }}>
          {fonts}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query FontsQuery {
    allFontsCollection {
      nodes {
        fonts {
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
