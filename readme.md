# Introduction

This code is based on the tutorial on Vue and webpack that is found here: https://skyronic.com/blog/vue-project-scratch that sets up a webpack solution for vue.

In extension it then looks at this tutorial: https://vue-loader.vuejs.org/en/workflow/testing-with-mocks.html to look at how mocks can be used in a vue project.

# Quirks

For the tutorial to work properly some extra things were needed:

I needed to add a resolve section in my webpack.config, so that I used the standalone build of Vue and not the runtime build, because with the latter Vue doesn't handle compiling templates in runtime.

I also needed to stop querying based on body when I initialize Vue, and instead use a div tag inside of body. This is because Vue doesn't allow replace on body or html alone.
