$(function () {
    count = 0;
    headingArray = ["My main areas of expertise.",
                    "What Frameworks do I know?",
                    "I am a Software Engineer"]
    wordsArray = ["Typescript, Node.js, HTML, CSS, Python, JAVA",
                  "I have more than a years experience with the Angular Framework",
                  "I am Currently a full-stack developer and have some experience in design."];
    setInterval(function () {
      count++
      $('#heading').fadeOut(400, function () {
          $(this).text(headingArray[count % headingArray.length]).fadeIn(400);
      });
      $('#word').fadeOut(400, function () {
          $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
      });
    }, 4000);
  })

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
