import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

const BlogTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <div>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>
      <h1>{frontmatter.title}</h1>
      <p><strong>Date: {frontmatter.date}</strong></p>
      <div className="blog-post-content" dangerouslySetInnerHTML={{__html: html}} />
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html,
      frontmatter {
        date(formatString: "MMMM DD, YYYY"),
        path,
        title
      }
    }
  }
`

export default BlogTemplate;
