import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';


const BlogPage = ({data}) => (
    
    <Layout pageTitle={"Blog"}>
        {
            data.allMdx.nodes.map(({frontmatter, body}) => (
                <article>
                    <h2>{frontmatter.title}</h2>
                        <p>Posted: {frontmatter.date}</p>
                        <MDXRenderer>
                            {body}
                        </MDXRenderer> 
                </article>
                
            ))
        }
    </Layout>
)

export const query = graphql`
query  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date
          title
        }
        id
        body
      }
    }
  }
`

export default BlogPage;