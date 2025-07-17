var posts=["post/573d9824.html","post/8614768.html","post/5b8bfab9.html","post/56a1db5a.html","post/f3c80c6e.html","post/3038d3bd.html","post/dae9c85.html","post/f29265a7.html","post/undefined.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };