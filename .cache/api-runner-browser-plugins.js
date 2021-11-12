module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-fontawesome-css/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[{"resolve":"/Users/evc1996/githubio/gatsby-starter-minimal-blog/node_modules/gatsby-remark-images","id":"cbd6a20a-6992-5a3e-979d-55e9255a9bfa","name":"gatsby-remark-images","version":"3.3.30","pluginOptions":{"plugins":[],"maxWidth":960,"quality":90,"linkImagesToOriginal":false},"nodeAPIs":[],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]}],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images","options":{"maxWidth":960,"quality":90,"linkImagesToOriginal":false}}]},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":960,"quality":90,"linkImagesToOriginal":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-theme-ui/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Elaina - array-of-light","short_name":"array-of-light","description":"A blog about Elaina's adventures.","start_url":"/","background_color":"#fff","theme_color":"#6B46C1","display":"standalone","icons":[{"src":"/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/android-chrome-512x512.png","sizes":"512x512","type":"image/png"}],"cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":null},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
