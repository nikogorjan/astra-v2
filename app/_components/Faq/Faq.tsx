import {
  Accordion,
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
} from "@relume_io/relume-ui";
import { RxChevronDown } from "react-icons/rx";

type QuestionsProps = {
  title: string;
  answer: string;
};

type Props = {
  questions: QuestionsProps[];
};

export type FaqProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Faq = (props: FaqProps) => {
  const { questions } = {
    ...FaqDefaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="px-[5%] py-8 md:py-14">
      <div className="container max-w-[920px]">
        <h2 className="text-[28px] md:text-[56px] font-bold leading-[28px] md:leading-[64px] text-center mb-4 md:mb-8">
          Frequently Asked Questions{" "}
          <span className="text-[#FDB300]">Questions</span>
        </h2>
        <Accordion
          type="multiple"
          className="grid items-start justify-stretch gap-3"
        >
          {questions.map((question, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.05)] px-5 md:px-6"
            >
              <AccordionTrigger
                icon={
                  <RxChevronDown className="size-2 shrink-0 text-text-alternative transition-transform duration-300 md:size-8" />
                }
                className="md:py-5 md:text-sm leading-[160%] [&[data-state=open]>svg]:rotate-180 font-semibold text-left"
              >
                {question.title}
              </AccordionTrigger>
              <AccordionContent className="md:pb-6 text-[#d9d9d9] leading-[160%] mr-8">
                {question.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export const FaqDefaults: FaqProps = {
  questions: [
    {
      title: "Can I cancel my subscription to Astra AI at any time?",
      answer:
        "Yes, you can cancel your subscription at any time without any costs. Access to the paid version will remain available for the period of the pre-paid subscription.",
    },
    {
      title: "Can I use Astra AI to learn other subjects?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      title: "Who is Astra AI suitable for?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      title: "How does Astra AI differ from Chat GPT?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      title: "How does Astra AI differ from Photomath?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      title:
        "How can I access the paid version of Astra AI if I cannot afford it?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
  ],
};

Faq.displayName = "Faq";
