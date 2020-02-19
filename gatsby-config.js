module.exports = {
  siteMetadata: {
    title: "Raz Gvili",
    author: "Raz Gvili",
    description: "A simple portfolio"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'AboutRaz',
        short_name: 'AboutRaz',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        features: {
          auth: false,       
          database: false,  
          firestore: false,
          storage: false,    
          messaging: false, 
          functions: false,  
          performance: false,
          analytics: true,
        },
        credentials: {
          apiKey: "AIzaSyAxVVjUbV1-qtkIS7N46UkCgkvAS23-UZ4",
          authDomain: "aboutraz.firebaseapp.com",
          databaseURL: "https://aboutraz.firebaseio.com",
          projectId: "aboutraz",
          storageBucket: "aboutraz.appspot.com",
          messagingSenderId: "800528552573",
          appId: "1:800528552573:web:b9af58131ffb563f4f9714",
          measurementId: "G-LJFM2BNC87"
        }
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: '1695743',
        sv: '6'
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
