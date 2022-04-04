import { useState } from "react";
import { Step } from "@mui/material";
import { TransTable, VocabGrid, Title, Ex, HoverBox } from "./LessonComponents";
import { Grid } from "@mui/material";
import { Dragger, Qtranslate1, Selecter } from "./TestComponents";

import { WORDS } from "./WORDS";
import { Studier } from "../Flashcards/Studier";

export const title = ["Tha, Chan eil"];

export const steps = [
  "Tha",
  "Other people",
  "Chan eil",
  "More adjectives",
  "Recap",
];

export const Recap = () => {
  console.log("test");
  return <StepContent step={steps.length} />;
};

export const StepContent = ({ step }) => {
  switch (step) {
    case 1:
      return (
        <div>
          <p>Let&rsquo;s start by learning four words:</p>
          <VocabGrid
            words={[
              "is/am/are",
              "tha",
              "me/I",
              "mi",
              "big",
              "mòr",
              "small",
              "beag",
            ]}
            helper={[
              <>
                The <i>th</i> in <i>tha</i> is pronounced like the english{" "}
                <i>h</i> - so <i>tha</i> is like <i>ha</i>.
              </>,
              <>
                Accents in Gaelic are pretty simple compared to a language like
                French - thèy ònly gò thìs wày - and all they do is{" "}
                <i>elongate</i> the vowel.
              </>,
              <>
                A <i>g</i> at the end of a word often sounds a bit like a{" "}
                <i>k</i> sound - <i>beag</i> is a bit like the English{" "}
                <i>beck</i>.
              </>,
              <>
                Sometimes you'll see a wee <i>m</i> next to words in the vocab
                lists - if you hover over that, you'll see a mnemonic to help
                you remember the word.
              </>,
            ]}
          />

          <p>
            But before we can make a sentence with them, we need to understand
            that the order that words go in when you&rsquo;re speaking Gaelic is
            a little different from English.
          </p>
          <p>
            In English, you would say:
            <br />
            <Ex en="I am big" />
          </p>
          <p>
            But in Gaelic, that same sentence would be:
            <br />
            <Ex gd="Tha mi mòr" />
          </p>
          <p>
            But the literal, word-for-word translation of this would be:
            <br />
            <Ex explainer="am I big" />
          </p>
          From time to time, we'll show you these kinds of literal,
          word-for-word translations of the Gaelic, to help you understand
          what's happening. For this sentence, that would look like:
          <br />
          <table className="word4word">
            <tr>
              <td>English:</td>
              <td>I</td>
              <td>am</td>
              <td>big</td>
            </tr>
            <tr className="gdTab">
              <td>Gaelic:</td>
              <td>tha</td>
              <td>mi</td>
              <td>mòr</td>
            </tr>
            <tr className="exTab">
              <td>Literal:</td>
              <td>am</td>
              <td>I</td>
              <td>big</td>
            </tr>
          </table>
          <p>
            So you see that in Gaelic, the verb comes before the subject. That
            will take a moment to get used to, but the good news is that
            it&rsquo;s like that in pretty much every construction in Gaelic, so
            it will be second nature before you know it.
          </p>
          <p>
            So if:
            <br />
            <Ex gd="Tha mi mòr" />
          </p>
          <p>
            <Ex en="I am big" />
          </p>
          <p>
            <br />
            And <b>beag</b> means <em>small</em>, can you work out the Gaelic
            for this?
            <br />
            <HoverBox en="I am small" gd="Tha mi beag" />
          </p>
          Now try putting these sentences in the right order:
          <Dragger
            sentence="tha mi beag"
            handleCorrect={() => {
              console.log("handling");
            }}
          />
          <Dragger sentence="tha thu mòr" />
          <Dragger sentence="tha thu beag" />
          <Dragger sentence="tha mi mòr" />
        </div>
      );
      break;
    case 2:
      return (
        <>
          <p>
            Let&rsquo;s start by learning a couple other words and common names:
          </p>
          <VocabGrid
            words={[
              "you",
              "thu",
              "Anne",
              "Anna",
              "John",
              "Iain",
              "Callum",
              "Calum",
              "Morag",
              "Mòrag",
            ]}
            helper={[
              <>
                I know I <i>just</i> told you that <i>th</i> was pronounced like{" "}
                <i>h</i>, but this one word - <i>thu</i> - is a bit of an exception. Here, it's totally silent - so <i>thu</i> is a lot
                more just look <i>oo</i>.
              </>,
              <>
                It might seem unusual at first, but in Gaelic it is pretty
                common for us to translate <i>names</i>, especially if there's a
                commonly-used Gaelic version of them.
              </>,
            ]}
          />

          <p>
            In English, as well as many other languages, verbs change their form
            depending on who or what they are attached to. So we have:
          </p>
          <span className="ex">
            <span className="engEx">
              I <i>am</i>
              <br />
              You <i>are</i>
              <br />
              She <i>is</i>
              <br />
              <i>etc</i>
            </span>
          </span>
          <p>
            In Gaelic, however, verbs are much, much simpler, and stay the same
            no matter who or what they refer to. That means that you can use the
            word <em>tha</em> to describe anyone or anything.
          </p>
          <Grid container className="transTable">
            <Grid item xs={6} className="transTableGd">
              Tha mi mòr
            </Grid>
            <Grid item xs={6} className="transTableEn">
              I am big
            </Grid>
            <Grid item xs={6} className="transTableGd">
              Tha thu beag
            </Grid>
            <Grid item xs={6} className="transTableEn">
              You are small
            </Grid>
            <Grid item xs={6} className="transTableGd">
              Tha Calum mòr
            </Grid>
            <Grid item xs={6} className="transTableEn">
              Callum is big
            </Grid>
          </Grid>
          <p>
            That means <em>tha</em> could be translated as <em>am</em>,{" "}
            <em>are</em>, or <em>is</em> depending on context. Much easier than
            English!
          </p>
        </>
      );
      break;
    case 3:
      return (
        <>
          <p>
            So we&rsquo;ve learned how to say someone or something <em>is</em>,
            but how do we say they <em>are not</em>?
          </p>
          <VocabGrid
            words={["isn't/aren't/am not", "chan eil"]}
            helper={[
              <>
                Two wee things here - firstly, the <i>ch</i> is pronounced like
                the <i>ch</i> in the Scottish word <i>loch</i>, or as in{" "}
                <i>Bach</i>.
              </>,
              <>
                And secondly, you might notice that the second word almost
                sounds like it starts with a <i>y</i> sound. We'll come across
                why that is more over time, but for now just rest assured you're
                not hearing things!
              </>,
            ]}
          />
          <p>
            Again this is really easy - you simply replace &ldquo;<em>tha</em>
            &rdquo; with &ldquo;<em>chan eil</em>&rdquo; - everything else about
            the sentence remains the same.
          </p>

          <TransTable
            words={[
              "Tha mi mòr",
              "I am big",
              "Chan eil mi mòr",
              "I am not big",
            ]}
          />

          <p>
            And just like with the word &lsquo;<em>tha</em>&rsquo;, this is the
            same no matter who or what you are talking about.
          </p>

          <TransTable
            words={[
              "Tha Anna beag",
              "Anna is small",
              "Chan eil Anna beag",
              "Anna is not small",
            ]}
          />

          <p>
            So just like <em>tha</em>, this means that <em>chan eil</em> cold be
            translated as <em>am not, are not</em> or <em>is not</em> depending
            on the context.
          </p>
        </>
      );
      break;
    case 4:
      return (
        <>
          <p>
            Now that we&rsquo;ve learned how to describe what something or
            someone <em>is</em> or <em>isn&rsquo;t</em>, it&rsquo;s time to
            learn a few more words. The good news is that you can just slot in
            any other adjective you like into this structure. Here are a couple
            more useful ones:
          </p>
          <VocabGrid
            words={["tired", "sgìth", "happy", "toilichte", "sad", "brònach"]}
            helper={[<>The <i>g</i> in <i>sgìth</i> sounds a little like a <i>k</i>, and then the accent on the <i>ì</i> makes it long, and the <i>th</i> is silent - so it comes out kind of like the English word <i>ski</i>.</>,
          <><i>Brònach</i> should make sense now - the <i>ò</i> is long, and the <i>ch</i> is like in <i>loch</i>.</>,
          <><i>Toilichte</i> is tricky. The <i>ch</i> is a little bit <i>further forward</i> in your mouth - but the best way to get it is to practice. You can open the <b>pronunciation center</b> using the tabs at the bottom of the page to hear it broken down and practice it yourself.</>
          ]}
          />

          <p>Now let's try these words out with a couple exercises:</p>

          <Dragger sentence="chan eil Anna sgìth" />
          <Dragger sentence="tha Calum toilichte" />
          <Dragger sentence="chan eil mi brònach" />
        </>
      );
      break;
    case 5:
      return (
        <>
          <div className="recapBox">
            <ul>
              <li aria-level="1">
                The word-order in Gaelic is different to English, and for the
                sentences we&rsquo;ve looked at here goes{" "}
                <em>verb-subject-adjective</em> (as opposed to English, which is{" "}
                <em>subject-verb-adjective)</em>
              </li>
              <li aria-level="1">
                The verb <em>tha</em> doesn&rsquo;t change depending on the
                person or thing
              </li>
              <li>
                The negative version of <em>tha</em> is <em>chan eil</em>, but
                everything else about the sentence stays the same
              </li>
            </ul>
          </div>
        </>
      );
      break;
    default:
      return <></>;
  }
};

