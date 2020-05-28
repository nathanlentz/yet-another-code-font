import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Editor from '../components/editor';

function Playground(props) {

    return (
        <Layout>
            <SEO title="Playground" />
            <Editor />
        </Layout>
    )
}

export default Playground;