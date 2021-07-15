module.exports = {
    proxy: {
        prefix: "/api",
        url: "http://localhost:3000",
    },
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "client",
    },
    plugins: ["gatsby-plugin-sass"],
};
