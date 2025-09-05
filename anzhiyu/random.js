var posts=["post/f3c80c6e.html","post/c1b18207.html","post/5b8bfab9.html","post/573d9824.html","post/d8cbea87.html","post/8614768.html","post/56a1db5a.html","post/6e5c3ba8.html","post/ae4c1a33.html","post/f29265a7.html","post/3038d3bd.html","post/849df229.html","post/dae9c85.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };