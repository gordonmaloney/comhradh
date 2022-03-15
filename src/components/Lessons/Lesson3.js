import { Step } from "@mui/material";

export const steps = [
  "Doing words",
  "More verbs",
  "Cat, a cat",
  "Some things",
  "Recap",
];

export const title = "Doing words - verbal nouns";

export const StepContent = ({ step }) => {
  console.log("step: ", step);
  switch (step) {
    case 1:
      return (
        <div>
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
          <table>
            <tbody>
              <tr>
                <td>
                  <p>eating</p>
                </td>
                <td>
                  <p>ag ithe</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>drinking</p>
                </td>
                <td>
                  <p>ag &ograve;l</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Reading</p>
                </td>
                <td>
                  <p>a' leughadh</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Writing</p>
                </td>
                <td>
                  <p>a' sgr&igrave;obhadh</p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <br />
            <br />
            <br />
          </p>
          <p>
            The good news with these is that they go into sentences just like
            adjectives do, so if:
          </p>
          <p>
            <em>I am </em>
            <em>
              tired
              <br />
            </em>
            Is
            <br />
            <em>Tha mi </em>
            <em>sg&igrave;th</em>
          </p>
          <p>
            Then:
            <br />
            <em>I am </em>
            <em>
              eating
              <br />
            </em>
            Is simply:
            <br />
            <em>Tha mi </em>
            <em>ag ithe</em>
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
            <em>the, a</em>
            <strong>
              <em>g &ograve;</em>
            </strong>
            <em>l), </em>but <em>a&rsquo;</em> if the verbal noun starts with a
            consonant (<em>a</em>
            <strong>
              <em>&rsquo;</em>
            </strong>{" "}
            <strong>
              <em>l</em>
            </strong>
            <em>eughadh, a</em>
            <strong>
              <em>&rsquo;</em>
            </strong>{" "}
            <strong>
              <em>s</em>
            </strong>
            <em>gr&igrave;obhadh).</em>
          </p>
          <p>
            <br />
            This rule is identical to the English article <em>a</em> - we have{" "}
            <em>a</em> <em>banana, </em>but <em>a</em>
            <strong>
              <em>n a</em>
            </strong>
            <em>pple</em>.
          </p>
        </div>
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
          <table>
            <tbody>
              <tr>
                <td>
                  <p>Walking</p>
                </td>
                <td>
                  <p>a' coiseachd</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>sleeping</p>
                </td>
                <td>
                  <p>a' cadal</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Waiting</p>
                </td>
                <td>
                  <p>a' feitheamh</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Understanding</p>
                </td>
                <td>
                  <p>a' tuigsinn</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>helping</p>
                </td>
                <td>
                  <p>a' cuideachadh</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>cleaning</p>
                </td>
                <td>
                  <p>a' glanadh</p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Let&rsquo;s practice these with some translation exercises - first
            from Gaelic to English, then from English to Gaelic:
          </p>
          <ol>
            <li aria-level="1">Chan eil iad a&rsquo; cadal</li>
            <li aria-level="1">Tha sibh a&rsquo; cuideachadh</li>
            <li aria-level="1">Nach eil e a&rsquo; glanadh?</li>
            <li aria-level="1">Chan eil i a&rsquo; leughadh</li>
            <li aria-level="1">A bheil mi a&rsquo; tuigsinn?</li>
          </ol>
          <ol>
            <li aria-level="1">I am walking</li>
            <li aria-level="1">They are writing</li>
            <li aria-level="1">She is not helping</li>
            <li aria-level="1">Are we drinking?</li>
            <li aria-level="1">She is waiting</li>
          </ol>
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
          <table>
            <tbody>
              <tr>
                <td>
                  <p>water</p>
                </td>
                <td>
                  <p>water (m)</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>cat</p>
                </td>
                <td>
                  <p>cat (m)</p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            In English, there are two <em>types</em> of articles, and some words
            don&rsquo;t always need an article. So we can say:
            <br />
            Water - no article
          </p>
          <p>
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
          <table>
            <tbody>
              <tr>
                <td>
                  <p>food</p>
                </td>
                <td>
                  <p>biadh (m)</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>book</p>
                </td>
                <td>
                  <p>leabhar (m)</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>house</p>
                </td>
                <td>
                  <p>taigh (m)</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>man/person</p>
                </td>
                <td>
                  <p>duine (m)</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>friend</p>
                </td>
                <td>
                  <p>caraid (m)</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>dog</p>
                </td>
                <td>
                  <p>c&ugrave; (m)</p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            The little (m) next to the these words indicate that they&rsquo;re
            all <em>masculine</em> nouns - don&rsquo;t worry about that for now,
            but we&rsquo;ll see why that matters down the line.
          </p>
          <p>
            We&rsquo;ve already learned how these words can mean both <em>a</em>
            <em> thing</em>, or just <em>thing</em>, so now we can start seeing
            how they work in sentences. You&rsquo;ll see that it really is just
            as simple as replacing the <em>subject </em>(the person or thing
            doing the action) with a different noun:
          </p>
          <p>
            <em>Tha duine a&rsquo; glanadh</em> -{" "}
            <em>
              A man is cleaning
              <br />
            </em>
            <em>
              Tha c&ugrave; a&rsquo; cadal - A dog is sleeping
              <br />
            </em>
            <em>Tha caraid a&rsquo; cuideachadh - A friend is helping</em>
          </p>
        </>
      );
      break;
    case 5:
      return (
        <>
          <ul>
            <li aria-level="1">
              Verbal nouns - the <em>doing</em> form of a verb - start with{" "}
              <em>ag</em> before a vowel and <em>a&rsquo; </em>before a
              consonant
            </li>
            <li aria-level="1">
              In Gaelic, there&rsquo;s no equivalent of the English article
              &ldquo;<em>a</em>&rdquo; or &ldquo;<em>an</em>&rdquo;, we simply
              say the noun
            </li>
          </ul>
        </>
      );
    default:
      return "something has gone wrong!";
  }
};

export const Content = ({ step }) => <StepContent step={step} />;
