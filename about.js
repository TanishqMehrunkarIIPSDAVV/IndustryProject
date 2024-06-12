function animateWhenVisible(class_name, time, till) {
  const element = document.getElementById(class_name);
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let counts = setInterval(updated, time);
        let upto = 0;

        function updated() {
          element.innerHTML = ++upto;
          if (upto === till) {
            clearInterval(counts);
            observer.unobserve(element);
          }
        }
      }
    });
  }, options);

  observer.observe(element);
}


animateWhenVisible("counter", 30, 15);
animateWhenVisible("counter2", 25, 19);

