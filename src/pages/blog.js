import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../components/layout'


const BlogPage = ({data}) => (
    
    <Layout pageTitle={"Blog"}>
        <ul>
            {
                data.allFile.nodes.map(node => <li>{node.name}</li>)
            }
        </ul>
       
    </Layout>
)

export const query = graphql`
query  {

    allFile {
      nodes {
        name
      }
    }
  }
`

export default BlogPage;