type Testimonial = {
  quote: string;
};

type Props = {
  testimonials: Testimonial[];
};

export type TestimonialsProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Testimonials = (props: TestimonialsProps) => {
  const { testimonials } = {
    ...TestimonialsDefaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="px-[5%] pb-14 testimonial-padding">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 custom-grid-gap">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-start border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.05)] backdrop-blur-[6px] p-8 custom-testimonial-padding"
              style={{ alignSelf: "start" }} // Ensures each grid item adjusts naturally to its content height
            >
              <img
                src="/Icons/yellow-quote.svg"
                alt="Yellow Quote"
                className="mb-6"
              />
              <blockquote className="md:text-md text-white text-base font-semibold">
                {testimonial.quote}
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const TestimonialsDefaults: TestimonialsProps = {
  testimonials: [
    {
      quote:
        "“It’s been a few weeks since we last spoke, and I just wanted to let you know that Igor and Viktor are using Astro (the tutor). 👍 They say that everything is clear to them so far, although I don’t really know since I don’t understand it… but Viktor’s homeroom teacher called me last week to say that he has started participating enthusiastically. And when I talked to him, he said that he takes a picture of the exercise from the workbook, reads the explanation, then hears it again in school and remembers it even better. 😂😂 Looks like we’ll be saving on tutoring this year. 👍💪💙”",
    },
    {
      quote:
        "“Alex and I paid for the program for Maya, which you introduced to us. I admit, we were skeptical at first – you know, we don’t have much patience for studying, and you’re usually the one who helps us with that. What can I say, Maya got her first A in math on Thursday. He hugged us. He’s already into technology, and now I often catch him after work learning math instead of playing games. I can see he’s trying. His homework is done. If there’s something he doesn’t understand, he asks us, and we solve the problem together. Please thank the whole team for us.”",
    },
    {
      quote:
        "“I got that online tutor you told me about for the two little ones… Christian is yelling from his room, ‘Mom, look, this thing knows how to solve everything!’ 😂😂😂 Earlier, he told me he doesn’t need to go to school anymore because he’ll just learn from home with it 🤣🤣 The only problem is that he can’t cheat on his homework anymore because the program stops him and asks how he would continue 😂😂😂”",
    },
  ],
};

Testimonials.displayName = "Testimonials";
