const addComment = () => {
  const comment = document.createElement('likebal-comment');
  comment.text = 'Education never ends, Watson. It is a series of lessons with the greatest for the last.';
  comment.author = 'sherlock_holmes';
  comment.likes = '12';
  comment.liked = true;
  document.body.appendChild(comment);
}
