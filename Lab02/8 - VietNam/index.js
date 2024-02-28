const pageAudio = document.getElementById("page_audio");
pageAudio.volume = 0.1;

const loadHandler = (id) => {
  const ele = document.getElementById(id);
  ele.before(ele.contentDocument.body.children[0] || ele.contentDocument);
  ele.remove();
}
