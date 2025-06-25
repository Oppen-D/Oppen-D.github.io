var posts=["post/573d9824.html","post/56a1db5a.html","post/dae9c85.html","post/f29265a7.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };