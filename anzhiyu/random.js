var posts=["post/8614768.html","post/56a1db5a.html","post/573d9824.html","post/3038d3bd.html","post/f29265a7.html","post/undefined.html","post/dae9c85.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };