/**
 * STAT 2251: Inferential Statistics for Development Studies
 * Chapters 1, 2, and 3 Comprehensive Course Data
 * Includes Book-like Intuitive Explanations, Handnotes, Formulas, YouTube Lectures, and Graded 2/5/10 Mark Questions
 */

window.CHAPTERS_1_3 = [
  {
    id: 1,
    section: "Section A",
    title: "Introduction to Probability",
    code: "STAT 2251 - CH01",
    subtitle: "Foundations, Axioms, Approaches, Conditional Probability & Common Traps",
    overview: "Probability forms the numerical bridge between uncertainty and decision making in Development Studies. This chapter establishes foundational definitions, mathematical properties, the three classic approaches, marginal/joint/conditional rules, and critical real-world development applications.",
    readTime: "25 min read",
    topics: [
      { id: "1-1", title: "1.1 What is Probability & Core Terminology" },
      { id: "1-2", title: "1.2 Formal Properties and Axioms of Probability" },
      { id: "1-3", title: "1.3 Approaches to Probability (Classical, Empirical, Axiomatic, Subjective)" },
      { id: "1-4", title: "1.4 Types of Probability: Marginal, Joint, and Conditional" },
      { id: "1-5", title: "1.5 Fundamental Laws: Addition, Multiplication, and Binomial Law" },
      { id: "1-6", title: "1.6 Common Errors & Pitfalls in Probability" },
      { id: "1-7", title: "1.7 Real-World Applications in Development Studies" }
    ],
    explanation: `
      <div class="content-section">
        <h3>1.1 What is Probability & Core Terminology</h3>
        <p class="lead-text">
          In development research, policy makers never have 100% certainty. We ask: <em>What is the likelihood a rural training program reduces poverty? What is the chance an infant is immunized before age one?</em> 
          <strong>Probability</strong> standardizes words like "likely," "rare," and "almost certain" onto a precise numerical scale from <strong>0 to 1</strong> (or 0% to 100%).
        </p>

        <div class="callout callout-note">
          <strong>Formal Scale:</strong>
          <ul>
            <li>\\(P(A) = 0\\): <strong>Impossible event</strong> — cannot occur under any circumstances (e.g., rolling a 7 on a standard 6-sided die).</li>
            <li>\\(P(A) = 1\\): <strong>Certain event</strong> — guaranteed to occur (e.g., flipping a fair coin and getting either Heads or Tails).</li>
            <li>\\(0 < P(A) < 1\\): <strong>Random event</strong> — may or may not occur; the numerical value indicates its likelihood.</li>
          </ul>
        </div>

        <h4>Essential Terminology Every Student Must Know for Exams:</h4>
        <div class="grid-2">
          <div class="card-mini">
            <h5>Random Experiment</h5>
            <p>An operation or process with well-defined outcomes where the exact result cannot be predicted with certainty in advance. <em>Example: Surveying a randomly selected household in Khulna to measure monthly income.</em></p>
          </div>
          <div class="card-mini">
            <h5>Outcome</h5>
            <p>A single possible result of a random experiment. <em>Example: Getting 'Heads' on a coin flip, or a patient testing positive for dengue fever.</em></p>
          </div>
          <div class="card-mini">
            <h5>Sample Space (\\(S\\))</h5>
            <p>The universal set of <strong>all possible outcomes</strong> of a random experiment. <em>Example: Tossing two coins: \\(S = \\{HH, HT, TH, TT\\}\\). Note that \\(HT\\) and \\(TH\\) are distinct when order matters!</em></p>
          </div>
          <div class="card-mini">
            <h5>Event (\\(A \\subseteq S\\))</h5>
            <p>A specific subset of the sample space containing outcomes of interest. An event can be <strong>Simple</strong> (only one outcome, e.g. \\(\\{HH\\}\\)) or <strong>Compound</strong> (two or more outcomes, e.g. \\(\\{HT, TH\\}\\)).</p>
          </div>
        </div>

        <div class="card-mini mt-3">
          <h5>Equiprobable Spaces</h5>
          <p>A sample space where every single elementary outcome has exactly the same probability of occurring. If \\(S\\) has \\(n\\) equally likely outcomes and event \\(E\\) contains \\(k\\) favorable outcomes:</p>
          <div class="formula-box">\\(P(E) = \\frac{\\#E}{\\#S} = \\frac{k}{n} = \\frac{\\text{Number of favorable outcomes}}{\\text{Total number of possible outcomes}}\\)</div>
        </div>
      </div>

      <div class="content-section">
        <h3>1.2 Formal Properties and Axioms of Probability</h3>
        <p>In your examinations, teachers frequently test the <strong>Kolmogorov Axioms</strong> and their derived mathematical properties. If asked in an exam, write down these six formal rules with their formulas:</p>

        <div class="table-responsive">
          <table class="styled-table">
            <thead>
              <tr>
                <th>Property / Axiom</th>
                <th>Mathematical Formula</th>
                <th>Plain Explanation & Exam Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Non-Negativity</strong></td>
                <td>\\(P(A) \\ge 0\\) for any event \\(A\\)</td>
                <td>Probability can never be negative. You can never have a -20% chance of rain.</td>
              </tr>
              <tr>
                <td><strong>2. Normalization</strong></td>
                <td>\\(P(S) = 1\\)</td>
                <td>The total probability of the entire sample space (all outcomes together) is strictly 1 (or 100%).</td>
              </tr>
              <tr>
                <td><strong>3. Additivity</strong></td>
                <td>\\(P(A \\cup B) = P(A) + P(B)\\) if \\(A \\cap B = \\emptyset\\)</td>
                <td>For <strong>mutually exclusive</strong> events (cannot occur simultaneously), the probability of either occurring is simply the sum.</td>
              </tr>
              <tr>
                <td><strong>4. Complement Rule</strong></td>
                <td>\\(P(A^c) = 1 - P(A)\\)</td>
                <td>Crucial shortcut! When calculating "at least one" defective bulb, compute \\(1 - P(\\text{no defectives})\\).</td>
              </tr>
              <tr>
                <td><strong>5. Impossible Event</strong></td>
                <td>\\(P(\\emptyset) = 0\\)</td>
                <td>An event containing zero outcomes has exactly zero probability.</td>
              </tr>
              <tr>
                <td><strong>6. General Addition Rule</strong></td>
                <td>\\(P(A \\cup B) = P(A) + P(B) - P(A \\cap B)\\)</td>
                <td>If events overlap, subtracting the intersection prevents double counting the common outcomes.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="content-section">
        <h3>1.3 Four Approaches to Probability</h3>
        <p>Your curriculum and handnotes emphasize four distinct philosophical approaches to defining probability:</p>

        <div class="timeline-box">
          <div class="timeline-item">
            <h4>1. Classical (A Priori / Theoretical) Approach</h4>
            <p><strong>Basis:</strong> Pure mathematical logic and symmetry before conducting any trial. Assumes all outcomes are equally likely.</p>
            <p><strong>Formula:</strong> \\(P(A) = \\frac{m}{n} = \\frac{\\text{Favorable outcomes}}{\\text{Total outcomes}}\\)</p>
            <p><strong>Limitation:</strong> Fails when outcomes are not equally likely (e.g., predicting whether a crop fails due to drought).</p>
          </div>

          <div class="timeline-item">
            <h4>2. Empirical (Relative Frequency / Statistical) Approach</h4>
            <p><strong>Basis:</strong> Observed historical data over a very large number of repeated identical trials.</p>
            <p><strong>Formula:</strong> \\(P(A) = \\lim_{n \\to \\infty} \\frac{f}{n}\\), where \\(f\\) is frequency and \\(n\\) is total trials.</p>
            <p><strong>Example:</strong> In 2004–05, Kobe Bryant made 573 field goals in 1,324 attempts \\(\\implies P(\\text{Shot made}) = \\frac{573}{1324} \\approx 0.433\\) (43.3%).</p>
          </div>

          <div class="timeline-item">
            <h4>3. Axiomatic Approach (Modern Mathematical Foundation)</h4>
            <p><strong>Basis:</strong> Developed by A.N. Kolmogorov (1933). Defines probability as a set function on a sigma-algebra satisfying non-negativity, normalization, and countable additivity. It does not depend on how experiments are performed, providing an absolute mathematical foundation.</p>
          </div>

          <div class="timeline-item">
            <h4>4. Personalistic (Subjective / Bayesian) Approach</h4>
            <p><strong>Basis:</strong> Degree of personal belief or expert judgment based on qualitative experience and incomplete information.</p>
            <p><strong>Development Example:</strong> A government economist stating: <em>"There is an 80% probability that national inflation will drop below 6% next fiscal quarter following the central bank policy change."</em></p>
          </div>
        </div>
      </div>

      <div class="content-section">
        <h3>1.4 Marginal, Joint, and Conditional Probability</h3>
        <p>In development survey analysis, data is frequently tabulated across two variables (contingency tables):</p>

        <div class="table-responsive">
          <table class="styled-table text-center">
            <thead>
              <tr>
                <th>Family Health History</th>
                <th>Heart Disease</th>
                <th>Cancer</th>
                <th>Diabetes</th>
                <th>Total (Marginal)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Family History Present</strong></td>
                <td>88</td>
                <td>44</td>
                <td>38</td>
                <td><strong>170</strong></td>
              </tr>
              <tr>
                <td><strong>No Family History</strong></td>
                <td>92</td>
                <td>76</td>
                <td>62</td>
                <td><strong>230</strong></td>
              </tr>
              <tr>
                <td><strong>Total (Marginal)</strong></td>
                <td><strong>180</strong></td>
                <td><strong>120</strong></td>
                <td><strong>100</strong></td>
                <td><strong>400 (Grand Total)</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="grid-3 mt-3">
          <div class="card-mini">
            <h5>1. Marginal Probability</h5>
            <p>Probability of a single event occurring irrespective of other variables (located on table margins).</p>
            <p>\\(P(\\text{Cancer}) = \\frac{120}{400} = 0.30\\) (30%)</p>
          </div>
          <div class="card-mini">
            <h5>2. Joint Probability</h5>
            <p>Probability of two events occurring simultaneously (located inside table cells).</p>
            <p>\\(P(\\text{Cancer} \\cap \\text{No History}) = \\frac{76}{400} = 0.19\\) (19%)</p>
          </div>
          <div class="card-mini">
            <h5>3. Conditional Probability</h5>
            <p>Probability of event \\(A\\) given that event \\(B\\) has already occurred.</p>
            <p>\\(P(A|B) = \\frac{P(A \\cap B)}{P(B)}\\)</p>
            <p>\\(P(\\text{Diabetes} | \\text{History}) = \\frac{38}{170} \\approx 0.2235\\)</p>
          </div>
        </div>
      </div>

      <div class="content-section">
        <h3>1.5 Fundamental Laws of Probability</h3>
        <h4>1. Addition Law</h4>
        <ul>
          <li><strong>For Mutually Exclusive Events:</strong> \\(P(A \\cup B) = P(A) + P(B)\\)</li>
          <li><strong>For Non-Mutually Exclusive (Overlapping) Events:</strong> \\(P(A \\cup B) = P(A) + P(B) - P(A \\cap B)\\)</li>
          <li><strong>For Three Events:</strong> \\(P(A \\cup B \\cup C) = P(A) + P(B) + P(C) - P(A \\cap B) - P(B \\cap C) - P(A \\cap C) + P(A \\cap B \\cap C)\\)</li>
        </ul>

        <h4>2. Multiplication Law & Independence</h4>
        <ul>
          <li><strong>General Case:</strong> \\(P(A \\cap B) = P(A) \\cdot P(B|A) = P(B) \\cdot P(A|B)\\)</li>
          <li><strong>For Independent Events:</strong> \\(P(A \\cap B) = P(A) \\cdot P(B)\\) because \\(P(B|A) = P(B)\\).</li>
        </ul>

        <div class="callout callout-warning">
          <strong>Crucial Exam Distinction: Mutually Exclusive vs Independent Events</strong>
          <p>Students frequently confuse these two concepts in examinations!</p>
          <ul>
            <li><strong>Mutually Exclusive:</strong> Events cannot happen together: \\(P(A \\cap B) = 0\\). If \\(A\\) happens, \\(B\\) is impossible!</li>
            <li><strong>Independent:</strong> Occurrence of one does not affect the probability of the other: \\(P(A \\cap B) = P(A)P(B)\\).</li>
            <li><em>Two non-impossible events cannot be both mutually exclusive and independent at the same time!</em></li>
          </ul>
        </div>
      </div>

      <div class="content-section">
        <h3>1.6 Common Errors in Probability (Save Your Marks!)</h3>
        <ol>
          <li><strong>Confusing AND (\\(\\cap\\)) with OR (\\(\\cup\\)):</strong> "OR" means union (at least one occurs); "AND" means intersection (both occur together).</li>
          <li><strong>Forgetting to subtract overlap in the addition rule:</strong> Never write \\(P(A \\cup B) = P(A) + P(B)\\) unless you have proven \\(A\\) and \\(B\\) cannot occur together.</li>
          <li><strong>Using the wrong denominator in conditional probability:</strong> For \\(P(A|B)\\), the denominator must be \\(P(B)\\), never \\(P(A)\\).</li>
          <li><strong>Forgetting the Complement rule for "At least one":</strong> Calculating \\(P(\\text{at least 1 success})\\) directly can be cumbersome; always use \\(1 - P(\\text{zero successes})\\).</li>
        </ol>
      </div>
    `,
    handnotes: [
      {
        title: "Probability Core Concepts & Formulas Summary",
        category: "Handnote Digest",
        content: `
          • Classical Probability: P(E) = m / n (all outcomes equally likely)
          • Empirical Probability: P(E) = f / n (long run relative frequency)
          • Axioms: 0 <= P(A) <= 1; P(S) = 1; P(A U B) = P(A) + P(B) for disjoint sets
          • Addition Rule: P(A U B) = P(A) + P(B) - P(A ∩ B)
          • Conditional Probability: P(A|B) = P(A ∩ B) / P(B), provided P(B) > 0
          • Independent Test: Events A & B are independent iff P(A ∩ B) = P(A) * P(B)
          • Complement Shortcut: P(At least one) = 1 - P(None)
          • Expected Return Decision: E(Return) = Revenue * p. Approve if E(Return) > Cost!
        `
      }
    ],
    videos: [
      {
        title: "Probability Basics & Fundamental Concepts",
        channel: "Khan Academy",
        videoId: "uzkc-qNVoOk",
        duration: "11:20",
        summary: "Clear, intuitive introduction to random experiments, sample spaces, and computing basic probabilities."
      },
      {
        title: "Probability vs Likelihood Clearly Explained",
        channel: "StatQuest with Josh Starmer",
        videoId: "pYxNSUDSFH4",
        duration: "5:45",
        summary: "Visual breakdown of what probability actually measures and how it differs from likelihood."
      },
      {
        title: "Conditional Probability and the Multiplication Rule",
        channel: "The Organic Chemistry Tutor",
        videoId: "SkidyDQuupA",
        duration: "18:34",
        summary: "Step-by-step problem walkthroughs covering two-way contingency tables and conditional probability."
      }
    ],
    questions: [
      {
        id: "q1-1",
        marks: 2,
        difficulty: "Easy",
        title: "Define Random Experiment and Sample Space with Development Examples",
        question: "(a) Define a random experiment and a sample space. (b) Give one example of each relevant to Development Studies. [2 Marks]",
        solution: `
          <div class="answer-box">
            <p><strong>(a) Definitions:</strong></p>
            <ul>
              <li><strong>Random Experiment:</strong> A process or procedure whose set of possible outcomes is known in advance, but the exact outcome of any single performance cannot be predicted with certainty.</li>
              <li><strong>Sample Space (\\(S\\)):</strong> The set of all possible distinct outcomes of a random experiment.</li>
            </ul>
            <p><strong>(b) Development Studies Example:</strong></p>
            <ul>
              <li><em>Random Experiment:</em> Inspecting a randomly chosen primary health clinic in a rural upazila to assess vaccine stock availability.</li>
              <li><em>Sample Space:</em> \\(S = \\{\\text{Adequate Stock}, \\text{Inadequate Stock}, \\text{Completely Stocked Out}\\}\\).</li>
            </ul>
            <div class="badge badge-success">Examiner Marking Note: 1 mark for formal definitions + 1 mark for authentic contextual example.</div>
          </div>
        `
      },
      {
        id: "q1-2",
        marks: 2,
        difficulty: "Easy",
        title: "Distinguish between Mutually Exclusive and Independent Events",
        question: "Distinguish between mutually exclusive events and independent events. Can two events with non-zero probabilities be both mutually exclusive and independent? Explain briefly. [2 Marks]",
        solution: `
          <div class="answer-box">
            <table class="styled-table">
              <tr>
                <th>Feature</th>
                <th>Mutually Exclusive Events</th>
                <th>Independent Events</th>
              </tr>
              <tr>
                <td><strong>Definition</strong></td>
                <td>Cannot occur at the same time: \\(A \\cap B = \\emptyset\\)</td>
                <td>Occurrence of \\(A\\) has no influence on \\(B\\)</td>
              </tr>
              <tr>
                <td><strong>Condition</strong></td>
                <td>\\(P(A \\cap B) = 0\\)</td>
                <td>\\(P(A \\cap B) = P(A) \\cdot P(B)\\)</td>
              </tr>
            </table>
            <p><strong>Can they be both?</strong><br>
            <strong>No.</strong> If \\(P(A) > 0\\) and \\(P(B) > 0\\), then for independent events \\(P(A \\cap B) = P(A)P(B) > 0\\). But for mutually exclusive events, \\(P(A \\cap B) = 0\\). Since a quantity cannot be simultaneously zero and strictly positive, two positive-probability events <strong>cannot be both mutually exclusive and independent</strong>.</p>
          </div>
        `
      },
      {
        id: "q1-3",
        marks: 5,
        difficulty: "Medium",
        title: "Contingency Table Analysis & Additive Rule Verification",
        question: "A university survey was conducted among 100 students in the Development Studies department. Among them, 40 students take Statistics, 30 take Economics, and 15 take both Statistics and Economics.<br>(a) Find \\(P(\\text{Statistics})\\), \\(P(\\text{Economics})\\), and \\(P(\\text{Both})\\).<br>(b) Find the probability that a randomly chosen student takes Statistics OR Economics.<br>(c) Find the conditional probability that a student takes Statistics given that they take Economics. [5 Marks]",
        solution: `
          <div class="answer-box">
            <p><strong>Given:</strong> Total students \\(N = 100\\).</p>
            <ul>
              <li>Let \\(A\\) = Event student studies Statistics \\(\\implies n(A) = 40\\)</li>
              <li>Let \\(B\\) = Event student studies Economics \\(\\implies n(B) = 30\\)</li>
              <li>Let \\(A \\cap B\\) = Event student studies both \\(\\implies n(A \\cap B) = 15\\)</li>
            </ul>

            <p><strong>Step (a): Compute individual probabilities:</strong></p>
            \\[P(A) = \\frac{n(A)}{N} = \\frac{40}{100} = 0.40\\]
            \\[P(B) = \\frac{n(B)}{N} = \\frac{30}{100} = 0.30\\]
            \\[P(A \\cap B) = \\frac{n(A \\cap B)}{N} = \\frac{15}{100} = 0.15\\]

            <p><strong>Step (b): Apply General Addition Rule:</strong></p>
            \\[P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0.40 + 0.30 - 0.15 = 0.55 \\text{ (or 55%)}\\]

            <p><strong>Step (c): Conditional Probability \\(P(A|B)\\):</strong></p>
            \\[P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0.15}{0.30} = 0.50 \\text{ (or 50%)}\\]
            <p><strong>Interpretation:</strong> 50% of the students enrolled in Economics also take Statistics.</p>
          </div>
        `
      },
      {
        id: "q1-4",
        marks: 5,
        difficulty: "Medium",
        title: "Expected Monetary Value & Investment Decision Rule",
        question: "A micro-finance development enterprise plans to invest \\$5 million to launch a solar irrigation initiative in drought-prone areas. If successful, the initiative will generate \\$25 million in gross economic revenue. (a) What is the minimum probability of success required to financially justify this investment? (b) If expert appraisal estimates the probability of success at 0.35, calculate the expected return and advise the CEO whether to proceed. [5 Marks]",
        solution: `
          <div class="answer-box">
            <p><strong>Given:</strong></p>
            <ul>
              <li>Investment Cost \\(C = \\$5,000,000\\)</li>
              <li>Gross Revenue if Successful \\(R = \\$25,000,000\\)</li>
              <li>Let \\(p\\) = Probability of success</li>
            </ul>

            <p><strong>(a) Break-even Probability:</strong></p>
            <p>To financially justify the project, the Expected Monetary Return must at least equal the Investment Cost:</p>
            \\[E(\\text{Return}) = p \\times R = \\text{Cost}\\]
            \\[p \\times 25,000,000 = 5,000,000\\]
            \\[p = \\frac{5,000,000}{25,000,000} = 0.20 \\text{ (or 20%)}\\]
            <p><strong>Conclusion:</strong> The project requires a minimum success probability of <strong>20%</strong> to break even.</p>

            <p><strong>(b) Appraisal at \\(p = 0.35\\):</strong></p>
            \\[E(\\text{Return}) = 0.35 \\times \\$25,000,000 = \\$8,750,000\\]
            \\[\\text{Expected Net Profit} = \\$8,750,000 - \\$5,000,000 = +\\$3,750,000\\]
            <p><strong>Recommendation:</strong> Since the expected gross return (\\$8.75M) substantially exceeds the cost (\\$5M), the CEO <strong>should approve the project</strong>.</p>
          </div>
        `
      },
      {
        id: "q1-5",
        marks: 10,
        difficulty: "Hard",
        title: "Critical Analytical Problem: Public Health Diagnosis & Bayes' Probability",
        question: "In a rural district, a health survey tests 400 individuals for chronic conditions categorized by family history. The observed frequencies are: Family history present: Heart Disease=88, Cancer=44, Diabetes=38 (Total=170). No family history: Heart Disease=92, Cancer=76, Diabetes=62 (Total=230).<br>(a) Construct the joint probability table.<br>(b) A randomly selected individual is diagnosed with Cancer. What is the probability that they have a positive family history?<br>(c) Are the events 'Diagnosed with Heart Disease' and 'Family History Present' statistically independent? Justify with complete mathematical proof.<br>(d) Explain two major errors researchers commit when applying probability rules to healthcare survey data. [10 Marks]",
        solution: `
          <div class="answer-box">
            <p><strong>(a) Joint Probability Table (Dividing each cell by Grand Total \\(N = 400\\)):</strong></p>
            <table class="styled-table text-center">
              <tr>
                <th>Category</th>
                <th>Heart Disease (\\(H\\))</th>
                <th>Cancer (\\(C\\))</th>
                <th>Diabetes (\\(D\\))</th>
                <th>Marginal \\(P(F)\\)</th>
              </tr>
              <tr>
                <td>Family History Present (\\(F_1\\))</td>
                <td>\\(88/400 = 0.220\\)</td>
                <td>\\(44/400 = 0.110\\)</td>
                <td>\\(38/400 = 0.095\\)</td>
                <td><strong>0.425</strong></td>
              </tr>
              <tr>
                <td>No Family History (\\(F_0\\))</td>
                <td>\\(92/400 = 0.230\\)</td>
                <td>\\(76/400 = 0.190\\)</td>
                <td>\\(62/400 = 0.155\\)</td>
                <td><strong>0.575</strong></td>
              </tr>
              <tr>
                <td><strong>Marginal Disease</strong></td>
                <td><strong>0.450</strong></td>
                <td><strong>0.300</strong></td>
                <td><strong>0.250</strong></td>
                <td><strong>1.000</strong></td>
              </tr>
            </table>

            <p><strong>(b) Probability of Family History given Cancer \\(P(F_1 | C)\\):</strong></p>
            \\[P(F_1 | C) = \\frac{P(F_1 \\cap C)}{P(C)} = \\frac{0.110}{0.300} = \\frac{44}{120} \\approx 0.3667 \\text{ (36.67%)}\\]

            <p><strong>(c) Test of Statistical Independence between \\(H\\) and \\(F_1\\):</strong></p>
            <p>Condition for independence: \\(P(H \\cap F_1) = P(H) \\times P(F_1)\\)</p>
            <ul>
              <li>From table, \\(P(H \\cap F_1) = 0.220\\)</li>
              <li>Product of marginals: \\(P(H) \\times P(F_1) = 0.450 \\times 0.425 = 0.19125\\)</li>
            </ul>
            <p>Since \\(0.220 \\ne 0.19125\\), \\(P(H \\cap F_1) \\ne P(H) \\cdot P(F_1)\\).<br>
            <strong>Conclusion:</strong> Heart disease and family health history are <strong>not statistically independent</strong>; there is a demonstrable statistical dependence.</p>

            <p><strong>(d) Two Common Analytical Errors in Healthcare Studies:</strong></p>
            <ol>
              <li><strong>The Prosecutor's Fallacy (Transposing Conditionals):</strong> Confusing \\(P(\\text{Positive Test} | \\text{Disease})\\) (sensitivity) with \\(P(\\text{Disease} | \\text{Positive Test})\\) (positive predictive value). In development screening, even with a 95% accurate test, if prevalence is low (say 1%), most positives are false alarms.</li>
              <li><strong>Assuming Independence Across Family Members:</strong> Treating survey responses within the same household or cluster as independent trials, violating the fundamental assumption of simple random sampling.</li>
            </ol>
          </div>
        `
      }
    ]
  },

  {
    id: 2,
    section: "Section A",
    title: "Discrete Random Variables and Probability Distributions",
    code: "STAT 2251 - CH02",
    subtitle: "Random Variables, PMF/PDF, Expected Value, Variance Proofs, Binomial, Poisson & Normal",
    overview: "Translating qualitative uncertain events into rigorous numerical quantities. Master the definition of discrete vs continuous random variables, formal derivation of variance Var(X)=E(X^2)-[E(X)]^2, joint probability tables, and the three cornerstone distributions: Binomial, Poisson, and Normal.",
    readTime: "30 min read",
    topics: [
      { id: "2-1", title: "2.1 Concept of a Random Variable & Foundations" },
      { id: "2-2", title: "2.2 PMF vs CMF vs PDF vs CDF" },
      { id: "2-3", title: "2.3 Summary Measures: Expected Value, Variance & Standard Deviation" },
      { id: "2-4", title: "2.4 Mathematical Derivation of Variance" },
      { id: "2-5", title: "2.5 Joint Probability Distributions & Marginal Totals" },
      { id: "2-6", title: "2.6 The Binomial Distribution (Formula, Mean, Variance)" },
      { id: "2-7", title: "2.7 The Poisson Distribution (Rare Events & Modeling)" },
      { id: "2-8", title: "2.8 The Normal Distribution (Bell Curve, Empirical Rule & Z-Scores)" }
    ],
    explanation: `
      <div class="content-section">
        <h3>2.1 Concept of a Random Variable</h3>
        <p class="lead-text">
          In real-world policy research, events often come as qualitative outcomes: <em>a child is malnourished or healthy; a farmer adopts organic fertilizer or does not.</em> 
          A <strong>Random Variable (\\(X\\))</strong> is a mathematical function that assigns a single real numerical value to each outcome in a sample space:
        </p>
        <div class="formula-box">\\(X: S \\to \\mathbb{R}\\)</div>

        <div class="grid-2">
          <div class="card-mini">
            <h4>Discrete Random Variable</h4>
            <p>Takes countable, distinct separate values (whole numbers, jumps without intermediate values).</p>
            <ul>
              <li><strong>Typical use:</strong> Counts of people, events, defects.</li>
              <li><strong>Examples:</strong> Number of hospital admissions in 1 hour; number of surviving children in a household; number of heads in 5 coin tosses.</li>
              <li><strong>Values:</strong> \\(x \\in \\{0, 1, 2, 3, \\dots\\}\\).</li>
            </ul>
          </div>
          <div class="card-mini">
            <h4>Continuous Random Variable</h4>
            <p>Can take any numerical value within an interval or continuum, including uncountably infinite decimals.</p>
            <ul>
              <li><strong>Typical use:</strong> Physical measurements, time, financial sums.</li>
              <li><strong>Examples:</strong> Height of adults (cm), weight of infants (kg), monthly household expenditure (taka), waiting time at an NGO center (minutes).</li>
              <li><strong>Values:</strong> \\(x \\in [a, b]\\) or \\((-\\infty, \\infty)\\).</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="content-section">
        <h3>2.2 PMF, CMF, PDF, and CDF Comparison</h3>
        <div class="table-responsive">
          <table class="styled-table">
            <thead>
              <tr>
                <th>Variable Type</th>
                <th>Function</th>
                <th>Full Name</th>
                <th>Core Definition & Condition</th>
                <th>Example Calculation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="2"><strong>Discrete</strong></td>
                <td><strong>PMF</strong></td>
                <td>Probability Mass Function</td>
                <td>\\(f(x) = P(X = x)\\)<br>Conditions: \\(f(x) \\ge 0\\) and \\(\\sum_x f(x) = 1\\)</td>
                <td>Exact probability of rolling a 4 on a fair die: \\(P(X=4) = 1/6\\)</td>
              </tr>
              <tr>
                <td><strong>CMF</strong></td>
                <td>Cumulative Mass Function</td>
                <td>\\(F(x) = P(X \\le x) = \\sum_{k \\le x} f(k)\\)</td>
                <td>Probability of rolling at most 4: \\(P(X \\le 4) = 4/6\\)</td>
              </tr>
              <tr>
                <td rowspan="2"><strong>Continuous</strong></td>
                <td><strong>PDF</strong></td>
                <td>Probability Density Function</td>
                <td>Describes height of curve.<br>Conditions: \\(f(x) \\ge 0\\) and \\(\\int_{-\\infty}^{\\infty} f(x)dx = 1\\)</td>
                <td>Note: \\(P(X = c) = 0\\) for any single point! Probabilities exist only over intervals \\(P(a < X < b) = \\int_a^b f(x)dx\\).</td>
              </tr>
              <tr>
                <td><strong>CDF</strong></td>
                <td>Cumulative Distribution Function</td>
                <td>\\(F(x) = P(X \\le x) = \\int_{-\\infty}^x f(t)dt\\)</td>
                <td>Probability adult height is \\(\\le 170\\text{ cm}\\).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="content-section">
        <h3>2.3 Summary Measures: Expected Value and Spread</h3>
        <h4>1. Expected Value \\(E(X)\\) — The Long-Run Weighted Average</h4>
        <p>The expected value represents the theoretical balance point or center of gravity of a probability distribution. It does not predict the outcome of a single trial, but the long-run average of infinitely repeated trials.</p>
        <div class="grid-2">
          <div class="formula-box">
            <strong>Discrete Random Variable:</strong><br>
            \\[E(X) = \\mu = \\sum x \\cdot P(X = x)\\]
          </div>
          <div class="formula-box">
            <strong>Continuous Random Variable:</strong><br>
            \\[E(X) = \\mu = \\int_{-\\infty}^{\\infty} x \\cdot f(x) \\, dx\\]
          </div>
        </div>

        <h4 class="mt-3">2. Variance \\(\\text{Var}(X)\\) and Standard Deviation (\\(\\sigma\\))</h4>
        <p>Variance measures the average squared dispersion of values around the mean \\(\\mu\\). Standard deviation returns this measure to the original units of \\(X\\):</p>
        <div class="formula-box">
          \\[\\text{Var}(X) = \\sigma^2 = E[(X - \\mu)^2]\\]
          \\[\\sigma = \\sqrt{\\text{Var}(X)}\\]
        </div>
      </div>

      <div class="content-section">
        <h3>2.4 Mathematical Derivation of Variance (Exam Staple!)</h3>
        <p>In university exams, teachers frequently ask: <em>"Prove that \\(\\text{Var}(X) = E(X^2) - [E(X)]^2\\)."</em> Here is the exact, full-marks derivation:</p>

        <div class="proof-card">
          <div class="proof-step"><strong>Definition:</strong> By definition, the variance of \\(X\\) with mean \\(\\mu = E(X)\\) is:
            \\[\\text{Var}(X) = E\\left[(X - \\mu)^2\\right]\\]
          </div>
          <div class="proof-step"><strong>Step 1 (Expand the algebraic square):</strong>
            \\[\\text{Var}(X) = E\\left[X^2 - 2\\mu X + \\mu^2\\right]\\]
          </div>
          <div class="proof-step"><strong>Step 2 (Apply linearity of expectation):</strong>
            \\[\\text{Var}(X) = E(X^2) - E(2\\mu X) + E(\\mu^2)\\]
          </div>
          <div class="proof-step"><strong>Step 3 (Factor out constants since \\(\\mu\\) is a fixed parameter):</strong>
            \\[E(2\\mu X) = 2\\mu E(X)\\]
            \\[E(\\mu^2) = \\mu^2\\]
          </div>
          <div class="proof-step"><strong>Step 4 (Substitute \\(E(X) = \\mu\\)):</strong>
            \\[\\text{Var}(X) = E(X^2) - 2\\mu(\\mu) + \\mu^2\\]
            \\[\\text{Var}(X) = E(X^2) - 2\\mu^2 + \\mu^2\\]
            \\[\\text{Var}(X) = E(X^2) - \\mu^2\\]
          </div>
          <div class="proof-step"><strong>Conclusion:</strong> Since \\(\\mu = E(X)\\):
            <div class="formula-highlight">
              \\[\\mathbf{\\text{Var}(X) = E(X^2) - [E(X)]^2}\\]
            </div>
          </div>
        </div>
      </div>

      <div class="content-section">
        <h3>2.5 Joint Probability Distributions</h3>
        <p>When analyzing two random variables simultaneously (e.g., \\(X\\) = Number of training sessions attended, \\(Y\\) = Passed civil service exam), we use a <strong>Joint Probability Mass Function</strong> \\(f(x, y) = P(X=x, Y=y)\\).</p>
        <div class="callout callout-note">
          <strong>Key Properties:</strong>
          <ul>
            <li>\\(f(x, y) \\ge 0\\) for all pairs \\((x, y)\\).</li>
            <li>Sum of all cells equals unity: \\(\\sum_x \\sum_y f(x, y) = 1\\).</li>
            <li>Marginal of \\(X\\): \\(P(X = x) = \\sum_y f(x, y)\\).</li>
            <li>Conditional Probability: \\(P(Y = y | X = x) = \\frac{P(X=x, Y=y)}{P(X=x)}\\).</li>
          </ul>
        </div>
      </div>

      <div class="content-section">
        <h3>2.6 The Binomial Distribution</h3>
        <p>Models the number of successes \\(k\\) across \\(n\\) repeated, independent Bernoulli trials where the success probability \\(p\\) remains constant.</p>
        <div class="formula-box">
          \\[P(X = k) = \\binom{n}{k} p^k (1 - p)^{n - k} = \\frac{n!}{k!(n - k)!} p^k q^{n - k}\\]
          \\[\\text{Mean: } \\mu = n \\cdot p \\qquad \\text{Variance: } \\sigma^2 = n \\cdot p \\cdot (1 - p) \\qquad \\text{SD: } \\sigma = \\sqrt{np(1-p)}\\]
        </div>
      </div>

      <div class="content-section">
        <h3>2.7 The Poisson Distribution</h3>
        <p>Models the frequency of rare, independent events occurring over a fixed continuum of time, area, or volume when the average arrival rate \\(\\lambda\\) is known.</p>
        <div class="formula-box">
          \\[P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!} \\qquad (k = 0, 1, 2, \\dots, e \\approx 2.71828)\\]
          \\[\\text{Mean: } \\mu = \\lambda \\qquad \\text{Variance: } \\sigma^2 = \\lambda\\]
        </div>
        <p><em>Unique feature: For a Poisson distribution, the mean and variance are strictly equal: \\(\\mu = \\sigma^2 = \\lambda\\).</em></p>
      </div>

      <div class="content-section">
        <h3>2.8 The Normal Distribution & The Empirical Rule</h3>
        <p>The continuous, symmetrical bell-shaped curve that underpins all inferential statistics. Defined completely by two parameters: mean \\(\\mu\\) and variance \\(\\sigma^2\\):</p>
        <div class="formula-box">
          \\[f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} e^{-\\frac{1}{2}\\left(\\frac{x - \\mu}{\\sigma}\\right)^2}\\]
          \\[\\text{Standard Normal Z-Score: } Z = \\frac{X - \\mu}{\\sigma} \\sim N(0, 1)\\]
        </div>

        <div class="callout callout-tip">
          <strong>The 68-95-99.7 Empirical Rule:</strong>
          <ul>
            <li>\\(68.26\\%\\) of all values fall within \\(\\mu \\pm 1\\sigma\\).</li>
            <li>\\(95.44\\%\\) of all values fall within \\(\\mu \\pm 2\\sigma\\) (approximately 95% within \\(\\pm 1.96\\sigma\\)).</li>
            <li>\\(99.73\\%\\) of all values fall within \\(\\mu \\pm 3\\sigma\\).</li>
          </ul>
        </div>
      </div>
    `,
    handnotes: [
      {
        title: "Key Random Variable Properties & Distributions",
        category: "Handnote Digest",
        content: `
          • Discrete RV: E(X) = ∑ x P(x); Continuous RV: E(X) = ∫ x f(x) dx
          • Variance Proof: Var(X) = E(X^2) - [E(X)]^2
          • Binomial: Mean = np, Var = npq (q = 1-p). Trials independent, p constant.
          • Poisson: Mean = λ, Var = λ. Used for rare events per time/space.
          • Normal: Symmetrical, bell-shaped, Mean = Median = Mode = μ.
          • Z-score formula: Z = (X - μ) / σ
          • Empirical Rule: μ ± 1σ = 68.26%, μ ± 2σ = 95.44%, μ ± 3σ = 99.73%
        `
      }
    ],
    videos: [
      {
        title: "The Binomial Distribution, Clearly Explained",
        channel: "StatQuest with Josh Starmer",
        videoId: "J8jNoF-K8E8",
        duration: "12:10",
        summary: "Visual step-by-step intuition behind the binomial formula, trials, and probabilities."
      },
      {
        title: "The Normal Distribution and Z-Scores",
        channel: "StatQuest with Josh Starmer",
        videoId: "rzFX5NWojp0",
        duration: "11:45",
        summary: "Master the bell curve, standard deviation spreads, and how Z-scores standardize any normal curve."
      },
      {
        title: "Poisson Distribution Walkthrough & Worked Problems",
        channel: "The Organic Chemistry Tutor",
        videoId: "cPOChr_VVs8",
        duration: "16:22",
        summary: "Clear examples calculating probabilities of arrivals, accidents, and occurrences per unit of time."
      }
    ],
    questions: [
      {
        id: "q2-1",
        marks: 2,
        difficulty: "Easy",
        title: "Define PMF and PDF with their Mathematical Conditions",
        question: "Define Probability Mass Function (PMF) and Probability Density Function (PDF). State the two fundamental mathematical conditions required for each. [2 Marks]",
        solution: `
          <div class="answer-box">
            <p><strong>1. Probability Mass Function (PMF):</strong><br>
            A function that assigns probabilities to the individual values of a <em>discrete</em> random variable: \\(f(x) = P(X = x)\\).<br>
            <em>Conditions:</em> (i) \\(f(x) \\ge 0\\) for all \\(x\\); (ii) \\(\\sum_x f(x) = 1\\).</p>

            <p><strong>2. Probability Density Function (PDF):</strong><br>
            A mathematical curve whose area represents the probability of a <em>continuous</em> random variable lying within an interval.<br>
            <em>Conditions:</em> (i) \\(f(x) \\ge 0\\) for all \\(-\\infty < x < \\infty\\); (ii) \\(\\int_{-\\infty}^{\\infty} f(x) \\, dx = 1\\).</p>
          </div>
        `
      },
      {
        id: "q2-2",
        marks: 2,
        difficulty: "Easy",
        title: "Empirical Rule Question on Standardized Scores",
        question: "In an entrance test for development fellows, scores are normally distributed with \\(\\mu = 75\\) and \\(\\sigma = 8\\). What percentage of candidates score less than 75? What percentage score between 67 and 83? [2 Marks]",
        solution: `
          <div class="answer-box">
            <p><strong>(a) Candidates scoring less than 75:</strong><br>
            Since the normal distribution is perfectly symmetrical around its mean \\(\\mu = 75\\), exactly half the area under the curve lies below the mean.</p>
            \\[P(X < 75) = 0.50 = 50\\%\\]

            <p><strong>(b) Candidates scoring between 67 and 83:</strong><br>
            Notice that:
            \\[67 = 75 - 8 = \\mu - 1\\sigma\\]
            \\[83 = 75 + 8 = \\mu + 1\\sigma\\]
            By the 68-95-99.7 Empirical Rule, exactly <strong>68%</strong> (or 68.26%) of candidates score within one standard deviation of the mean.</p>
          </div>
        `
      },
      {
        id: "q2-3",
        marks: 5,
        difficulty: "Medium",
        title: "Derive Variance and Calculate Mean & SD from Discrete Table",
        question: "The discrete random variable \\(X\\) denotes the number of mobile banking transactions performed by a micro-entrepreneur per day, with the following distribution:<br>\\(X = 0\\) with \\(P=0.20\\); \\(X = 1\\) with \\(P=0.35\\); \\(X = 2\\) with \\(P=0.30\\); \\(X = 3\\) with \\(P=0.15\\).<br>Calculate: (a) The expected value \\(E(X)\\), (b) \\(E(X^2)\\), (c) The variance \\(\\text{Var}(X)\\), and (d) The standard deviation \\(\\sigma\\). [5 Marks]",
        solution: `
          <div class="answer-box">
            <table class="styled-table text-center">
              <thead>
                <tr>
                  <th>\\(x\\)</th>
                  <th>\\(P(X = x)\\)</th>
                  <th>\\(x \\cdot P(X = x)\\)</th>
                  <th>\\(x^2\\)</th>
                  <th>\\(x^2 \\cdot P(X = x)\\)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>0</td><td>0.20</td><td>0.00</td><td>0</td><td>0.00</td></tr>
                <tr><td>1</td><td>0.35</td><td>0.35</td><td>1</td><td>0.35</td></tr>
                <tr><td>2</td><td>0.30</td><td>0.60</td><td>4</td><td>1.20</td></tr>
                <tr><td>3</td><td>0.15</td><td>0.45</td><td>9</td><td>1.35</td></tr>
                <tr><td><strong>Total</strong></td><td><strong>1.00</strong></td><td><strong>1.40</strong></td><td>-</td><td><strong>2.90</strong></td></tr>
              </tbody>
            </table>

            <p><strong>Calculations:</strong></p>
            <ol>
              <li><strong>Expected Value:</strong> \\(E(X) = \\sum x P(X=x) = 1.40\\) transactions/day.</li>
              <li><strong>Second Moment:</strong> \\(E(X^2) = \\sum x^2 P(X=x) = 2.90\\).</li>
              <li><strong>Variance:</strong>
                \\[\\text{Var}(X) = E(X^2) - [E(X)]^2 = 2.90 - (1.40)^2 = 2.90 - 1.96 = 0.94\\]
              </li>
              <li><strong>Standard Deviation:</strong>
                \\[\\sigma = \\sqrt{0.94} \\approx 0.9695 \\text{ transactions}\\]
              </li>
            </ol>
          </div>
        `
      },
      {
        id: "q2-4",
        marks: 5,
        difficulty: "Medium",
        title: "Joint Distribution Table Analysis & Conditional Probabilities",
        question: `A training evaluation program records the number of preparation courses attended (\\(X\\)) and whether a student was admitted to a development internship program (\\(Y=1\\) for admitted, \\(Y=0\\) for not admitted):<br>
        \\(X=0\\): \\(Y=0\\) is 0.30, \\(Y=1\\) is 0.05 (Row total = 0.35)<br>
        \\(X=1\\): \\(Y=0\\) is 0.25, \\(Y=1\\) is 0.10 (Row total = 0.35)<br>
        \\(X=2\\): \\(Y=0\\) is 0.15, \\(Y=1\\) is 0.15 (Row total = 0.30)<br>
        Find: (a) \\(P(X=2, Y=1)\\), (b) \\(P(X=2 \\text{ or } Y=1)\\), (c) \\(P(Y=1 | X=2)\\), and (d) Interpret whether attending 2 courses improves the chance of admission. [5 Marks]`,
        solution: `
          <div class="answer-box">
            <p><strong>Given Joint Table Marginals:</strong></p>
            <ul>
              <li>\\(P(Y=1) = 0.05 + 0.10 + 0.15 = 0.30\\)</li>
              <li>\\(P(X=2) = 0.15 + 0.15 = 0.30\\)</li>
            </ul>

            <p><strong>(a) Joint Probability \\(P(X=2, Y=1)\\):</strong><br>
            Directly from the cell: \\(P(X=2, Y=1) = 0.15\\) (15%).</p>

            <p><strong>(b) Union Probability \\(P(X=2 \\cup Y=1)\\):</strong><br>
            \\[P(X=2 \\cup Y=1) = P(X=2) + P(Y=1) - P(X=2, Y=1) = 0.30 + 0.30 - 0.15 = 0.45 \\text{ (45%)}\\]</p>

            <p><strong>(c) Conditional Probability \\(P(Y=1 | X=2)\\):</strong><br>
            \\[P(Y=1 | X=2) = \\frac{P(X=2, Y=1)}{P(X=2)} = \\frac{0.15}{0.30} = 0.50 \\text{ (50%)}\\]</p>

            <p><strong>(d) Policy Interpretation:</strong><br>
            The overall (unconditional) admission rate is \\(P(Y=1) = 30\\%\\). However, among students who completed 2 preparation courses, the admission rate jumps to <strong>50%</strong>. This provides clear empirical evidence that the preparatory program positively impacts internship admission.</p>
          </div>
        `
      },
      {
        id: "q2-5",
        marks: 10,
        difficulty: "Hard",
        title: "Comprehensive Problem: Binomial vs Poisson vs Normal Models",
        question: "A regional rural electrification initiative provides solar home units across three upazilas.<br>(a) In a sample of 10 solar units, the probability of battery failure in year one is \\(p = 0.10\\). Calculate the exact probability that: (i) exactly 2 units fail, (ii) at least 1 unit fails. [3 Marks]<br>(b) Emergency breakdown calls arrive at the maintenance depot at an average rate of \\(\\lambda = 4\\) calls per day. Assuming a Poisson process, calculate the probability of receiving: (i) exactly 3 calls tomorrow, (ii) zero calls tomorrow. [3 Marks]<br>(c) The annual maintenance cost per household is normally distributed with \\(\\mu = 5000\\text{ BDT}\\) and \\(\\sigma = 600\\text{ BDT}\\). (i) What proportion of households pay more than 5900 BDT? (ii) Find the 95th percentile budget amount. (Given \\(Z_{0.05} = 1.645, P(Z < 1.50) = 0.9332\\)). [4 Marks]",
        solution: `
          <div class="answer-box">
            <p><strong>Part (a): Binomial Model (\\(n = 10, p = 0.10, q = 0.90\\))</strong></p>
            <p><strong>(i) Exactly 2 failures (\\(k = 2\\)):</strong></p>
            \\[P(X = 2) = \\binom{10}{2} (0.10)^2 (0.90)^8 = \\frac{10 \\times 9}{2} \\times 0.01 \\times 0.43047 = 45 \\times 0.004305 \\approx 0.1937 \\text{ (19.37%)}\\]

            <p><strong>(ii) At least 1 failure (\\(P(X \\ge 1)\\)):</strong></p>
            <p>Use complement shortcut!</p>
            \\[P(X = 0) = \\binom{10}{0} (0.10)^0 (0.90)^{10} = 1 \\times 1 \\times 0.34868 = 0.3487\\]
            \\[P(X \\ge 1) = 1 - P(X = 0) = 1 - 0.3487 = 0.6513 \\text{ (65.13%)}\\]

            <hr>
            <p><strong>Part (b): Poisson Model (\\(\\lambda = 4\\) calls/day)</strong></p>
            <p><strong>(i) Exactly 3 calls (\\(k = 3\\)):</strong></p>
            \\[P(X = 3) = \\frac{\\lambda^3 e^{-\\lambda}}{3!} = \\frac{4^3 \\cdot e^{-4}}{6} = \\frac{64 \\times 0.018316}{6} = \\frac{1.1722}{6} \\approx 0.1954 \\text{ (19.54%)}\\]

            <p><strong>(ii) Zero calls (\\(k = 0\\)):</strong></p>
            \\[P(X = 0) = \\frac{4^0 e^{-4}}{0!} = \\frac{1 \\times e^{-4}}{1} \\approx 0.0183 \\text{ (1.83%)}\\]

            <hr>
            <p><strong>Part (c): Normal Distribution Model (\\(\\mu = 5000, \\sigma = 600\\))</strong></p>
            <p><strong>(i) Proportion paying more than 5900 BDT:</strong></p>
            \\[Z = \\frac{X - \\mu}{\\sigma} = \\frac{5900 - 5000}{600} = \\frac{900}{600} = +1.50\\]
            \\[P(X > 5900) = P(Z > 1.50) = 1 - P(Z < 1.50) = 1 - 0.9332 = 0.0668 \\text{ (6.68%)}\\]

            <p><strong>(ii) 95th Percentile Budget:</strong></p>
            <p>The top 5% corresponds to \\(Z = +1.645\\):</p>
            \\[X = \\mu + Z \\cdot \\sigma = 5000 + 1.645(600) = 5000 + 987 = 5987\\text{ BDT}\\]
            <p><strong>Interpretation:</strong> 95% of rural households require an annual maintenance budget of at most <strong>5,987 BDT</strong>.</p>
          </div>
        `
      }
    ]
  },

  {
    id: 3,
    section: "Section A",
    title: "Sampling and Sampling Distributions",
    code: "STAT 2251 - CH03",
    subtitle: "Why Sample, Survey vs Census, Probability/Non-Probability Designs, CLT & Standard Error",
    overview: "Sampling forms the empirical bedrock of development economics. Here we study the spoon of soup analogy, why sampling is required, differences between sample survey and census, probability vs non-probability sampling techniques, sampling vs non-sampling error, and the crowning theorem of statistics: The Central Limit Theorem (CLT).",
    readTime: "25 min read",
    topics: [
      { id: "3-1", title: "3.1 What is Sampling & The Everyday Soup Analogy" },
      { id: "3-2", title: "3.2 Key Terminology: Population, Sample, Parameter, Statistic, Frame" },
      { id: "3-3", title: "3.3 Sample Survey vs Complete Census (Exam Comparison)" },
      { id: "3-4", title: "3.4 Six Steps in Planning a Sample Survey" },
      { id: "3-5", title: "3.5 Probability Sampling Methods (SRS, Stratified, Systematic, Cluster)" },
      { id: "3-6", title: "3.6 Non-Probability Sampling (Convenience, Purposive, Quota, Snowball)" },
      { id: "3-7", title: "3.7 Two Sources of Error: Sampling Error vs Non-Sampling Error" },
      { id: "3-8", title: "3.8 What is a Sampling Distribution & Proof of Unbiasedness" },
      { id: "3-9", title: "3.9 The Central Limit Theorem (CLT) & Standard Error" }
    ],
    explanation: `
      <div class="content-section">
        <h3>3.1 What is Sampling & Why Do We Sample?</h3>
        <p class="lead-text">
          <strong>Sampling</strong> is the process of selecting a representative subset of individuals (a sample) from a larger aggregate group (the population) so that we can study the sample and draw valid inductive conclusions about the entire population.
        </p>
        <div class="callout callout-note">
          <strong>The Classic Soup Spoon Analogy:</strong>
          <p>A chef tastes a single spoonful of soup from a 50-liter cooking pot to judge whether the seasoning is right. The chef does not need to consume all 50 liters to know how it tastes — provided the soup was stirred thoroughly first! In statistics:</p>
          <ul>
            <li>The pot of soup = <strong>Population</strong></li>
            <li>The spoonful = <strong>Sample</strong></li>
            <li>Stirring thoroughly = <strong>Randomization / Representative Sampling</strong></li>
          </ul>
        </div>

        <h4>Why Not Study the Entire Population? (Why Sample?)</h4>
        <ol>
          <li><strong>Resource & Cost Constraints:</strong> Conducting a national census costs billions of taka; a well-designed sample survey achieves high accuracy at a fraction of the cost.</li>
          <li><strong>Time Constraints:</strong> Collecting census data can take months or years, during which social conditions change. Sample data can be gathered, cleaned, and analyzed in weeks.</li>
          <li><strong>Destructive Testing:</strong> Testing seed germination rates or light bulb lifespans destroys the item. Testing the entire population would destroy all inventory!</li>
          <li><strong>Accessibility & Infinite Populations:</strong> In quality control or ecological surveys, the population may be infinite or geographically inaccessible.</li>
        </ol>
      </div>

      <div class="content-section">
        <h3>3.2 Key Terminology & Parameter vs Statistic</h3>
        <div class="grid-3">
          <div class="card-mini">
            <h5>Population (\\(\\Omega, N\\))</h5>
            <p>The entire universe of individuals, households, or items about which we want information.</p>
          </div>
          <div class="card-mini">
            <h5>Sample (\\(n\\))</h5>
            <p>A selected subset of the population actually observed and measured.</p>
          </div>
          <div class="card-mini">
            <h5>Sampling Frame (\\(F\\))</h5>
            <p>The actual physical list or database from which the sample is drawn (e.g., national voter registry, school enrollment roll).</p>
          </div>
        </div>

        <div class="table-responsive mt-3">
          <table class="styled-table">
            <thead>
              <tr>
                <th>Measure</th>
                <th>Population (Parameter - Fixed but Unknown Truth)</th>
                <th>Sample (Statistic - Calculated from Data to Estimate Parameter)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Mean</td><td>\\(\\mu\\) (mu)</td><td>\\(\\bar{x}\\) (x-bar)</td></tr>
              <tr><td>Variance</td><td>\\(\\sigma^2\\) (sigma-squared)</td><td>\\(s^2\\) (sample variance)</td></tr>
              <tr><td>Standard Deviation</td><td>\\(\\sigma\\)</td><td>\\(s\\)</td></tr>
              <tr><td>Proportion</td><td>\\(p\\) (or \\(P\\))</td><td>\\(\\hat{p}\\) (p-hat)</td></tr>
              <tr><td>Total Size</td><td>\\(N\\)</td><td>\\(n\\)</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="content-section">
        <h3>3.3 Sample Survey vs Complete Census</h3>
        <div class="table-responsive">
          <table class="styled-table">
            <thead>
              <tr>
                <th>Comparison Dimension</th>
                <th>Sample Survey</th>
                <th>Census (Complete Enumeration)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Coverage</strong></td>
                <td>Studies only a selected representative subset</td>
                <td>Examines every single unit without omission</td>
              </tr>
              <tr>
                <td><strong>Cost & Manpower</strong></td>
                <td>Substantially lower cost, less administrative strain</td>
                <td>Extremely high budget, massive field workforce needed</td>
              </tr>
              <tr>
                <td><strong>Sampling Error</strong></td>
                <td>Subject to sampling error due to partial coverage</td>
                <td>Completely <strong>free from sampling error</strong></td>
              </tr>
              <tr>
                <td><strong>Non-Sampling Error</strong></td>
                <td>Lower because fewer, better-trained enumerators can be deployed</td>
                <td>Often very high due to fatigue, respondent bias, and data entry scale</td>
              </tr>
              <tr>
                <td><strong>Speed & Frequency</strong></td>
                <td>Fast; can be repeated quarterly or monthly</td>
                <td>Infrequent (conducted once every 10 years)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="content-section">
        <h3>3.4 Probability vs Non-Probability Sampling Designs</h3>
        <p>Your lecture slides and handwritten notes categorize sampling methods into two broad families:</p>

        <div class="grid-2">
          <div class="card-mini">
            <h4>A. Probability Sampling</h4>
            <p>Every unit in the population has a <strong>known, non-zero chance of selection</strong>. Allows sampling error to be mathematically quantified and inferred to the population.</p>
            <ul>
              <li><strong>1. Simple Random Sampling (SRS):</strong> Every unit has an identical chance of selection (e.g. lottery or random number generator).</li>
              <li><strong>2. Stratified Sampling:</strong> Population is divided into mutually exclusive, homogeneous subgroups (strata: e.g., urban vs rural; year of university) and random samples are drawn within each stratum. <em>Guarantees representation of small minority groups!</em></li>
              <li><strong>3. Systematic Sampling:</strong> Order the frame, pick a random start between 1 and \\(k\\), then choose every \\(k\\)-th unit where \\(k = N/n\\).</li>
              <li><strong>4. Cluster Sampling:</strong> Population is divided into natural, heterogeneous clusters (e.g., villages, schools). A random sample of whole clusters is selected, and <em>everyone</em> inside the chosen clusters is surveyed. <em>Most cost-effective when populations are geographically dispersed!</em></li>
            </ul>
          </div>

          <div class="card-mini">
            <h4>B. Non-Probability Sampling</h4>
            <p>Selection is based on personal judgment, convenience, or availability. Cheaper and faster, but <strong>sampling error cannot be formally quantified</strong> and results cannot be generalized with known confidence.</p>
            <ul>
              <li><strong>1. Convenience Sampling:</strong> Selecting whoever is easiest to reach (e.g., surveying people standing outside a university canteen).</li>
              <li><strong>2. Judgmental / Purposive:</strong> The researcher intentionally selects subjects believed to be most typical or expert (e.g., interviewing climate policy experts).</li>
              <li><strong>3. Quota Sampling:</strong> Prespecified quotas are set for categories (e.g., 50 women, 50 men), but individual selection inside each quota is non-random.</li>
              <li><strong>4. Snowball Sampling:</strong> Existing respondents refer their acquaintances. Invaluable for marginalized, hard-to-reach, or vulnerable populations (e.g., undocumented migrant workers).</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="content-section">
        <h3>3.5 Two Sources of Error: Sampling vs Non-Sampling Error</h3>
        <div class="table-responsive">
          <table class="styled-table">
            <thead>
              <tr>
                <th>Error Type</th>
                <th>Underlying Cause</th>
                <th>Can it Occur in a Census?</th>
                <th>How to Reduce It?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Sampling Error</strong></td>
                <td>Natural variation between a sample statistic and the true population parameter because we observed only a subset.</td>
                <td><strong>No.</strong> Sampling error is 0 in a census.</td>
                <td>Increase sample size \\(n\\) (since \\(SE = \\sigma/\\sqrt{n}\\)) and use stratified designs.</td>
              </tr>
              <tr>
                <td><strong>Non-Sampling Error</strong></td>
                <td>Errors during design, questionnaire wording, respondent dishonesty, interviewer bias, or data entry mistakes.</td>
                <td><strong>Yes!</strong> Occurs in both surveys and full censuses.</td>
                <td>Better questionnaire pre-testing, rigorous training of enumerators, and double-entry data verification.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="content-section">
        <h3>3.6 What is a Sampling Distribution & Proof of Unbiasedness</h3>
        <p>A <strong>Sampling Distribution</strong> is the probability distribution of a sample statistic (such as \\(\\bar{x}\\) or \\(\\hat{p}\\)) calculated from <em>every possible sample of a given size \\(n\\)</em> that could be drawn from the population.</p>

        <div class="proof-card">
          <h4>Concrete Class Slide Example: Population \\(\\{2, 4, 6, 8\\}\\)</h4>
          <p>Population mean \\(\\mu = \\frac{2+4+6+8}{4} = 5.0\\). Draw all possible samples of size \\(n = 2\\) without replacement (Total \\(\\binom{4}{2} = 6\\) samples):</p>
          <div class="grid-3 text-center">
            <div class="card-mini">\\(\\{2, 4\\} \\implies \\bar{x} = 3\\)</div>
            <div class="card-mini">\\(\\{2, 6\\} \\implies \\bar{x} = 4\\)</div>
            <div class="card-mini">\\(\\{2, 8\\} \\implies \\bar{x} = 5\\)</div>
            <div class="card-mini">\\(\\{4, 6\\} \\implies \\bar{x} = 5\\)</div>
            <div class="card-mini">\\(\\{4, 8\\} \\implies \\bar{x} = 6\\)</div>
            <div class="card-mini">\\(\\{6, 8\\} \\implies \\bar{x} = 7\\)</div>
          </div>
          <p class="mt-2"><strong>Mean of the Sample Means \\(E(\\bar{x})\\):</strong></p>
          \\[E(\\bar{x}) = \\frac{3 + 4 + 5 + 5 + 6 + 7}{6} = \\frac{30}{6} = 5.0 = \\mu\\]
          <p><strong>Fundamental Conclusion:</strong> This proves that the sample mean \\(\\bar{x}\\) is an <strong>unbiased estimator</strong> of the population mean \\(\\mu\\).</p>
        </div>
      </div>

      <div class="content-section">
        <h3>3.7 Central Limit Theorem (CLT) & Standard Error</h3>
        <div class="formula-box">
          <strong>The Central Limit Theorem Statement:</strong><br>
          For any population with mean \\(\\mu\\) and finite standard deviation \\(\\sigma\\), regardless of whether the population distribution is normal, skewed, or bimodal, the sampling distribution of the sample mean \\(\\bar{x}\\) approaches a Normal Distribution with mean \\(\\mu\\) and variance \\(\\sigma^2 / n\\) as sample size \\(n\\) grows large:
          \\[\\bar{x} \\sim N\\left(\\mu, \\frac{\\sigma^2}{n}\\right) \\quad \\text{for } n \\ge 30\\]
        </div>

        <div class="grid-2 mt-3">
          <div class="card-mini">
            <h5>Standard Error of the Mean \\(SE(\\bar{x})\\)</h5>
            <p>Measures how much the sample mean varies from sample to sample:</p>
            \\[SE(\\bar{x}) = \\frac{\\sigma}{\\sqrt{n}}\\]
            <p><em>As sample size quadruples (\\(n \\times 4\\)), the standard error is cut in half!</em></p>
          </div>
          <div class="card-mini">
            <h5>Standard Error of Proportion \\(SE(\\hat{p})\\)</h5>
            <p>For binary survey responses (yes/no):</p>
            \\[SE(\\hat{p}) = \\sqrt{\\frac{p(1 - p)}{n}}\\]
            <p><em>Maximum variance occurs when \\(p = 0.50\\).</em></p>
          </div>
        </div>
      </div>
    `,
    handnotes: [
      {
        title: "Sampling Formulas & Exam Definitions",
        category: "Handnote Digest",
        content: `
          • Sampling Frame: The actual list from which sample units are selected.
          • Unbiasedness: E(x̄) = μ (average of all sample means equals true parameter).
          • Standard Error: SE(x̄) = σ / √n; SE(p̂) = √[p(1-p)/n]
          • Finite Population Correction (FPC): Multiply SE by √[(N-n)/(N-1)] if n/N > 5%.
          • CLT Threshold: n >= 30 is the standard rule of thumb for normality.
          • Stratified vs Cluster: Stratified = sample within ALL strata; Cluster = sample ALL units within FEW clusters.
        `
      }
    ],
    videos: [
      {
        title: "The Central Limit Theorem, Clearly Explained",
        channel: "StatQuest with Josh Starmer",
        videoId: "YAlJCEDH2uY",
        duration: "10:30",
        summary: "Visual explanation showing how sample means become normal as sample size grows, regardless of initial shape."
      },
      {
        title: "Sampling: Simple Random, Stratified, Systematic, Cluster",
        channel: "zedstatistics",
        videoId: "pTuj57uXWiI",
        duration: "13:15",
        summary: "Everyday examples comparing the 4 main probability sampling designs and when to use each in field studies."
      },
      {
        title: "Sampling Distribution of the Sample Mean",
        channel: "Khan Academy",
        videoId: "7U_b20yWjKk",
        duration: "11:08",
        summary: "Walks through how taking multiple samples creates a sampling distribution and derives the standard error formula."
      }
    ],
    questions: [
      {
        id: "q3-1",
        marks: 2,
        difficulty: "Easy",
        title: "Distinguish between Parameter and Statistic",
        question: "Distinguish between a Parameter and a Statistic. Provide the standard mathematical symbols used for each. [2 Marks]",
        solution: `
          <div class="answer-box">
            <table class="styled-table">
              <tr>
                <th>Criterion</th>
                <th>Parameter</th>
                <th>Statistic</th>
              </tr>
              <tr>
                <td><strong>Origin</strong></td>
                <td>Calculated from the entire population</td>
                <td>Calculated from an observed sample</td>
              </tr>
              <tr>
                <td><strong>Nature</strong></td>
                <td>Fixed numerical constant, but usually unknown</td>
                <td>Random variable; varies from sample to sample</td>
              </tr>
              <tr>
                <td><strong>Symbols</strong></td>
                <td>Mean: \\(\\mu\\), Variance: \\(\\sigma^2\\), Proportion: \\(p\\)</td>
                <td>Mean: \\(\\bar{x}\\), Variance: \\(s^2\\), Proportion: \\(\\hat{p}\\)</td>
              </tr>
            </table>
          </div>
        `
      },
      {
        id: "q3-2",
        marks: 2,
        difficulty: "Easy",
        title: "Define Sampling Error vs Non-Sampling Error",
        question: "Define sampling error and non-sampling error. Can a complete census suffer from sampling error? [2 Marks]",
        solution: `
          <div class="answer-box">
            <ul>
              <li><strong>Sampling Error:</strong> The natural difference between a sample statistic and the true population parameter arising purely because only a part of the population was observed rather than the whole.</li>
              <li><strong>Non-Sampling Error:</strong> Errors arising from data collection, faulty questionnaire design, non-response, respondent untruthfulness, or tabulation errors.</li>
            </ul>
            <p><strong>Can a census suffer from sampling error?</strong><br>
            <strong>No.</strong> In a census, the entire population is examined without omission, so sampling error is exactly zero. However, a census can suffer from severe non-sampling errors.</p>
          </div>
        `
      },
      {
        id: "q3-3",
        marks: 5,
        difficulty: "Medium",
        title: "Differentiate Stratified Sampling from Cluster Sampling",
        question: "Compare and contrast Stratified Random Sampling and Cluster Sampling across: (a) Division of population, (b) Selection procedure, (c) Relative cost, and (d) Ideal within-group homogeneity. [5 Marks]",
        solution: `
          <div class="answer-box">
            <table class="styled-table">
              <thead>
                <tr>
                  <th>Dimension</th>
                  <th>Stratified Sampling</th>
                  <th>Cluster Sampling</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Division of Population</strong></td>
                  <td>Divided into homogeneous subgroups (strata) based on an identified variable (e.g., income, gender).</td>
                  <td>Divided into natural, heterogeneous geographic or administrative clusters (e.g., schools, villages).</td>
                </tr>
                <tr>
                  <td><strong>Selection Procedure</strong></td>
                  <td>Sample units are randomly selected <em>from every single stratum</em>.</td>
                  <td>A random sample of <em>entire clusters</em> is chosen; all units within chosen clusters are studied.</td>
                </tr>
                <tr>
                  <td><strong>Within-Group Homogeneity</strong></td>
                  <td><strong>Internally homogeneous</strong> within each stratum, heterogeneous between strata.</td>
                  <td><strong>Internally heterogeneous</strong> within each cluster (mirroring the population), homogeneous between clusters.</td>
                </tr>
                <tr>
                  <td><strong>Cost & Field Efficiency</strong></td>
                  <td>Higher travel and administrative cost because units are spread across all strata.</td>
                  <td>Highly cost-effective and operationally convenient for geographically dispersed populations.</td>
                </tr>
                <tr>
                  <td><strong>Primary Objective</strong></td>
                  <td>Maximizing statistical precision and guaranteeing subgroup representation.</td>
                  <td>Minimizing fieldwork logistics and data collection expenses.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        id: "q3-4",
        marks: 5,
        difficulty: "Medium",
        title: "Standard Error Computation & Sample Size Quadrupling",
        question: "In a nationwide study of microcredit borrowers, the weekly household savings has a population standard deviation \\(\\sigma = 400\\text{ BDT}\\).<br>(a) Find the standard error of the sample mean if a random sample of \\(n = 64\\) households is surveyed.<br>(b) By how much must the sample size be increased if the researcher wishes to reduce the standard error to 25 BDT? [5 Marks]",
        solution: `
          <div class="answer-box">
            <p><strong>(a) Standard Error for \\(n = 64\\):</strong></p>
            \\[SE(\\bar{x}) = \\frac{\\sigma}{\\sqrt{n}} = \\frac{400}{\\sqrt{64}} = \\frac{400}{8} = 50\\text{ BDT}\\]

            <p><strong>(b) Sample size required for \\(SE = 25\\text{ BDT}\\):</strong></p>
            \\[SE = \\frac{\\sigma}{\\sqrt{n_{\\text{new}}}}\\]
            \\[25 = \\frac{400}{\\sqrt{n_{\\text{new}}}}\\]
            \\[\\sqrt{n_{\\text{new}}} = \\frac{400}{25} = 16\\]
            \\[n_{\\text{new}} = (16)^2 = 256\\]
            <p><strong>Increase required:</strong> \\(256 - 64 = 192\\) additional households.</p>
            <p><strong>Theoretical Takeaway:</strong> To cut the standard error in half (from 50 to 25), the sample size must be quadrupled (\\(64 \\times 4 = 256\\)).</p>
          </div>
        `
      },
      {
        id: "q3-5",
        marks: 10,
        difficulty: "Hard",
        title: "Critical Analytical Problem: Sampling Distribution & CLT Proof",
        question: "A micro-finance researcher studies loan repayment amounts. The population consists of 5 loans: \\(\\{1000, 2000, 3000, 4000, 5000\\}\\) (in BDT).<br>(a) Calculate the population mean \\(\\mu\\) and population variance \\(\\sigma^2\\).<br>(b) List all possible samples of size \\(n = 2\\) drawn without replacement. Construct the sampling distribution of the sample mean \\(\\bar{x}\\).<br>(c) Show that \\(E(\\bar{x}) = \\mu\\) and verify that \\(\\text{Var}(\\bar{x}) = \\frac{\\sigma^2}{n} \\left(\\frac{N - n}{N - 1}\\right)\\).<br>(d) Explain the Central Limit Theorem and discuss why it allows development economists to use normal-theory inference even when poverty or income data is heavily right-skewed. [10 Marks]",
        solution: `
          <div class="answer-box">
            <p><strong>Part (a): Population Parameters (\\(N = 5\\))</strong></p>
            \\[\\mu = \\frac{1000 + 2000 + 3000 + 4000 + 5000}{5} = \\frac{15000}{5} = 3000\\text{ BDT}\\]
            \\[\\sigma^2 = \\frac{\\sum (X - \\mu)^2}{N} = \\frac{(-2000)^2 + (-1000)^2 + 0^2 + (1000)^2 + (2000)^2}{5} = \\frac{10,000,000}{5} = 2,000,000\\]

            <p><strong>Part (b): All \\(\\binom{5}{2} = 10\\) Samples Without Replacement:</strong></p>
            <table class="styled-table text-center">
              <tr>
                <th>Sample</th>
                <th>Elements</th>
                <th>\\(\\bar{x}\\)</th>
                <th>Sample</th>
                <th>Elements</th>
                <th>\\(\\bar{x}\\)</th>
              </tr>
              <tr><td>1</td><td>{1000, 2000}</td><td>1500</td><td>6</td><td>{2000, 4000}</td><td>3000</td></tr>
              <tr><td>2</td><td>{1000, 3000}</td><td>2000</td><td>7</td><td>{2000, 5000}</td><td>3500</td></tr>
              <tr><td>3</td><td>{1000, 4000}</td><td>2500</td><td>8</td><td>{3000, 4000}</td><td>3500</td></tr>
              <tr><td>4</td><td>{1000, 5000}</td><td>3000</td><td>9</td><td>{3000, 5000}</td><td>4000</td></tr>
              <tr><td>5</td><td>{2000, 3000}</td><td>2500</td><td>10</td><td>{4000, 5000}</td><td>4500</td></tr>
            </table>

            <p><strong>Sampling Distribution of \\(\\bar{x}\\):</strong></p>
            <table class="styled-table text-center">
              <tr>
                <th>\\(\\bar{x}\\)</th>
                <th>1500</th><th>2000</th><th>2500</th><th>3000</th><th>3500</th><th>4000</th><th>4500</th><th>Total</th>
              </tr>
              <tr>
                <td>\\(P(\\bar{x})\\)</td>
                <td>0.1</td><td>0.1</td><td>0.2</td><td>0.2</td><td>0.2</td><td>0.1</td><td>0.1</td><td><strong>1.0</strong></td>
              </tr>
            </table>

            <p><strong>Part (c): Verification of Unbiasedness and Variance Formula:</strong></p>
            \\[E(\\bar{x}) = \\sum \\bar{x} P(\\bar{x}) = (1500)(0.1) + (2000)(0.1) + (2500)(0.2) + (3000)(0.2) + (3500)(0.2) + (4000)(0.1) + (4500)(0.1) = 3000 = \\mu\\]
            <p>Now, calculate \\(\\text{Var}(\\bar{x}) = \\sum (\\bar{x} - \\mu)^2 P(\\bar{x})\\):</p>
            \\[(-1500)^2(0.1) + (-1000)^2(0.1) + (-500)^2(0.2) + 0 + (500)^2(0.2) + (1000)^2(0.1) + (1500)^2(0.1)\\]
            \\[= 225,000 + 100,000 + 50,000 + 0 + 50,000 + 100,000 + 225,000 = 750,000\\]
            <p>Now verify using the theoretical finite population formula:</p>
            \\[\\text{Var}(\\bar{x}) = \\frac{\\sigma^2}{n} \\left(\\frac{N - n}{N - 1}\\right) = \\frac{2,000,000}{2} \\left(\\frac{5 - 2}{5 - 1}\\right) = 1,000,000 \\times \\frac{3}{4} = 750,000\\]
            <p>Both calculations match exactly (\\(750,000 = 750,000\\)). The formula is verified.</p>

            <p><strong>Part (d): Application of CLT to Development Studies:</strong></p>
            <p>Household income and land holding sizes in developing nations are notoriously non-normal (severely right-skewed with high inequality). If an analyst attempted inference on individual households using normal models, error rates would be severe. However, the <strong>Central Limit Theorem</strong> guarantees that if we draw a sufficiently large sample (e.g., \\(n \\ge 100\\) households), the <em>sample average income \\(\\bar{x}\\)</em> behaves almost perfectly according to a normal distribution. Thus, researchers can construct valid 95% confidence intervals and perform robust hypothesis tests without requiring individual income itself to be normally distributed.</p>
          </div>
        `
      }
    ]
  }
];
