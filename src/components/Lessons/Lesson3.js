import { Step } from "@mui/material";
import {
  TransTable,
  VocabGrid,
  Title,
  Ex,
  HoverBox,
  Table,
  MathBox,
} from "./LessonComponents";
import { Dragger, Qtranslate1, Selecter } from "./TestComponents";

import { WORDS } from "./WORDS";
import { Studier } from "../Flashcards/Studier";

export const Recap = () => {
  return <StepContent step={steps.length} />;
};

export const title = "Doing words - verbal nouns";

export const steps = [
  "Doing words",
  "More verbs",
  "Cat, a cat",
  "Some things",
  "Recap",
];

export const StepContent = ({ step }) => {
  console.log("step: ", step);
  switch (step) {
    case 1:
      return (
        <>
          <p>
            We&rsquo;re going to dip our toes into some more verbs here.
            We&rsquo;ll go into it in more detail later, but{" "}
            <em>technically</em> these are what are called &lsquo;verbal
            nouns&rsquo;. You&rsquo;ll see why that distinction matters
            eventually, but for now think of them as the <em>-ing </em>form of
            English verbs: <em>doing, eating, playing</em> etc.
          </p>
          <p>
            Let&rsquo;s learn a couple so we can start building sentences with
            them:
          </p>

          <VocabGrid
            words={[
              "eating",
              "ag ithe",
              "drinking",
              "ag òl",
              "reading",
              "a' leughadh",
              "writing",
              "a' sgrìobhadh",
            ]}
          />

          <p>
            The good news with these is that they go into sentences just like
            adjectives do, so if:
          </p>
          <p>
            <Ex en="I am tired" />
          </p>
          <p>...is</p>
          <p>
            <Ex gd="Tha mi sgìth" />
          </p>
          <p>Then:</p>
          <p>
            <Ex en="I am eating" />
          </p>
          <p>...is simply:</p>
          <p>
            <Ex gd="Tha mi ag ithe" />
          </p>
          <p>
            You will notice that some verbal nouns start with <em>ag</em> and
            some start with <em>a&rsquo;</em>. Gaelic is a beautiful, flowing
            language, and a lot of the grammar is designed around ease of
            speaking. We&rsquo;ll come across that more and more as we go, but
            the rule here is that if the verbal noun starts with a vowel, it has{" "}
            <em>ag</em> before it (a<strong>g</strong>{" "}
            <strong>
              <em>i</em>
            </strong>
            <em>
              the, a<strong>g &ograve;</strong>l),{" "}
            </em>
            but <em>a&rsquo;</em> if the verbal noun starts with a consonant (
            <em>
              a<strong>&rsquo;</strong>
            </em>{" "}
            <strong>
              <em>l</em>
            </strong>
            <em>
              eughadh, a<strong>&rsquo;</strong> <strong>s</strong>
              gr&igrave;obhadh).
            </em>
          </p>
          <p>
            This rule is a lot like the English article <em>a</em> - we have{" "}
            <em>a banana, </em>but{" "}
            <em>
              a<strong>n a</strong>pple
            </em>
            .
          </p>

          <p>Try your hand at this by picking the correct option:</p>

          <Selecter
            text="Tha sibh "
            options={["ag", "a'"]}
            correct="a'"
            textCont=" sgrìobhadh."
          />

          <Selecter
            text="Chan eil Iain "
            options={["ag", "a'"]}
            correct="ag"
            textCont=" òl."
          />

          <Selecter
            text="Nach eil sinn "
            options={["ag", "a'"]}
            correct="a'"
            textCont=" leughadh?"
          />

          <Selecter
            text="A bheil e "
            options={["ag", "a'"]}
            correct="ag"
            textCont=" ithe?"
          />
        </>
      );
      break;
    case 2:
      return (
        <>
          <p>
            The good news is that now that you know this structure, you can slot
            in <strong>a ton</strong> more verbs into that structure.
            Let&rsquo;s learn a bunch and then practice with them.
          </p>
          <VocabGrid
            words={[
              "walking",
              "a' coiseachd",
              "sleeping",
              "a' cadal",
              "waiting",
              "a' feitheamh",
              "understanding",
              "a' tuigsinn",
              "helping",
              "a' cuideachadh",
              "cleaning",
              "a' glanadh",
            ]}
          />

          <p>Let&rsquo;s practice these with some translation exercises.</p>

          <h3>First from Gaelic to English:</h3>
          <Qtranslate1
            Q="Chan eil iad a' cadal"
            A={[
              "They aren't sleeping",
              "They are not sleeping",
              "They're not sleeping",
            ]}
          />

          <Qtranslate1
            Q="Tha sibh a' cuideachadh"
            A={["You're helping", "You are helping"]}
          />

          <Qtranslate1
            Q="Nach eil e a' glanadh?"
            A={["Isn't he cleaning?", "Is he not cleaning?"]}
          />

          <Qtranslate1
            Q="Chan eil i a' leughadh"
            A={["She is not reading", "She's not reading", "She isn't reading"]}
          />

          <Qtranslate1
            Q="A bheil mi a' tuigsinn?"
            A={["Am I understanding?", "Do I understand?"]}
          />

          <h3>Then from English to Gaelic:</h3>

          <Qtranslate1 Q="I am walking" A={["Tha mi a' coiseachd"]} />
          <Qtranslate1 Q="Tha iad a' sgrìobhadh" A={["They are writing"]} />
          <Qtranslate1
            Q="She is not helping"
            A={["Chan eil i a' cuideachadh"]}
          />
          <Qtranslate1 Q="A bheil sinn ag òl?" A={["Are we drinking?"]} />
          <Qtranslate1 Q="She is waiting" A={["A bheil i a' feitheamh?"]} />
        </>
      );
      break;
    case 3:
      return (
        <>
          <p>
            Before we go on, there&rsquo;s an important grammatical difference
            between English and Gaelic that we need to explore. To illustrate
            it, we&rsquo;re going to learn two words:
          </p>
          <VocabGrid words={["water", "uisge", "cat", "cat"]} />
          <p>
            In English, there are two <em>types</em> of articles, and some words
            don&rsquo;t always need an article. So we can say:
          </p>
          <p>
            Water - <em>no </em>article
            <br />
            <em>The</em> water - <em>definite </em>article (the)
            <br />
            <em>A</em> cat - <em>indefinite</em> article (a)
            <br />
            <em>The</em> cat - <em>definite</em> article (the)
          </p>
          <p>Complicated!</p>
          <p>
            The good news is that Gaelic has no <em>indefinite</em> article at
            all. That means the word <em>cat</em> means both, well, <em>cat</em>
            , and <em>a</em>
            <em> cat.</em> That will feel a little odd at first, but before long
            it&rsquo;ll become second nature. In fact, lots of languages
            don&rsquo;t have any articles at all and they manage fine!
          </p>
        </>
      );
      break;
    case 4:
      return (
        <>
          <p>
            We&rsquo;ve learned some pronouns and some names already, but to
            build our vocabulary we need to start learning nouns. Here&rsquo;s a
            bunch for us to get started:
          </p>
          <VocabGrid
            words={[
              "food",
              "biadh",
              "book",
              "leabhar",
              "house",
              "taigh",
              "man",
              "duine",
              "friend",
              "caraid",
              "dog",
              "cù",
            ]}
          />

          <p>
            So far all the words we've learned are all <em>masculine</em> nouns
            - don&rsquo;t worry about that for now, but we&rsquo;ll see why that
            matters down the line.
          </p>
          <p>
            We&rsquo;ve already learned how these words can mean both <em>a</em>
            <em> thing</em>, or just <em>thing</em>, so now we can start seeing
            how they work in sentences. You&rsquo;ll see that it really is just
            as simple as replacing the <em>subject </em>(the person or thing
            doing the action) with a different noun:
          </p>
          <Ex gd="Tha duine a' glanadh" explainer="A man is cleaning" />

          <Ex gd="Tha cù a' cadal" explainer="A dog is sleeping" />

          <Ex gd="Tha caraid a' cuideachadh" explainer="A friend is helping" />
        </>
      );
      break;
    case 5:
      return (
        <div className="recapBox">
          <ul>
            <li>
              Verbal nouns start with <em>ag</em> before a vowel and{" "}
              <em>a&rsquo; </em>before a consonant
            </li>
            <li aria-level="1">
              In Gaelic, there&rsquo;s no equivalent of the English article
              &ldquo;<em>a</em>&rdquo; or &ldquo;<em>an</em>&rdquo;, we simply
              say the noun
            </li>
          </ul>
        </div>
      );
      break;

    default:
      return <></>;
  }
};

export const Content = ({ step }) => <StepContent step={step} />;

export const Questions = () => {
  return (
    <>
      <h3>
        Let's start by practicing the vocabulary we've learned in this level:
      </h3>
      <Studier words={WORDS.filter((word) => word.lesson == 3)[0].words} />

      <h3>Now put these sentences in order:</h3>

      <Dragger sentence="chan eil mi a' cadal" />
      <Dragger sentence="tha cat ag òl" />
      <Dragger sentence="a bheil duine a' leughadh?" />
      <Dragger sentence="chan eil caraid a' cuideachadh!" />
      <Dragger sentence="tha cù a' feitheamh" />

    </>
  );
};
