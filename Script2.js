var author = "PIYUSH";
  var other = document.getElementsByTagName('li');
  for (var i=0;i<other.length;i++) {
    if (other[i].className.toLowerCase()=='author') author=other[i].getElementsByTagName('a')[0].innerHTML;
  }
  alert(NO-COPY)
}
