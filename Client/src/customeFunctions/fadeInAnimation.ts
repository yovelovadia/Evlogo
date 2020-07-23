function fadeInAnimation(): void {
  const faders: NodeListOf<Element> = document.querySelectorAll(".fadeIn");

  const appearOptions: {
    threshhold: number;
    rootMargin: string;
  } = { threshhold: 1, rootMargin: "0px 0px -300px 0px" };

  const appearOnScroll: IntersectionObserver = new IntersectionObserver(
    function (entries, appearOnScroll) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear");
          appearOnScroll.unobserve(entry.target);
        }
      });
    },
    appearOptions
  );

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
}

export default fadeInAnimation;
