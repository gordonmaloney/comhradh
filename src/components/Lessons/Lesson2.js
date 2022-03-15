import { Step } from "@mui/material";

export const steps = [
  "A bheil…?",
  "Nach eil…?",
  "More people",
  "Doing words",
  "Joining words",
  "Recap",
];

export const title = "Questions"

export const StepContent = ({ step }) => {
  console.log("step: ", step);
  switch (step) {
    case 1:
      return (
        <div>
          <p>
            In the last lesson, we learnt that <em>tha</em> means{" "}
            <em>am, are </em>and <em>is, </em>and that <em>chan eil</em> means{" "}
            <em>am not, are not, </em>and<em> is not</em>. Now we will learn how
            to ask questions.
          </p>
          <p>
            The important thing to remember here is that the word-order still
            doesn&rsquo;t change - the verb still comes before the subject -
            it&rsquo;s just that we have special forms of the verb to indicate
            that it&rsquo;s a question.
          </p>
          <p>
            The question form of <em>tha</em> is <em>a bheil</em> - so that
            could be translated as <em>is&hellip;?, am&hellip;? </em>or{" "}
            <em>are&hellip;?</em>
          </p>
          <p>This is easiest to demonstrate with some examples:</p>
          <p>Tha mi m&ograve;r - I am big</p>
          <p>A bheil mi m&ograve;r - Am I big?</p>
          <p>Tha Calum sg&igrave;th - Callum is tired</p>
          <p>A bheil Calum sg&igrave;th? - Is Callum tired? </p>
        </div>
      );
      break;
    case 2:
      return (
        <>
          <p>
            Just like <em>a bheil</em> is the question form of <em>tha</em>, we
            have a question form of <em>chan eil</em>: <em>nach eil</em>.
          </p>
          <p>Again, this is easiest to demonstrate with examples.</p>
          <p>Chan eil mi beag - I am not small</p>
          <p>Nach eil mi beag? Am I not small?</p>
          <p>Chan eil Anna br&ograve;nach - Anna is not sad</p>
          <p>Nach eil Anna br&ograve;nach? Isn&rsquo;t Anna sad?</p>
          <p>
            So we&rsquo;ve learnt four forms of the verb <em>to be</em>, for
            positive and negative and for statements and questions. We can
            capture this in a neat wee graph:
          </p>
          <table width="620">
            <tbody>
              <tr>
                <td>
                  <p>
                    <em>To be</em>
                  </p>
                </td>
                <td>
                  <p>! (statement)</p>
                </td>
                <td>
                  <p>? (question)</p>
                </td>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li>(positive)</li>
                  </ul>
                </td>
                <td>
                  <p>Tha</p>
                </td>
                <td>
                  <p>A bheil?</p>
                </td>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li>(negative)</li>
                  </ul>
                </td>
                <td>
                  <p>Chan eil</p>
                </td>
                <td>
                  <p>Nach eil?</p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            We will be coming across charts like this a lot, because most verbs
            in Gaelic conform to a very similar structure - though it is worth
            noting here that <em>tha</em> is very irregular, and that for most
            verbs the forms are much more predictable.
          </p>
        </>
      );
      break;
    case 3:
      return (
        <>
          <p>
            We learnt <em>I</em> and <em>you</em> in the last lesson. Now
            let&rsquo;s learn the other pronouns:
          </p>
          <p>
            E - he
            <br />I - she
            <br />
            Sinn - we
            <br />
            Sibh - you (plural, formal)
            <br />
            Iad - they
          </p>
          <p>
            Just like with the pronouns and names we&rsquo;ve already learnt,
            these pronouns fit into sentences in exactly the same way - they
            don&rsquo;t change the word order or any of the other words in the
            sentence.
          </p>
          <p>So if:</p>
          <p>
            <em>Tha mi sg&igrave;th</em>
          </p>
          <p>
            Means:
            <br />
            <em>I am tired</em>
          </p>
          <p>
            Can you work out how to say:
            <br />
            <em>We are tired</em>
          </p>
          <p>
            What about:
            <br />
            <em>She is happy</em>
          </p>
          <p>
            Or:
            <br />
            <em>They are not sad</em>
          </p>
          <p>
            Or:
            <br />
            <em>Is he small?</em>
          </p>
          <p>
            Or:
            <br />
            <em>Aren&rsquo;t we big?</em>
          </p>
        </>
      );
      break;
    case 4:
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
          <p>Ag ithe - eating</p>
          <p>Ag &ograve;l - drinking</p>
          <p>A&rsquo; leughadh - reading</p>
          <p>A&rsquo; sgr&igrave;obhadh - writing</p>
          <p>
            The good news with these is that they go into sentences just like
            adjectives do, so if:
          </p>
          <p>
            <em>
              I am <u>tired</u>
            </em>
          </p>
          <p>Is</p>
          <p>
            <em>
              Tha mi <u>sg&igrave;th</u>
            </em>
          </p>
          <p>Then:</p>
          <p>
            <em>
              I am <u>eating</u>
            </em>
          </p>
          <p>Is simply:</p>
          <p>
            <em>
              Tha mi <u>ag &ograve;l</u>
            </em>
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
            This rule is identical to the English article <em>a</em> - we have{" "}
            <em>a banana, </em>but{" "}
            <em>
              a<strong>n a</strong>pple
            </em>
            .
          </p>
        </>
      );
      break;
    case 5:
      return (
        <>
          <p>
            Lastly for this lesson, we&rsquo;re going to learn a handful of very
            useful words to allow us to make more interesting sentences:
          </p>
          <p>
            Ach - but
            <br />
            Agus - and
            <br />
            Oir - because
          </p>
          <p>
            We&rsquo;ll come across some joining words that <em>do</em> affect
            the other parts of the sentence, but these ones don&rsquo;t. That
            means you can use them to just connect to sentences easily:
          </p>
          <p>
            Tha mi sg&igrave;th - I am tired
            <br />+<br />
            Tha mi ag &ograve;l - I am drinking
            <br />=<br />
            Tha mi sg&igrave;th <strong>oir </strong>tha mi ag &ograve;l - I am
            tired because I am drinking
          </p>
          <p>
            Chan eil mi iad ag ithe - they are not eating
            <br />+<br />
            Tha iad ag &ograve;l - they are drinking
            <br />=<br />
            Chan eil iad ag ithe <strong>ach</strong> tha iad ag &ograve;l
          </p>
          <p>
            Tha Calum a&rsquo; leughadh - Callum is reading
            <br />+<br />
            Tha e br&ograve;nach - he is sad
            <br />=<br />
            Tha Calum a&rsquo; leughadh agus tha e br&ograve;nach - Callum is
            reading and he is sad
          </p>
        </>
      );
    case 6:
      return (
        <>
          <ul>
            <li>
              The verb <em>to be</em> can be represented by this chart:
            </li>
          </ul>
          <table width="620">
            <tbody>
              <tr>
                <td>
                  <p>
                    <em>To be</em>
                  </p>
                </td>
                <td>
                  <p>! (statement)</p>
                </td>
                <td>
                  <p>? (question)</p>
                </td>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li>(positive)</li>
                  </ul>
                </td>
                <td>
                  <p>Tha</p>
                </td>
                <td>
                  <p>A bheil?</p>
                </td>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li>(negative)</li>
                  </ul>
                </td>
                <td>
                  <p>Chan eil</p>
                </td>
                <td>
                  <p>Nach eil?</p>
                </td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li>
              Verbal nouns start with <em>ag</em> before a vowel and{" "}
              <em>a&rsquo; </em>before a consonant
            </li>
          </ul>
        </>
      );
    default:
      return "something has gone wrong!";
  }
};

export const Content = ({ step }) => <StepContent step={step} />;
