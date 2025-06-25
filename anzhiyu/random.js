var posts=["post/56a1db5a.html","post/f29265a7.html","post/573d9824.html","post/dae9c85.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };