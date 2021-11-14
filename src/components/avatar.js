import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

function Avatar(props) {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, height: 500)
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
  return <GatsbyImage style={styles} image={data.placeholderImage.childImageSharp.gatsbyImageData} alt={altText} title={title} />;
}
export default Avatar;