export const Content = ({ step }) => {
  return (
    <>
      <StepContent step={step} />
    </>
  );
};

export const Questions = () => {
  return (
    <>
      <h3>
        Let's start by practicing the vocabulary we've learned in this level:
      </h3>
      <Studier words={WORDS.filter((word) => word.lesson == 1)[0].words} />
      <h3>Translate from Gaelic to English:</h3>
      <Qtranslate1
        Q="Tha mi beag"
        A={["I am small", "I'm small"]}
        handleCorrect={() => console.log("handling correct")}
      />
      <Qtranslate1
        Q="Chan eil Anna brònach"
        A={["Anna isn't sad", "Anna's not sad", "Anna is not sad"]}
      />
      <Qtranslate1 Q="Tha mi mòr`" A={["I am big", "I'm big"]} />
      <Qtranslate1
        Q="Chan eil Iain sgìth"
        A={["Iain isn't tired", "Iain's not tired", "Iain is not tired"]}
      />
      <Qtranslate1 Q="Tha Mòrag beag" A={["Morag is small", "Mòrag's small"]} />
      <h3>Translate from English to Gaelic:</h3>
      <Qtranslate1 Q="I am tired" A={["Tha mi sgìth"]} />
      <Qtranslate1 Q="I am not small" A={["Chan eil mi beag"]} />
      <Qtranslate1 Q="Morag isn't big" A={["Chan eil Mòrag mòr"]} />
      <Qtranslate1 Q="Iain is small" A={["Tha Iain beag"]} />
      <Qtranslate1 Q="Anna isn't sad" A={["Chan eil Anna brònach"]} />
    </>
  );
};
