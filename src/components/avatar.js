import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

function Avatar(props) {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const { altText, title } = props;
  const styles = {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    marginRight: "15px"
  };
  return <Img style={styles} fluid={data.placeholderImage.childImageSharp.fluid} alt={altText} title={title} />;
}
export default Avatar;