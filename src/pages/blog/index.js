import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../../components/layout';


const BlogPage = ({data}) => (
    
    <Layout pageTitle={"Blog"}>
        {
            data.allMdx.nodes.map(({frontmatter, body, slug, id}) => (
                <article key={id}>
                    <Link to={`/blog/${slug}`}>{frontmatter.title}</Link>
                        <p>Posted: {frontmatter.date}</p>

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
        slug
      }
    }
  }
`

export default BlogPage;