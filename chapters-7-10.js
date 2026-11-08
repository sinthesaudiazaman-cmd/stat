/**
 * STAT 2251: Inferential Statistics for Development Studies
 * Chapters 7, 8, 9, and 10 Course Data
 * Includes Chi-Square Tests, ANOVA Derivations, Time Series Trend Fitting & Index Numbers
 */

window.CHAPTERS_7_10 = [
  {
    id: 7,
    section: "Section B",
    title: "Chi-Square Tests (Goodness of Fit & Independence)",
    code: "STAT 2251 - CH07",
    subtitle: "Contingency Tables, Test of Independence, Goodness of Fit & Yates' Correction",
    overview: "In development studies, much of our empirical evidence is categorical: gender, district, poverty status, program participation. The Chi-Square test (χ²) allows researchers to test for statistical independence in contingency tables and evaluate whether observed frequencies fit theoretical expectations.",
    readTime: "25 min read",
    topics: [
      { id: "7-1", title: "7.1 What is the Chi-Square (χ²) Distribution & Properties" },
      { id: "7-2", title: "7.2 Chi-Square Test of Independence (Contingency Tables)" },
      { id: "7-3", title: "7.3 Chi-Square Goodness of Fit Test" },
      { id: "7-4", title: "7.4 Vital Assumptions & Yates' Continuity Correction" },
      { id: "7-5", title: "7.6 Real-World Development Applications (Health, Education, Voting)" }
    ],
    explanation: `
      <div class="content-section">
        <h3>7.1 What is the Chi-Square (\\(\\chi^2\\)) Distribution?</h3>
        <p class="lead-text">
          The <strong>Chi-Square (\\(\\chi^2\\)) Test</strong> is a non-parametric statistical method used to evaluate categorical variables. It compares the <strong>Observed frequencies (\\(O\\))</strong> collected from field data against the <strong>Expected frequencies (\\(E\\))</strong> that would occur under the null hypothesis of no relationship or uniform distribution.
        </p>

        <div class="formula-box">
          \\[\\chi^2 = \\sum \\frac{(O - E)^2}{E}\\]
        </div>

        <div class="callout callout-note">
          <strong>Key Properties of the \\(\\chi^2\\) Distribution:</strong>
          <ul>
            <li><strong>Non-Negative:</strong> Since differences are squared, \\(\\chi^2 \\ge 0\\). It is bounded on the left by zero and extends to \\(+\\infty\\).</li>
            <li><strong>Asymmetrical & Right-Skewed:</strong> Skewed heavily to the right for small degrees of freedom; approaches a symmetric bell-shaped Normal curve as \\(df \\to \\infty\\).</li>
            <li><strong>Parameter:</strong> Defined entirely by its degrees of freedom \\(df = \\nu\\).</li>
            <li><strong>Mean & Variance:</strong> Mean \\(E(\\chi^2) = df\\), Variance \\(\\text{Var}(\\chi^2) = 2 \\cdot df\\).</li>
          </ul>
        </div>
      </div>

      <div class="content-section">
        <h3>7.2 Chi-Square Test of Independence (Contingency Tables)</h3>
        <p>Used to determine whether two categorical variables (e.g. <em>Gender</em> and <em>Study Method Preference</em>, or <em>Poverty Bracket</em> and <em>Vaccine Uptake</em>) are statistically independent or significantly associated.</p>

        <div class="timeline-box">
          <div class="timeline-item">
            <h4>Step 1: State Hypotheses</h4>
            <ul>
              <li>\\(H_0\\): The two categorical variables are <strong>independent</strong> (no association).</li>
              <li>\\(H_1\\): The two categorical variables are <strong>dependent / associated</strong> (a relationship exists).</li>
            </ul>
          </div>

          <div class="timeline-item">
            <h4>Step 2: Calculate Expected Frequencies (\\(E\\))</h4>
            <p>For each cell in an \\(r \\times c\\) contingency table:</p>
            <div class="formula-box">
              \\[E_{ij} = \\frac{\\text{Row } i \\text{ Total} \\times \\text{Column } j \\text{ Total}}{\\text{Grand Total } (N)}\\]
            </div>
          </div>

          <div class="timeline-item">
            <h4>Step 3: Degrees of Freedom & Decision Rule</h4>
            <div class="formula-box">
              \\[df = (\\text{rows} - 1) \\times (\\text{columns} - 1) = (r - 1)(c - 1)\\]
            </div>
            <p>Reject \\(H_0\\) at level \\(\\alpha\\) if \\(\\chi^2_{\\text{calculated}} > \\chi^2_{\\alpha, df}\\).</p>
          </div>
        </div>
      </div>

      <div class="content-section">
        <h3>7.3 Chi-Square Goodness of Fit Test</h3>
        <p>Evaluates whether a single categorical variable fits a hypothesized theoretical distribution (e.g., uniform distribution, genetic ratios 9:3:3:1, or equal consumer preferences):</p>
        <div class="formula-box">
          \\[df = k - 1 - m\\]
          <p>where \\(k\\) = number of categories, and \\(m\\) = number of population parameters estimated from sample data.</p>
        </div>
      </div>

      <div class="content-section">
        <h3>7.4 Vital Assumptions & Yates' Continuity Correction</h3>
        <ol>
          <li><strong>Categorical Data:</strong> Observations must consist of discrete counts (frequencies), not continuous measurements or percentages.</li>
          <li><strong>Mutually Exclusive & Independent:</strong> Each respondent belongs to one and only one cell (no double counting).</li>
          <li><strong>Rule of Five:</strong> Every cell must have an expected frequency \\(E \\ge 5\\). If any cell has \\(E < 5\\), combine adjacent categories!</li>
          <li><strong>Yates' Correction for Continuity (for \\(2 \\times 2\\) tables):</strong> Because the continuous \\(\\chi^2\\) distribution approximates discrete frequencies, for a \\(2 \\times 2\\) table with \\(df = 1\\), apply Yates' correction:
            <div class="formula-box">
              \\[\\chi^2_{\\text{Yates}} = \\sum \\frac{(|O - E| - 0.5)^2}{E}\\]
            </div>
          </li>
        </ol>
      </div>
    `,
    handnotes: [
      {
        title: "Chi-Square Test Cheat Sheet",
        category: "Handnote Digest",
        content: `
          • Formula: χ² = ∑ [ (O - E)² / E ]
          • Expected Cell: E = (Row Total * Col Total) / Grand Total
          • Independence df: (r - 1) * (c - 1); Goodness of fit df: k - 1 - m
          • Critical value benchmark for 2x2 table at α=0.05 (df=1): χ²_crit = 3.841
          • Critical value for 3 categories at α=0.05 (df=2): χ²_crit = 5.991
          • Critical value for 4 categories at α=0.05 (df=3): χ²_crit = 7.815
          • Yates' Correction: Subtract 0.5 from |O - E| before squaring when df = 1.
          • Assumption: All expected cell counts E >= 5.
        `
      }
    ],
    videos: [
      {
        title: "Chi-Square Tests: Independence & Goodness of Fit",
        channel: "StatQuest with Josh Starmer",
        videoId: "VskmMgXmkMQ",
        duration: "13:40",
        summary: "Visual explanation of how observed vs expected counts create the Chi-Square test statistic."
      },
      {
        title: "Chi-Square Test for Independence (Contingency Tables)",
        channel: "The Organic Chemistry Tutor",
        videoId: "Z_d_R4_1X-k",
        duration: "18:10",
        summary: "Step-by-step calculations finding row/col totals, expected values, and comparing with critical values."
      },
      {
        title: "Contingency Table Chi-Square Calculations",
        channel: "Khan Academy",
        videoId: "hpWdUmWACGU",
        duration: "10:55",
        summary: "Clear tutorial walking through calculating expected values and finding p-values."
      }
    ],
    questions: [
      {
        id: "q7-1",
        marks: 2,
        difficulty: "Easy",
        title: "State Key Assumptions of the Chi-Square Test",
        question: "State the essential assumptions required to perform a valid Chi-Square Test of Independence. [2 Marks]",
        solution: `
          <div class="answer-box">
            <ol>
              <li><strong>Categorical Data:</strong> Data must be observed discrete counts (frequencies), not continuous values, means, or percentages.</li>
              <li><strong>Random & Independent Observations:</strong> Each subject or item is sampled independently and counted in only one cell.</li>
              <li><strong>Adequate Expected Cell Counts (Rule of Five):</strong> In every cell of the contingency table, the expected frequency must be at least 5 (\\(E_{ij} \\ge 5\\)).</li>
              <li><strong>Sampling Fraction:</strong> The sample size \\(n\\) should represent less than 10% of the population if sampled without replacement.</li>
            </ol>
          </div>
        `
      },
      {
        id: "q7-2",
        marks: 2,
        difficulty: "Easy",
        title: "Calculate Expected Frequency for a Single Cell",
        question: "In a survey of 200 farmers, 80 received micro-credit and 120 did not. Overall, 50 adopted high-yielding seeds. Under the null hypothesis of independence, calculate the expected number of credit recipients who adopted high-yielding seeds. [2 Marks]",
        solution: `
          <div class="answer-box">
            <p><strong>Given:</strong></p>
            <ul>
              <li>Row Total (Credit Recipients): \\(R_1 = 80\\)</li>
              <li>Column Total (Seed Adopters): \\(C_1 = 50\\)</li>
              <li>Grand Total: \\(N = 200\\)</li>
            </ul>
            \\[E_{11} = \\frac{\\text{Row Total} \\times \\text{Column Total}}{\\text{Grand Total}} = \\frac{80 \\times 50}{200} = \\frac{4000}{200} = 20\\text{ farmers}\\]
            <p><strong>Answer:</strong> The expected frequency is exactly <strong>20 farmers</strong>.</p>
          </div>
        `
      },
      {
        id: "q7-3",
        marks: 5,
        difficulty: "Medium",
        title: "Chi-Square Goodness of Fit Test on Consumer Preferences",
        question: "A dairy cooperative claims that rural households have equal preferences for 4 varieties of fortified yogurt: Vanilla, Chocolate, Strawberry, and Mango. A random survey of 120 consumers reveals observed preferences: Vanilla=28, Chocolate=36, Strawberry=26, Mango=30. Test at the 5% level of significance whether consumer preferences are uniformly distributed. (Given \\(\\chi^2_{0.05, 3} = 7.815\\)). [5 Marks]",
        solution: `
          <div class="answer-box">
            <p><strong>Step 1: State Hypotheses:</strong></p>
            <ul>
              <li>\\(H_0\\): Consumer preferences are equally distributed across all 4 varieties (\\(p_1 = p_2 = p_3 = p_4 = 0.25\\)).</li>
              <li>\\(H_1\\): Consumer preferences are not equally distributed.</li>
            </ul>

            <p><strong>Step 2: Expected Frequencies (\\(E\\)):</strong><br>
            Under \\(H_0\\), expected frequency for each variety is:
            \\[E = \\frac{120}{4} = 30\\text{ consumers for each flavour}\\]
            </p>

            <p><strong>Step 3: Calculate \\(\\chi^2\\) Statistic:</strong></p>
            <table class="styled-table text-center">
              <tr>
                <th>Flavor</th><th>Observed (\\(O\\))</th><th>Expected (\\(E\\))</th><th>\\(O - E\\)</th><th>\\((O - E)^2\\)</th><th>\\((O - E)^2 / E\\)</th>
              </tr>
              <tr><td>Vanilla</td><td>28</td><td>30</td><td>-2</td><td>4</td><td>\\(4/30 \\approx 0.133\\)</td></tr>
              <tr><td>Chocolate</td><td>36</td><td>30</td><td>+6</td><td>36</td><td>\\(36/30 = 1.200\\)</td></tr>
              <tr><td>Strawberry</td><td>26</td><td>30</td><td>-4</td><td>16</td><td>\\(16/30 \\approx 0.533\\)</td></tr>
              <tr><td>Mango</td><td>30</td><td>30</td><td>0</td><td>0</td><td>\\(0/30 = 0.000\\)</td></tr>
              <tr><td><strong>Total</strong></td><td><strong>120</strong></td><td><strong>120</strong></td><td><strong>0</strong></td><td>-</td><td><strong>\\(\\chi^2 = 1.866\\)</strong></td></tr>
            </table>

            <p><strong>Step 4: Degrees of Freedom & Decision:</strong><br>
            \\(df = k - 1 = 4 - 1 = 3\\).<br>
            Critical value: \\(\\chi^2_{0.05, 3} = 7.815\\).<br>
            Since \\(\\chi^2_{\\text{calculated}} = 1.87 < 7.815\\), we <strong>fail to reject \\(H_0\\)</strong>.</p>
            <p><strong>Conclusion:</strong> There is no significant difference in preferences among the four yogurt varieties; the observed sample data fits the cooperative's equal-preference claim.</p>
          </div>
        `
      },
      {
        id: "q7-4",
        marks: 5,
        difficulty: "Medium",
        title: "Chi-Square Test of Independence (2x2 Gender & Preference)",
        question: `A survey of 100 individuals investigated beverage preference across gender:<br>
        Male: Likes Tea = 30, Likes Coffee = 20 (Row total = 50)<br>
        Female: Likes Tea = 10, Likes Coffee = 40 (Row total = 50)<br>
        Test at \\(\\alpha = 0.05\\) whether beverage preference is independent of gender. (Given \\(\\chi^2_{0.05, 1} = 3.841\\)). [5 Marks]`,
        solution: `
          <div class="answer-box">
            <p><strong>Step 1: Hypotheses:</strong></p>
            <ul>
              <li>\\(H_0\\): Beverage preference is independent of gender.</li>
              <li>\\(H_1\\): Beverage preference is dependent on gender.</li>
            </ul>

            <p><strong>Step 2: Marginal Totals & Expected Frequencies:</strong><br>
            Total Tea = \\(30 + 10 = 40\\); Total Coffee = \\(20 + 40 = 60\\); Grand Total \\(N = 100\\).</p>
            <ul>
              <li>Male & Tea: \\(E_{11} = \\frac{50 \\times 40}{100} = 20\\)</li>
              <li>Male & Coffee: \\(E_{12} = \\frac{50 \\times 60}{100} = 30\\)</li>
              <li>Female & Tea: \\(E_{21} = \\frac{50 \\times 40}{100} = 20\\)</li>
              <li>Female & Coffee: \\(E_{22} = \\frac{50 \\times 60}{100} = 30\\)</li>
            </ul>

            <p><strong>Step 3: Chi-Square Test Statistic:</strong></p>
            \\[\\chi^2 = \\frac{(30 - 20)^2}{20} + \\frac{(20 - 30)^2}{30} + \\frac{(10 - 20)^2}{20} + \\frac{(40 - 30)^2}{30}\\]
            \\[\\chi^2 = \\frac{100}{20} + \\frac{100}{30} + \\frac{100}{20} + \\frac{100}{30} = 5.00 + 3.333 + 5.00 + 3.333 = 16.666\\]

            <p><strong>Step 4: Decision & Conclusion:</strong><br>
            \\(df = (2 - 1)(2 - 1) = 1\\). Critical value \\(\\chi^2_{0.05, 1} = 3.841\\).<br>
            Calculated \\(\\chi^2 = 16.67 \\gg 3.841\\). We <strong>reject \\(H_0\\)</strong>.</p>
            <p><strong>Conclusion:</strong> There is a highly statistically significant relationship between gender and beverage choice. Males are significantly more inclined to prefer tea, while females favor coffee.</p>
          </div>
        `
      },
      {
        id: "q7-5",
        marks: 10,
        difficulty: "Hard",
        title: "Critical Analytical Problem: Socio-Economic Class & Microfinance Participation",
        question: `In a rural development impact assessment, 300 households were classified by socio-economic class (Landless, Marginal Farmer, Smallholder) and their adoption status of a microfinance livelihood program:<br>
        Landless: Adopted = 70, Non-Adopted = 30 (Row Total = 100)<br>
        Marginal Farmer: Adopted = 60, Non-Adopted = 40 (Row Total = 100)<br>
        Smallholder: Adopted = 30, Non-Adopted = 70 (Row Total = 100)<br>
        (a) Set up the null and alternative hypotheses. [1 Mark]<br>
        (b) Compute the complete table of expected frequencies. [3 Marks]<br>
        (c) Calculate the Chi-Square test statistic. [3 Marks]<br>
        (d) At \\(\\alpha = 0.01\\), make a statistical decision and draw conclusions for development policy. (Given \\(\\chi^2_{0.01, 2} = 9.210, \\chi^2_{0.05, 2} = 5.991\\)). [2 Marks]<br>
        (e) Explain why researchers must not apply the Chi-Square test if expected counts fall below 5. [1 Mark]`,
        solution: `
          <div class="answer-box">
            <p><strong>(a) Hypotheses:</strong></p>
            <ul>
              <li>\\(H_0\\): Microfinance program adoption is independent of socio-economic class.</li>
              <li>\\(H_1\\): Program adoption is dependent on socio-economic class.</li>
            </ul>

            <p><strong>(b) Table of Observed and Expected Frequencies:</strong><br>
            Column Totals: Adopted = \\(70 + 60 + 30 = 160\\); Non-Adopted = \\(30 + 40 + 70 = 140\\); Grand Total \\(N = 300\\).</p>
            <ul>
              <li>Landless: \\(E_{\\text{Adopted}} = \\frac{100 \\times 160}{300} = 53.33\\); \\(E_{\\text{Non}} = \\frac{100 \\times 140}{300} = 46.67\\)</li>
              <li>Marginal: \\(E_{\\text{Adopted}} = \\frac{100 \\times 160}{300} = 53.33\\); \\(E_{\\text{Non}} = \\frac{100 \\times 140}{300} = 46.67\\)</li>
              <li>Smallholder: \\(E_{\\text{Adopted}} = \\frac{100 \\times 160}{300} = 53.33\\); \\(E_{\\text{Non}} = \\frac{100 \\times 140}{300} = 46.67\\)</li>
            </ul>

            <p><strong>(c) Chi-Square Calculation:</strong></p>
            <table class="styled-table text-center">
              <tr>
                <th>Cell</th><th>\\(O\\)</th><th>\\(E\\)</th><th>\\((O - E)\\)</th><th>\\((O - E)^2\\)</th><th>\\((O - E)^2 / E\\)</th>
              </tr>
              <tr><td>Landless - Adopted</td><td>70</td><td>53.33</td><td>+16.67</td><td>277.89</td><td>5.21</td></tr>
              <tr><td>Landless - Non</td><td>30</td><td>46.67</td><td>-16.67</td><td>277.89</td><td>5.95</td></tr>
              <tr><td>Marginal - Adopted</td><td>60</td><td>53.33</td><td>+6.67</td><td>44.49</td><td>0.83</td></tr>
              <tr><td>Marginal - Non</td><td>40</td><td>46.67</td><td>-6.67</td><td>44.49</td><td>0.95</td></tr>
              <tr><td>Smallholder - Adopted</td><td>30</td><td>53.33</td><td>-23.33</td><td>544.29</td><td>10.21</td></tr>
              <tr><td>Smallholder - Non</td><td>70</td><td>46.67</td><td>+23.33</td><td>544.29</td><td>11.66</td></tr>
              <tr><td><strong>Total</strong></td><td><strong>300</strong></td><td><strong>300.00</strong></td><td><strong>0</strong></td><td>-</td><td><strong>\\(\\chi^2 = 34.81\\)</strong></td></tr>
            </table>

            <p><strong>(d) Decision & Policy Insights:</strong><br>
            \\(df = (3 - 1)(2 - 1) = 2\\). Critical value at \\(\\alpha = 0.01\\) is \\(9.210\\).<br>
            Calculated \\(\\chi^2 = 34.81 \\gg 9.210\\). Reject \\(H_0\\) at the 1% significance level.</p>
            <p><strong>Policy Insight:</strong> Adoption rates are strongly differentiated by class: 70% of landless households adopt microcredit, compared to only 30% of smallholders. The program is effectively serving its primary target of asset-poor, landless rural laborers, while wealthier smallholders likely utilize formal agricultural banks instead.</p>

            <p><strong>(e) Theoretical Critique of Small Expected Counts:</strong><br>
            The Chi-Square test assumes the test statistic follows a continuous \\(\\chi^2\\) distribution. When \\(E < 5\\), dividing by a tiny denominator artificially inflates \\(\\chi^2\\), drastically increasing Type I error rates (finding false significance).</p>
          </div>
        `
      }
    ]
  },

  {
    id: 8,
    section: "Section B",
    title: "Analysis of Variance (ANOVA)",
    code: "STAT 2251 - CH08",
    subtitle: "Variance Components, Sum of Squares Proofs, F-Distribution & One-Way/Two-Way Classifications",
    overview: "Why can't we just run multiple t-tests? ANOVA solves the critical problem of family-wise Type I error inflation. This chapter provides the complete algebraic derivation of Total, Between, and Within Sum of Squares, the construction of standard ANOVA tables, F-ratio calculations, and One-Way vs Two-Way designs.",
    readTime: "30 min read",
    topics: [
      { id: "8-1", title: "8.1 Purpose of ANOVA & The Family-Wise Error Problem" },
      { id: "8-2", title: "8.2 Statistical Assumptions of ANOVA" },
      { id: "8-3", title: "8.3 One-Way ANOVA: Mathematical Model & Partition of Variance" },
      { id: "8-4", title: "8.4 Full Mathematical Derivation of Sum of Squares (SST = SSB + SSW)" },
      { id: "8-5", title: "8.5 The ANOVA Summary Table & F-Statistic" },
      { id: "8-6", title: "8.6 Worked Example from Class Notes (Three Teaching Methods)" },
      { id: "8-7", title: "8.7 Two-Way ANOVA & Interaction Effects" }
    ],
    explanation: `
      <div class="content-section">
        <h3>8.1 Purpose of ANOVA: Why Not Multiple t-Tests?</h3>
        <p class="lead-text">
          When comparing the means of \\(k \\ge 3\\) independent populations (e.g., crop yields across 4 agro-ecological zones, or test scores under 3 teaching methods), one might mistakenly consider running multiple pairwise two-sample \\(t\\)-tests.
        </p>
        <div class="callout callout-warning">
          <strong>The Danger of Family-Wise Error Rate Inflation:</strong>
          <p>For \\(k = 4\\) groups, there are \\(\\binom{4}{2} = 6\\) pairwise tests. If each test is run at \\(\\alpha = 0.05\\), the probability of committing at least one Type I error across the family of tests is:</p>
          \\[\\alpha_{\\text{family}} = 1 - (1 - \\alpha)^c = 1 - (1 - 0.05)^6 = 1 - (0.95)^6 = 1 - 0.735 = 0.265 \\text{ (26.5%!)}\\]
          <p>Instead of a 5% error rate, you have a <strong>26.5% chance</strong> of falsely declaring significance! <strong>ANOVA</strong> prevents this by testing whether all group means are simultaneously equal using a <strong>single global test (F-test)</strong> at the exact designated \\(\\alpha\\) level.</p>
        </div>
      </div>

      <div class="content-section">
        <h3>8.2 Assumptions Underlying ANOVA</h3>
        <ol>
          <li><strong>Normality:</strong> The response variable in each treatment population is normally distributed.</li>
          <li><strong>Independence of Observations:</strong> Sample observations are randomly selected and independent within and between groups.</li>
          <li><strong>Homogeneity of Variances (Homoskedasticity):</strong> All \\(k\\) treatment populations share a common variance: \\(\\sigma_1^2 = \\sigma_2^2 = \\dots = \\sigma_k^2 = \\sigma^2\\).</li>
        </ol>
      </div>

      <div class="content-section">
        <h3>8.3 Partitioning Total Variance & Mathematical Derivation</h3>
        <p>From your handwritten notes (Pages 15-18), let \\(x_{ij}\\) be the \\(j\\)-th observation in the \\(i\\)-th group (\\(i=1,\\dots,k; j=1,\\dots,n_i\\)). Total observations \\(N = \\sum n_i\\). Grand mean \\(\\bar{x} = \\frac{T}{N}\\).</p>

        <div class="proof-card">
          <h4>Fundamental Identity: Total SS = Between SS + Within SS</h4>
          <p>Express the deviation of any individual observation from the grand mean as:</p>
          \\[(x_{ij} - \\bar{x}) = (\\bar{x}_i - \\bar{x}) + (x_{ij} - \\bar{x}_i)\\]
          <p>Squaring both sides and summing over all \\(i\\) and \\(j\\):</p>
          \\[\\sum_{i=1}^k \\sum_{j=1}^{n_i} (x_{ij} - \\bar{x})^2 = \\sum_{i=1}^k n_i (\\bar{x}_i - \\bar{x})^2 + \\sum_{i=1}^k \\sum_{j=1}^{n_i} (x_{ij} - \\bar{x}_i)^2 + 2 \\sum_{i=1}^k (\\bar{x}_i - \\bar{x}) \\sum_{j=1}^{n_i} (x_{ij} - \\bar{x}_i)\\]
          <p>Since the sum of deviations around the group mean is zero (\\(\\sum (x_{ij} - \\bar{x}_i) = 0\\)), the cross-product vanishes:</p>
          <div class="formula-highlight">
            \\[\\mathbf{S_T = S_B + S_W} \\quad \\text{or} \\quad \\mathbf{SST = SSB + SSW}\\]
          </div>

          <h5 class="mt-3">Computational Formulas (From Page 16 Handnotes):</h5>
          <ul>
            <li><strong>Total Sum of Squares (\\(S_T\\)):</strong>
              \\[S_T = \\sum_{i=1}^k \\sum_{j=1}^{n_i} x_{ij}^2 - \\frac{T^2}{N}\\]
            </li>
            <li><strong>Between Groups Sum of Squares (\\(S_B\\)):</strong>
              \\[S_B = \\sum_{i=1}^k \\frac{T_i^2}{n_i} - \\frac{T^2}{N}\\]
            </li>
            <li><strong>Within Groups Sum of Squares (\\(S_W\\)):</strong>
              \\[S_W = S_T - S_B\\]
            </li>
          </ul>
        </div>
      </div>

      <div class="content-section">
        <h3>8.4 The Standard ANOVA Summary Table</h3>
        <div class="table-responsive">
          <table class="styled-table text-center">
            <thead>
              <tr>
                <th>Source of Variation</th>
                <th>Sum of Squares (SS)</th>
                <th>Degrees of Freedom (df)</th>
                <th>Mean Square (MS)</th>
                <th>F-Ratio Statistic</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Between Groups (Treatments)</strong></td>
                <td>\\(S_B\\) (SSB)</td>
                <td>\\(k - 1\\)</td>
                <td>\\(MSB = \\frac{S_B}{k - 1}\\)</td>
                <td rowspan="2">\\[F = \\frac{MSB}{MSW}\\]</td>
              </tr>
              <tr>
                <td><strong>Within Groups (Error)</strong></td>
                <td>\\(S_W\\) (SSW)</td>
                <td>\\(N - k\\)</td>
                <td>\\(MSW = \\frac{S_W}{N - k}\\)</td>
              </tr>
              <tr>
                <td><strong>Total</strong></td>
                <td>\\(S_T\\) (SST)</td>
                <td>\\(N - 1\\)</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p><strong>Decision Rule:</strong> Reject \\(H_0: \\mu_1 = \\mu_2 = \\dots = \\mu_k\\) at level \\(\\alpha\\) if \\(F_{\\text{calculated}} > F_{\\alpha, k-1, N-k}\\).</p>
      </div>
    `,
    handnotes: [
      {
        title: "ANOVA Complete Formulas Reference",
        category: "Handnote Digest",
        content: `
          • H0: μ1 = μ2 = ... = μk vs H1: At least one pair differs.
          • Correction Factor: CF = T^2 / N
          • SST = ∑∑ x_ij^2 - CF; df = N - 1
          • SSB = ∑ (T_i^2 / n_i) - CF; df = k - 1
          • SSW = SST - SSB; df = N - k
          • MSB = SSB / (k - 1); MSW = SSW / (N - k)
          • F = MSB / MSW ~ F_(k-1, N-k)
        `
      }
    ],
    videos: [
      {
        title: "ANOVA, Clearly Explained",
        channel: "StatQuest with Josh Starmer",
        videoId: "ITf4vHhyGpc",
        duration: "12:45",
        summary: "Visual explanation of variance between groups vs within groups and why F-ratio detects true differences."
      },
      {
        title: "One-Way ANOVA Walkthrough & F-Table",
        channel: "zedstatistics",
        videoId: "q48uKU_KWas",
        duration: "15:20",
        summary: "Complete step-by-step numerical example computing SSB, SSW, Mean Squares, and checking F-critical."
      },
      {
        title: "Introduction to Analysis of Variance (ANOVA)",
        channel: "Khan Academy",
        videoId: "-yQb_ZJnFXw",
        duration: "11:35",
        summary: "Covers the null hypothesis of equal means and explains why multiple t-tests cause alpha inflation."
      }
    ],
    questions: [
      {
        id: "q8-1",
        marks: 2,
        difficulty: "Easy",
        title: "Why is ANOVA Preferred over Multiple Pairwise t-Tests?",
        question: "Explain why ANOVA is preferred over conducting multiple two-sample t-tests when comparing three or more population means. [2 Marks]",
        solution: `
          <div class="answer-box">
            <p>When comparing \\(k \\ge 3\\) means, conducting multiple pairwise \\(t\\)-tests causes an exponential increase in the <strong>family-wise Type I error rate</strong> (\\(\\alpha_{\\text{overall}} = 1 - (1-\\alpha)^c\\)). For example, comparing 4 groups requires 6 \\(t\\)-tests, raising the chance of a false positive from 5% to 26.5%.</p>
            <p><strong>ANOVA</strong> solves this by evaluating all group means simultaneously in a single omnibus test (the \\(F\\)-test) while strictly maintaining the designated significance level \\(\\alpha\\) (e.g. 5%).</p>
          </div>
        `
      },
      {
        id: "q8-2",
        marks: 2,
        difficulty: "Easy",
        title: "State Degrees of Freedom in a One-Way ANOVA Table",
        question: "A researcher compares 4 agricultural fertilizer treatments across 24 experimental plots (6 plots per treatment). State the degrees of freedom for: (a) Between Treatments, (b) Within Treatments (Error), and (c) Total. [2 Marks]",
        solution: `
          <div class="answer-box">
            <p><strong>Given:</strong> Number of groups \\(k = 4\\), Total observations \\(N = 24\\).</p>
            <ul>
              <li><strong>(a) Between Treatments:</strong> \\(df_{\\text{between}} = k - 1 = 4 - 1 = 3\\)</li>
              <li><strong>(b) Within Treatments (Error):</strong> \\(df_{\\text{within}} = N - k = 24 - 4 = 20\\)</li>
              <li><strong>(c) Total:</strong> \\(df_{\\text{total}} = N - 1 = 24 - 1 = 23\\)</li>
            </ul>
            <p><em>Check: \\(df_{\\text{between}} + df_{\\text{within}} = 3 + 20 = 23 = df_{\\text{total}}\\).</em></p>
          </div>
        `
      },
      {
        id: "q8-3",
        marks: 5,
        difficulty: "Medium",
        title: "Complete the ANOVA Table & Test Hypothesis",
        question: `An incomplete One-Way ANOVA table for testing 3 rural development training modules is given below:<br>
        Source: Between Groups SS = 120.0, df = ?; Within Groups SS = ?, df = 27; Total SS = 390.0.<br>
        (a) Fill in all missing values for SS, df, and MS.<br>
        (b) Calculate the \\(F\\)-statistic and test \\(H_0\\) at \\(\\alpha = 0.05\\). (Given \\(F_{0.05, 2, 27} = 3.35\\)). [5 Marks]`,
        solution: `
          <div class="answer-box">
            <p><strong>Step 1: Compute Missing Values:</strong></p>
            <ul>
              <li>Number of groups \\(k = 3 \\implies df_{\\text{between}} = 3 - 1 = 2\\).</li>
              <li>\\(SSW = SST - SSB = 390.0 - 120.0 = 270.0\\).</li>
              <li>\\(df_{\\text{total}} = df_{\\text{between}} + df_{\\text{within}} = 2 + 27 = 29\\).</li>
              <li>\\(MSB = \\frac{SSB}{df_{\\text{between}}} = \\frac{120.0}{2} = 60.0\\).</li>
              <li>\\(MSW = \\frac{SSW}{df_{\\text{within}}} = \\frac{270.0}{27} = 10.0\\).</li>
            </ul>

            <p><strong>Completed ANOVA Table:</strong></p>
            <table class="styled-table text-center">
              <tr>
                <th>Source</th><th>SS</th><th>df</th><th>MS</th><th>\\(F\\)</th>
              </tr>
              <tr><td>Between Groups</td><td>120.0</td><td>2</td><td>60.0</td><td rowspan="2">\\[F = \\frac{60.0}{10.0} = 6.00\\]</td></tr>
              <tr><td>Within Groups (Error)</td><td>270.0</td><td>27</td><td>10.0</td></tr>
              <tr><td>Total</td><td>390.0</td><td>29</td><td>-</td><td>-</td></tr>
            </table>

            <p><strong>Step 2: Decision & Conclusion:</strong><br>
            Calculated \\(F = 6.00 > 3.35\\). Reject \\(H_0\\).<br>
            <strong>Conclusion:</strong> There is a statistically significant difference in performance among the three training modules.</p>
          </div>
        `
      },
      {
        id: "q8-4",
        marks: 5,
        difficulty: "Medium",
        title: "Derive the Identity: SST = SSB + SSW",
        question: "Show that for a one-way analysis of variance layout, the total sum of squares can be algebraically partitioned into Between Group and Within Group sums of squares: \\(SST = SSB + SSW\\). [5 Marks]",
        solution: `
          <div class="answer-box">
            <p>Let \\(x_{ij}\\) denote the \\(j\\)-th observation in group \\(i\\) (\\(i=1,\\dots,k; j=1,\\dots,n_i\\)). The deviation from grand mean \\(\\bar{x}\\) is:</p>
            \\[(x_{ij} - \\bar{x}) = (\\bar{x}_i - \\bar{x}) + (x_{ij} - \\bar{x}_i)\\]
            <p>Squaring both sides:</p>
            \\[(x_{ij} - \\bar{x})^2 = (\\bar{x}_i - \\bar{x})^2 + (x_{ij} - \\bar{x}_i)^2 + 2(\\bar{x}_i - \\bar{x})(x_{ij} - \\bar{x}_i)\\]
            <p>Summing across all \\(i\\) and \\(j\\):</p>
            \\[\\sum_{i=1}^k \\sum_{j=1}^{n_i} (x_{ij} - \\bar{x})^2 = \\sum_{i=1}^k n_i (\\bar{x}_i - \\bar{x})^2 + \\sum_{i=1}^k \\sum_{j=1}^{n_i} (x_{ij} - \\bar{x}_i)^2 + 2 \\sum_{i=1}^k (\\bar{x}_i - \\bar{x}) \\sum_{j=1}^{n_i} (x_{ij} - \\bar{x}_i)\\]
            <p>Examine the cross-product term: for any group \\(i\\), \\(\\sum_{j=1}^{n_i} (x_{ij} - \\bar{x}_i) = \\sum x_{ij} - n_i \\bar{x}_i = T_i - T_i = 0\\).<br>
            Therefore, the cross-product is identically zero.</p>
            \\[\\sum_{i=1}^k \\sum_{j=1}^{n_i} (x_{ij} - \\bar{x})^2 = \\sum_{i=1}^k n_i (\\bar{x}_i - \\bar{x})^2 + \\sum_{i=1}^k \\sum_{j=1}^{n_i} (x_{ij} - \\bar{x}_i)^2\\]
            \\[SST = SSB + SSW\\]
            <p>The total sum of squares is partitioned into between-group variation and within-group error variation.</p>
          </div>
        `
      },
      {
        id: "q8-5",
        marks: 10,
        difficulty: "Hard",
        title: "Full ANOVA Computation: Teaching Methods Problem (From Student Class Notes)",
        question: `A teacher wants to compare test scores under three different teaching methods (Method P, Method Q, Method R) with 3 students assigned randomly to each method:<br>
        Class P: 70, 80, 90 (Mean = 80)<br>
        Class Q: 75, 85, 95 (Mean = 85)<br>
        Class R: 80, 85, 85 (Mean = 83.33)<br>
        (a) State the null and alternative hypotheses. [1 Mark]<br>
        (b) Compute the Grand Mean. [1 Mark]<br>
        (c) Compute Sum of Squares Between (SSB). [2 Marks]<br>
        (d) Compute Sum of Squares Within (SSW). [2 Marks]<br>
        (e) Construct the complete ANOVA table and calculate the \\(F\\)-ratio. [2 Marks]<br>
        (f) At \\(\\alpha = 0.05\\), test whether there is a significant difference among the three teaching methods. (Given \\(F_{0.05, 2, 6} = 5.14\\)). [2 Marks]`,
        solution: `
          <div class="answer-box">
            <p><strong>(a) Hypotheses:</strong></p>
            <ul>
              <li>\\(H_0: \\mu_P = \\mu_Q = \\mu_R\\) (All three teaching methods produce equal average test scores)</li>
              <li>\\(H_1\\): At least one teaching method produces a different average test score.</li>
            </ul>

            <p><strong>(b) Grand Mean (\\(\\bar{x}\\)):</strong></p>
            \\[\\text{Sum of all scores } T = 70 + 80 + 90 + 75 + 85 + 95 + 80 + 85 + 85 = 745\\]
            \\[N = 3 + 3 + 3 = 9 \\implies \\bar{x} = \\frac{745}{9} \\approx 82.78\\]

            <p><strong>(c) Sum of Squares Between Groups (SSB):</strong></p>
            \\[SSB = \\sum n_i (\\bar{x}_i - \\bar{x})^2 = 3(80 - 82.78)^2 + 3(85 - 82.78)^2 + 3(83.33 - 82.78)^2\\]
            \\[= 3(-2.78)^2 + 3(2.22)^2 + 3(0.55)^2\\]
            \\[= 3(7.7284) + 3(4.9284) + 3(0.3025) = 23.19 + 14.79 + 0.90 = \\mathbf{38.88}\\]

            <p><strong>(d) Sum of Squares Within Groups (SSW):</strong></p>
            <ul>
              <li>Class P: \\((70-80)^2 + (80-80)^2 + (90-80)^2 = 100 + 0 + 100 = 200\\)</li>
              <li>Class Q: \\((75-85)^2 + (85-85)^2 + (95-85)^2 = 100 + 0 + 100 = 200\\)</li>
              <li>Class R: \\((80-83.33)^2 + (85-83.33)^2 + (85-83.33)^2 = 11.09 + 2.79 + 2.79 = 16.67\\)</li>
            </ul>
            \\[SSW = 200 + 200 + 16.67 = \\mathbf{416.67}\\]

            <p><strong>(e) ANOVA Table Construction:</strong></p>
            <ul>
              <li>\\(df_{\\text{between}} = k - 1 = 3 - 1 = 2\\)</li>
              <li>\\(df_{\\text{within}} = N - k = 9 - 3 = 6\\)</li>
              <li>\\(MSB = \\frac{SSB}{2} = \\frac{38.88}{2} = 19.44\\)</li>
              <li>\\(MSW = \\frac{SSW}{6} = \\frac{416.67}{6} = 69.44\\)</li>
              <li>\\(F = \\frac{MSB}{MSW} = \\frac{19.44}{69.44} \\approx \\mathbf{0.28}\\)</li>
            </ul>

            <table class="styled-table text-center">
              <tr><th>Source</th><th>SS</th><th>df</th><th>MS</th><th>\\(F\\)</th></tr>
              <tr><td>Between Methods</td><td>38.88</td><td>2</td><td>19.44</td><td rowspan="2">\\(F = 0.28\\)</td></tr>
              <tr><td>Within (Error)</td><td>416.67</td><td>6</td><td>69.44</td></tr>
              <tr><td>Total</td><td>455.55</td><td>8</td><td>-</td><td>-</td></tr>
            </table>

            <p><strong>(f) Decision & Pedagogical Interpretation:</strong><br>
            Critical value: \\(F_{0.05, 2, 6} = 5.14\\).<br>
            Since calculated \\(F = 0.28 < 5.14\\), we <strong>fail to reject \\(H_0\\)</strong>.</p>
            <p><strong>Conclusion:</strong> There is no statistically significant difference in student scores among the three teaching methods; observed variations in marks are entirely consistent with random chance.</p>
          </div>
        `
      }
    ]
  },

  {
    id: 9,
    section: "Section B",
    title: "Time Series Analysis and Forecasting",
    code: "STAT 2251 - CH09",
    subtitle: "Classical Additive/Multiplicative Models, 4 Components, Moving Averages & Least-Squares Trend Fitting",
    overview: "Tracking macroeconomic and social indicators across time. We dissect the classical time series model into Secular Trend, Seasonal, Cyclical, and Irregular components, master moving average smoothing, and fit linear trend lines by the Method of Least Squares for development forecasting.",
    readTime: "25 min read",
    topics: [
      { id: "9-1", title: "9.1 Introduction to Time Series in Development Planning" },
      { id: "9-2", title: "9.2 The Classical Time Series Model: Additive vs Multiplicative" },
      { id: "9-3", title: "9.3 Four Components: Trend (T), Seasonal (S), Cyclical (C), Irregular (I)" },
      { id: "9-4", title: "9.4 Methods of Measuring Trend (Semi-Average & Moving Average)" },
      { id: "9-5", title: "9.5 Fitting Linear Trend Lines by Least Squares (Shortcut Method)" },
      { id: "9-6", title: "9.6 Economic Forecasting & Practical Limitations" }
    ],
    explanation: `
      <div class="content-section">
        <h3>9.1 What is a Time Series?</h3>
        <p class="lead-text">
          A <strong>Time Series</strong> is a sequence of numerical observations on a variable recorded at successive, equally spaced points in time (daily, monthly, quarterly, or annually). In development studies, time series data tracks national GDP growth, agricultural harvest volumes, export revenues, and inflation indices.
        </p>
      </div>

      <div class="content-section">
        <h3>9.2 The Classical Decomposition Model</h3>
        <p>A time series \\(Y_t\\) is decomposed into four constituent forces:</p>

        <div class="grid-2">
          <div class="card-mini">
            <h4>Additive Model</h4>
            <div class="formula-box">\\[Y_t = T_t + S_t + C_t + I_t\\]</div>
            <p>Assumes the four components act independently and are expressed in the original physical units of measurement. Used when seasonal fluctuations remain constant in absolute magnitude regardless of the trend level.</p>
          </div>
          <div class="card-mini">
            <h4>Multiplicative Model</h4>
            <div class="formula-box">\\[Y_t = T_t \\times S_t \\times C_t \\times I_t\\]</div>
            <p>Assumes components are mutually interdependent. Trend \\(T\\) is in original units, while \\(S, C, I\\) are expressed as percentages or indices. Used when seasonal variation expands as the trend rises.</p>
          </div>
        </div>
      </div>

      <div class="content-section">
        <h3>9.3 The Four Components of a Time Series</h3>
        <ol>
          <li><strong>Secular Trend (\\(T\\)):</strong> The smooth, long-term smooth upward or downward movement of the series over a prolonged period (decades). <em>Example: Steady growth in Bangladesh's readymade garment exports over 30 years.</em></li>
          <li><strong>Seasonal Variations (\\(S\\)):</strong> Periodic, rhythmic fluctuations that repeat regularly within a fixed period of one calendar year or less. Caused by natural seasons or human cultural events. <em>Example: Surge in retail shopping during Eid-ul-Fitr; agricultural harvest spikes in Aman season.</em></li>
          <li><strong>Cyclical Fluctuations (\\(C\\)):</strong> Oscillatory wave-like movements recurring over longer durations (typically 2 to 10 years). Associated with the economic business cycle (Prosperity, Recession, Depression, Recovery).</li>
          <li><strong>Irregular / Random Variations (\\(I\\)):</strong> Completely unpredictable, erratic shocks resulting from unforeseen events (floods, cyclones, wars, pandemics, strikes).</li>
        </ol>
      </div>

      <div class="content-section">
        <h3>9.4 Methods of Trend Fitting: Method of Least Squares</h3>
        <p>We represent the linear trend line as:</p>
        <div class="formula-box">\\[Y_t = a + b X_t\\]</div>

        <div class="callout callout-tip">
          <strong>The Symmetric Time Center Shortcut (Vital for Exam Calculations!):</strong>
          <p>By shifting the origin of time \\(X\\) to the exact midpoint of the series so that \\(\\sum X = 0\\), the standard OLS normal equations simplify dramatically:</p>
          <div class="formula-box">
            \\[a = \\frac{\\sum Y}{n} \\qquad b = \\frac{\\sum XY}{\\sum X^2}\\]
          </div>
          <ul>
            <li><strong>For Odd Number of Years (e.g. \\(n = 5\\)):</strong> Place \\(X = 0\\) at the middle year, with \\(X = -2, -1, 0, 1, 2\\). (Step size = 1 year).</li>
            <li><strong>For Even Number of Years (e.g. \\(n = 6\\)):</strong> Place origin between the two central years, with \\(X = -5, -3, -1, 1, 3, 5\\). (Step size = 6 months).</li>
          </ul>
        </div>
      </div>
    `,
    handnotes: [
      {
        title: "Time Series Formulas & Trend Shortcuts",
        category: "Handnote Digest",
        content: `
          • Additive: Y = T + S + C + I; Multiplicative: Y = T * S * C * I
          • Least Squares Trend: Y = a + bX
          • When ∑X = 0: a = (∑Y) / n; b = (∑XY) / (∑X^2)
          • Forecast: Ŷ_(t+h) = a + b * X_(t+h)
          • Odd Years (n=5): X = -2, -1, 0, 1, 2 (∑X = 0)
          • Even Years (n=6): X = -5, -3, -1, 1, 3, 5 (∑X = 0)
        `
      }
    ],
    videos: [
      {
        title: "Time Series Analysis: Components & Models",
        channel: "zedstatistics",
        videoId: "2_85WfQ-2W4",
        duration: "14:10",
        summary: "Visual breakdown of Trend, Seasonal, Cyclical, and Random variations with economic data."
      },
      {
        title: "Fitting Linear Trend Line by Least Squares",
        channel: "Brandon Foltz",
        videoId: "G2s2jK0WlWg",
        duration: "15:45",
        summary: "Step-by-step mathematical guide to coding time periods and calculating a and b coefficients."
      }
    ],
    questions: [
      {
        id: "q9-1",
        marks: 2,
        difficulty: "Easy",
        title: "Distinguish Additive from Multiplicative Time Series Model",
        question: "State the mathematical equations for the classical additive and multiplicative time series models. When is each preferred? [2 Marks]",
        solution: `
          <div class="answer-box">
            <ul>
              <li><strong>Additive Model:</strong> \\(Y_t = T_t + S_t + C_t + I_t\\)<br>
              <em>Preferred when:</em> The amplitude of seasonal variations remains constant in absolute terms regardless of whether the trend is rising or falling.</li>
              <li><strong>Multiplicative Model:</strong> \\(Y_t = T_t \\times S_t \\times C_t \\times I_t\\)<br>
              <em>Preferred when:</em> The magnitude of seasonal and cyclical swings grows proportionally with the long-term trend (most common in economic data).</li>
            </ul>
          </div>
        `
      },
      {
        id: "q9-2",
        marks: 2,
        difficulty: "Easy",
        title: "Define Secular Trend and Seasonal Variation",
        question: "Define Secular Trend and Seasonal Variation with practical examples from Bangladesh's economy. [2 Marks]",
        solution: `
          <div class="answer-box">
            <ul>
              <li><strong>Secular Trend (\\(T\\)):</strong> The smooth, persistent long-term growth or decline in a series observed over decades. <em>Example: The steady upward trend in national rice production from 1980 to 2025 due to high-yielding hybrid varieties.</em></li>
              <li><strong>Seasonal Variation (\\(S\\)):</strong> Short-term rhythmic movements that repeat within an annual period due to weather or social calendar. <em>Example: The predictable annual spike in domestic sugar and spice sales preceding Eid-ul-Fitr.</em></li>
            </ul>
          </div>
        `
      },
      {
        id: "q9-3",
        marks: 5,
        difficulty: "Medium",
        title: "Fit Linear Trend Line for 5-Year Agricultural Export Data",
        question: `The export earnings (in million USD) of an agro-processing zone are recorded below:<br>
        2020: 12, 2021: 15, 2022: 19, 2023: 22, 2024: 27.<br>
        (a) Fit a straight-line trend by the method of least squares.<br>
        (b) Forecast the export earnings for the year 2026. [5 Marks]`,
        solution: `
          <div class="answer-box">
            <p><strong>Step 1: Code Time (\\(X\\)) so that \\(\\sum X = 0\\):</strong><br>
            Since \\(n = 5\\) (odd), set origin at 2022 (\\(X = 0\\)):</p>
            <table class="styled-table text-center">
              <tr>
                <th>Year</th><th>\\(Y\\)</th><th>\\(X\\) (Origin 2022)</th><th>\\(X^2\\)</th><th>\\(XY\\)</th><th>Trend \\(\\hat{Y}\\)</th>
              </tr>
              <tr><td>2020</td><td>12</td><td>-2</td><td>4</td><td>-24</td><td>11.6</td></tr>
              <tr><td>2021</td><td>15</td><td>-1</td><td>1</td><td>-15</td><td>15.3</td></tr>
              <tr><td>2022</td><td>19</td><td>0</td><td>0</td><td>0</td><td>19.0</td></tr>
              <tr><td>2023</td><td>22</td><td>+1</td><td>1</td><td>+22</td><td>22.7</td></tr>
              <tr><td>2024</td><td>27</td><td>+2</td><td>4</td><td>+54</td><td>26.4</td></tr>
              <tr><td><strong>Total</strong></td><td><strong>95</strong></td><td><strong>0</strong></td><td><strong>10</strong></td><td><strong>37</strong></td><td><strong>95.0</strong></td></tr>
            </table>

            <p><strong>Step 2: Calculate Parameters:</strong></p>
            \\[a = \\frac{\\sum Y}{n} = \\frac{95}{5} = 19.0\\]
            \\[b = \\frac{\\sum XY}{\\sum X^2} = \\frac{37}{10} = 3.7\\]
            <p><strong>Fitted Trend Equation:</strong> \\(\\mathbf{\\hat{Y} = 19.0 + 3.7X}\\) (with origin at 2022, \\(X\\) in 1-year units).</p>

            <p><strong>Step 3: Forecast for 2026:</strong><br>
            For year 2026: \\(X = 2026 - 2022 = +4\\).</p>
            \\[\\hat{Y}_{2026} = 19.0 + 3.7(4) = 19.0 + 14.8 = \\mathbf{33.8\\text{ million USD}}\\]
          </div>
        `
      },
      {
        id: "q9-4",
        marks: 5,
        difficulty: "Medium",
        title: "Compute 3-Year Moving Averages and Explain Smoothing",
        question: `Given the annual foreign direct investment (FDI) inflows (in million USD):<br>
        2018: 110, 2019: 130, 2020: 90, 2021: 150, 2022: 170, 2023: 160.<br>
        (a) Compute the 3-year moving averages.<br>
        (b) Discuss the advantages and drawbacks of moving averages in development planning. [5 Marks]`,
        solution: `
          <div class="answer-box">
            <p><strong>(a) Calculations:</strong></p>
            <table class="styled-table text-center">
              <tr>
                <th>Year</th><th>FDI Inflow (\\(Y\\))</th><th>3-Year Moving Total</th><th>3-Year Moving Average</th>
              </tr>
              <tr><td>2018</td><td>110</td><td>-</td><td>-</td></tr>
              <tr><td>2019</td><td>130</td><td>\\(110 + 130 + 90 = 330\\)</td><td>\\(330/3 = \\mathbf{110.0}\\)</td></tr>
              <tr><td>2020</td><td>90</td><td>\\(130 + 90 + 150 = 370\\)</td><td>\\(370/3 = \\mathbf{123.33}\\)</td></tr>
              <tr><td>2021</td><td>150</td><td>\\(90 + 150 + 170 = 410\\)</td><td>\\(410/3 = \\mathbf{136.67}\\)</td></tr>
              <tr><td>2022</td><td>170</td><td>\\(150 + 170 + 160 = 480\\)</td><td>\\(480/3 = \\mathbf{160.0}\\)</td></tr>
              <tr><td>2023</td><td>160</td><td>-</td><td>-</td></tr>
            </table>

            <p><strong>(b) Advantages and Limitations:</strong></p>
            <ul>
              <li><strong>Advantages:</strong> Simple to calculate and effectively smooths out irregular high-frequency shocks (such as the 2020 pandemic dip).</li>
              <li><strong>Drawbacks:</strong> Does not generate a functional mathematical formula; results in loss of data at both ends (no values for 2018 and 2023); cannot directly project future forecasts beyond the observed series.</li>
            </ul>
          </div>
        `
      },
      {
        id: "q9-5",
        marks: 10,
        difficulty: "Hard",
        title: "Comprehensive Problem: Even-Year Least Squares & Policy De-Trending",
        question: `A regional planning agency tracks micro-enterprise electricity consumption (MWh) across 6 consecutive years:<br>
        2019: 140, 2020: 160, 2021: 170, 2022: 210, 2023: 240, 2024: 280.<br>
        (a) Fit a linear trend equation by the method of least squares using an even-numbered time center. [4 Marks]<br>
        (b) Compute the trend values for all 6 years and calculate the percentage trend ratios (\\(Y / \\hat{Y} \\times 100\\)). [3 Marks]<br>
        (c) Forecast electricity demand for the year 2028. [1 Mark]<br>
        (d) Critically discuss the risks of purely relying on mathematical trend projection for national energy infrastructure planning. [2 Marks]`,
        solution: `
          <div class="answer-box">
            <p><strong>(a) Even-Year Time Coding (\\(n = 6\\)):</strong><br>
            Place origin between 2021 and 2022 (July 1, 2021). Use half-year step sizes: \\(X = -5, -3, -1, 1, 3, 5\\) (so \\(\\sum X = 0\\)):</p>

            <table class="styled-table text-center">
              <tr>
                <th>Year</th><th>\\(Y\\)</th><th>\\(X\\)</th><th>\\(X^2\\)</th><th>\\(XY\\)</th><th>Trend \\(\\hat{Y}\\)</th><th>Trend Ratio (\\(Y/\\hat{Y}\\))</th>
              </tr>
              <tr><td>2019</td><td>140</td><td>-5</td><td>25</td><td>-700</td><td>133.5</td><td>104.9%</td></tr>
              <tr><td>2020</td><td>160</td><td>-3</td><td>9</td><td>-480</td><td>160.1</td><td>99.9%</td></tr>
              <tr><td>2021</td><td>170</td><td>-1</td><td>1</td><td>-170</td><td>186.7</td><td>91.1%</td></tr>
              <tr><td>2022</td><td>210</td><td>+1</td><td>1</td><td>+210</td><td>213.3</td><td>98.5%</td></tr>
              <tr><td>2023</td><td>240</td><td>+3</td><td>9</td><td>+720</td><td>239.9</td><td>100.0%</td></tr>
              <tr><td>2024</td><td>280</td><td>+5</td><td>25</td><td>+1400</td><td>266.5</td><td>105.1%</td></tr>
              <tr><td><strong>Total</strong></td><td><strong>1200</strong></td><td><strong>0</strong></td><td><strong>70</strong></td><td><strong>980</strong></td><td><strong>1200.0</strong></td><td>-</td></tr>
            </table>

            <p><strong>Calculations:</strong></p>
            \\[a = \\frac{\\sum Y}{n} = \\frac{1200}{6} = 200.0\\]
            \\[b = \\frac{\\sum XY}{\\sum X^2} = \\frac{980}{70} = 14.0\\]
            <p><strong>Trend Equation:</strong> \\(\\mathbf{\\hat{Y} = 200.0 + 14.0X}\\) (origin: mid-2021/2022, \\(X\\) in 6-month units).</p>

            <p><strong>(b) Trend Values & Ratios:</strong> Shown directly in table above.</p>

            <p><strong>(c) Forecast for 2028:</strong><br>
            Number of half-years from midpoint to 2028: \\(X_{2024} = 5 \\implies X_{2025} = 7, X_{2026} = 9, X_{2027} = 11, X_{2028} = +13\\).</p>
            \\[\\hat{Y}_{2028} = 200.0 + 14.0(13) = 200.0 + 182.0 = \\mathbf{382.0\\text{ MWh}}\\]

            <p><strong>(d) Policy Critique of Trend Projections:</strong><br>
            Extrapolating linear trends assumes that macro conditions remain static. In development planning, energy demand is vulnerable to structural disruptions (e.g. global fuel price inflation, green transition subsidies, sudden grid expansions, or manufacturing shifts). Blindly building power plants on linear extrapolations risks severe capital misallocation and idle capacity.</p>
          </div>
        `
      }
    ]
  },

  {
    id: 10,
    section: "Section B",
    title: "Index Numbers",
    code: "STAT 2251 - CH10",
    subtitle: "Need, Construction Problems, Laspeyres, Paasche, Fisher's Ideal & Tests of Adequacy",
    overview: "Index numbers are the 'economic barometers' of public policy. From measuring household cost of living (CPI) to computing real wages and deflation, this chapter covers simple and weighted indices, Fisher's Ideal Index, and the fundamental mathematical tests of consistency (Time Reversal and Factor Reversal tests).",
    readTime: "25 min read",
    topics: [
      { id: "10-1", title: "10.1 What is an Index Number? Need & Utility" },
      { id: "10-2", title: "10.2 Six General Problems in Index Number Construction" },
      { id: "10-3", title: "10.3 Unweighted Aggregative & Relative Price Indices" },
      { id: "10-4", title: "10.4 Weighted Price Indices (Laspeyres, Paasche, Fisher)" },
      { id: "10-5", title: "10.5 Quantity Indices & Handout Worked Problem" },
      { id: "10-6", title: "10.6 Tests of Adequacy: Time Reversal & Factor Reversal Tests" }
    ],
    explanation: `
      <div class="content-section">
        <h3>10.1 What is an Index Number?</h3>
        <p class="lead-text">
          An <strong>Index Number</strong> is a specialized statistical measure designed to show the relative change in a variable (or group of related variables such as prices, production quantities, or living costs) over time, space, or other characteristics, relative to a designated base period benchmark (\\(100\\)).
        </p>
        <div class="callout callout-note">
          <strong>Handout Example (Rice Price Inflation):</strong>
          <p>Suppose the price of coarse rice in Bangladesh was 50 BDT/kg in 2020 (base year) and rose to 60 BDT/kg in 2025 (current year). The price index number is:</p>
          \\[I = \\frac{\\text{Current Price } (p_1)}{\\text{Base Price } (p_0)} \\times 100 = \\frac{60}{50} \\times 100 = 120\\]
          <p><strong>Interpretation:</strong> The price of rice increased by <strong>20%</strong> between 2020 and 2025.</p>
        </div>
      </div>

      <div class="content-section">
        <h3>10.2 Six General Problems in Index Number Construction</h3>
        <p>In university exams, teachers frequently ask: <em>"Explain the general problems faced in constructing index numbers."</em> (Page 92 Handout):</p>
        <ol>
          <li><strong>Purpose of the Index:</strong> Clearly defining whether the index tracks cost of living for urban industrial workers, rural farmers, or export wholesale prices.</li>
          <li><strong>Selection of the Base Period:</strong> The base year must be economically "normal" (free from extreme shocks, floods, hyperinflation, or wars) and not too chronologically distant.</li>
          <li><strong>Selection of Commodity Basket:</strong> Choosing representative goods that accurately reflect consumption habits of the target demographic.</li>
          <li><strong>Obtaining Reliable Price Quotations:</strong> Collecting prices from representative markets at uniform times, distinguishing wholesale from retail.</li>
          <li><strong>Assignment of Weights:</strong> Commodities like rice or wheat must carry higher weight than salt or luxury items. Deciding between base-year vs current-year weighting.</li>
          <li><strong>Quality Changes & New Goods:</strong> Products evolve in quality over time (e.g. mobile phones); ignoring quality improvements overstates inflation.</li>
        </ol>
      </div>

      <div class="content-section">
        <h3>10.3 Weighted Aggregative Price Indices</h3>
        <div class="grid-3">
          <div class="card-mini">
            <h4>1. Laspeyres' Price Index (\\(P_{01}^L\\))</h4>
            <p>Uses <strong>Base Period Quantities (\\(q_0\\))</strong> as fixed weights:</p>
            <div class="formula-box">
              \\[P_{01}^L = \\frac{\\sum p_1 q_0}{\\sum p_0 q_0} \\times 100\\]
            </div>
            <p><em>Tends to overestimate inflation because it ignores consumer substitution away from higher-priced goods.</em></p>
          </div>

          <div class="card-mini">
            <h4>2. Paasche's Price Index (\\(P_{01}^P\\))</h4>
            <p>Uses <strong>Current Period Quantities (\\(q_1\\))</strong> as weights:</p>
            <div class="formula-box">
              \\[P_{01}^P = \\frac{\\sum p_1 q_1}{\\sum p_0 q_1} \\times 100\\]
            </div>
            <p><em>Requires re-surveying consumption quantities every year; tends to underestimate inflation.</em></p>
          </div>

          <div class="card-mini">
            <h4>3. Fisher's Ideal Index (\\(P_{01}^F\\))</h4>
            <p>Geometric mean of Laspeyres and Paasche indices:</p>
            <div class="formula-box">
              \\[P_{01}^F = \\sqrt{P_{01}^L \\times P_{01}^P}\\]
            </div>
            <p><em>Called 'Ideal' because it satisfies both Time Reversal and Factor Reversal tests!</em></p>
          </div>
        </div>
      </div>

      <div class="content-section">
        <h3>10.4 Tests of Adequacy for Index Numbers</h3>
        <h4>1. Time Reversal Test (TRT)</h4>
        <p>If the time periods are reversed (swapping base 0 and current 1), the resulting index must be the exact reciprocal of the original index:</p>
        <div class="formula-box">
          \\[P_{01} \\times P_{10} = 1\\]
        </div>
        <p><em>Fisher's and Marshall-Edgeworth indices satisfy TRT; Laspeyres and Paasche fail it.</em></p>

        <h4 class="mt-3">2. Factor Reversal Test (FRT)</h4>
        <p>Interchanging price (\\(p\\)) and quantity (\\(q\\)) symbols should yield the true Value Ratio \\(V_{01} = \\frac{\\sum p_1 q_1}{\\sum p_0 q_0}\\):</p>
        <div class="formula-box">
          \\[P_{01} \\times Q_{01} = \\frac{\\sum p_1 q_1}{\\sum p_0 q_0} = V_{01}\\]
        </div>
        <p><em>Only Fisher's Ideal Index satisfies the Factor Reversal Test!</em></p>
      </div>
    `,
    handnotes: [
      {
        title: "Index Numbers Key Formulas Summary",
        category: "Handnote Digest",
        content: `
          • Simple Price Index: P_01 = (∑ p1 / ∑ p0) * 100
          • Simple Quantity Index: Q_01 = (∑ q1 / ∑ q0) * 100
          • Laspeyres Index: P^L_01 = [ ∑ (p1 * q0) / ∑ (p0 * q0) ] * 100
          • Paasche Index: P^P_01 = [ ∑ (p1 * q1) / ∑ (p0 * q1) ] * 100
          • Fisher's Ideal Index: P^F_01 = √(P^L_01 * P^P_01)
          • Time Reversal Test: P_01 * P_10 = 1
          • Factor Reversal Test: P_01 * Q_01 = ∑(p1 * q1) / ∑(p0 * q0)
        `
      }
    ],
    videos: [
      {
        title: "Index Numbers: Laspeyres, Paasche, and Fisher",
        channel: "Edspira",
        videoId: "jA5N6C6tKQE",
        duration: "11:50",
        summary: "Step-by-step numerical breakdown computing Laspeyres, Paasche, and Fisher's price indices."
      },
      {
        title: "Consumer Price Index (CPI) and Inflation",
        channel: "Khan Academy",
        videoId: "WqL_y7hQy_E",
        duration: "10:15",
        summary: "Explains how basket weighting creates inflation figures used in government wage negotiations."
      }
    ],
    questions: [
      {
        id: "q10-1",
        marks: 2,
        difficulty: "Easy",
        title: "Define Simple Aggregate Quantity Index (Handout Problem)",
        question: "Calculate the Simple Aggregate Quantity Index for two products: Product A: Base Year = 50, Current Year = 70; Product B: Base Year = 30, Current Year = 45. Interpret the result. [2 Marks]",
        solution: `
          <div class="answer-box">
            <p><strong>Formula:</strong></p>
            \\[\\text{Simple Aggregate Quantity Index} = \\frac{\\text{Total quantity in Current Year}}{\\text{Total quantity in Base Year}} \\times 100\\]
            <ul>
              <li>Total Base Year Quantity \\(\\sum q_0 = 50 + 30 = 80\\)</li>
              <li>Total Current Year Quantity \\(\\sum q_1 = 70 + 45 = 115\\)</li>
            </ul>
            \\[I = \\frac{115}{80} \\times 100 = 1.4375 \\times 100 = \\mathbf{143.75}\\]
            <p><strong>Interpretation:</strong> The total quantity of products produced/consumed increased by <strong>43.75%</strong> in the current year compared to the base year.</p>
          </div>
        `
      },
      {
        id: "q10-2",
        marks: 2,
        difficulty: "Easy",
        title: "Why is Fisher's Index Called 'Ideal'?",
        question: "State two reasons why Irving Fisher's index number formula is designated as the 'Ideal Index'. [2 Marks]",
        solution: `
          <div class="answer-box">
            <ol>
              <li><strong>Geometric Balance:</strong> It is the geometric mean of Laspeyres' (which overestimates) and Paasche's (which underestimates), eliminating directional bias.</li>
              <li><strong>Satisfies Both Consistency Tests:</strong> It is one of the few index number formulas that rigorously satisfies both the <strong>Time Reversal Test</strong> (\\(P_{01} \\times P_{10} = 1\\)) and the <strong>Factor Reversal Test</strong> (\\(P_{01} \\times Q_{01} = V_{01}\\)).</li>
            </ol>
          </div>
        `
      },
      {
        id: "q10-3",
        marks: 5,
        difficulty: "Medium",
        title: "Prove Fisher's Index Satisfies the Time Reversal Test",
        question: "Prove mathematically that Fisher's Ideal Price Index satisfies the Time Reversal Test: \\(P_{01}^F \\times P_{10}^F = 1\\). [5 Marks]",
        solution: `
          <div class="answer-box">
            <p>By definition, Fisher's Price Index for period 1 with base period 0 is:</p>
            \\[P_{01}^F = \\sqrt{\\frac{\\sum p_1 q_0}{\\sum p_0 q_0} \\times \\frac{\\sum p_1 q_1}{\\sum p_0 q_1}}\\]
            <p>Interchanging the time subscripts 0 and 1 (to obtain the index for period 0 with base period 1):</p>
            \\[P_{10}^F = \\sqrt{\\frac{\\sum p_0 q_1}{\\sum p_1 q_1} \\times \\frac{\\sum p_0 q_0}{\\sum p_1 q_0}}\\]
            <p>Multiplying \\(P_{01}^F\\) and \\(P_{10}^F\\):</p>
            \\[P_{01}^F \\times P_{10}^F = \\sqrt{\\frac{\\sum p_1 q_0}{\\sum p_0 q_0} \\times \\frac{\\sum p_1 q_1}{\\sum p_0 q_1} \\times \\frac{\\sum p_0 q_1}{\\sum p_1 q_1} \\times \\frac{\\sum p_0 q_0}{\\sum p_1 q_0}}\\]
            <p>Notice that every term inside the radical cancels out identically:</p>
            \\[= \\sqrt{1} = 1\\]
            <p>Since \\(P_{01}^F \\times P_{10}^F = 1\\), <strong>Fisher's Ideal Index satisfies the Time Reversal Test</strong>.</p>
          </div>
        `
      },
      {
        id: "q10-4",
        marks: 5,
        difficulty: "Medium",
        title: "Compute Laspeyres and Paasche Price Indices",
        question: `Given the price and quantity data for three essential household items:<br>
        Rice: \\(p_0=40, q_0=50, p_1=50, q_1=60\\)<br>
        Lentils: \\(p_0=80, q_0=10, p_1=100, q_1=12\\)<br>
        Cooking Oil: \\(p_0=120, q_0=5, p_1=150, q_1=6\\)<br>
        Compute: (a) Laspeyres' Price Index, and (b) Paasche's Price Index. [5 Marks]`,
        solution: `
          <div class="answer-box">
            <table class="styled-table text-center">
              <tr>
                <th>Item</th><th>\\(p_0\\)</th><th>\\(q_0\\)</th><th>\\(p_1\\)</th><th>\\(q_1\\)</th><th>\\(p_0 q_0\\)</th><th>\\(p_1 q_0\\)</th><th>\\(p_0 q_1\\)</th><th>\\(p_1 q_1\\)</th>
              </tr>
              <tr><td>Rice</td><td>40</td><td>50</td><td>50</td><td>60</td><td>2000</td><td>2500</td><td>2400</td><td>3000</td></tr>
              <tr><td>Lentils</td><td>80</td><td>10</td><td>100</td><td>12</td><td>800</td><td>1000</td><td>960</td><td>1200</td></tr>
              <tr><td>Oil</td><td>120</td><td>5</td><td>150</td><td>6</td><td>600</td><td>750</td><td>720</td><td>900</td></tr>
              <tr><td><strong>Total</strong></td><td>-</td><td>-</td><td>-</td><td>-</td><td><strong>3400</strong></td><td><strong>4250</strong></td><td><strong>4080</strong></td><td><strong>5100</strong></td></tr>
            </table>

            <p><strong>(a) Laspeyres' Price Index:</strong></p>
            \\[P_{01}^L = \\frac{\\sum p_1 q_0}{\\sum p_0 q_0} \\times 100 = \\frac{4250}{3400} \\times 100 = \\mathbf{125.0}\\]
            <p><strong>Interpretation:</strong> A 25% inflation increase using base-period weights.</p>

            <p><strong>(b) Paasche's Price Index:</strong></p>
            \\[P_{01}^P = \\frac{\\sum p_1 q_1}{\\sum p_0 q_1} \\times 100 = \\frac{5100}{4080} \\times 100 = \\mathbf{125.0}\\]
          </div>
        `
      },
      {
        id: "q10-5",
        marks: 10,
        difficulty: "Hard",
        title: "Comprehensive Problem: Fisher's Ideal Index & Factor Reversal Test Verification",
        question: `From the data in Question 10.4:<br>
        \\(\\sum p_0 q_0 = 3400\\), \\(\\sum p_1 q_0 = 4250\\), \\(\\sum p_0 q_1 = 4080\\), \\(\\sum p_1 q_1 = 5100\\).<br>
        (a) Compute Fisher's Ideal Price Index. [2 Marks]<br>
        (b) Compute Fisher's Ideal Quantity Index (\\(Q_{01}^F\\)). [3 Marks]<br>
        (c) Verify that Fisher's Index satisfies the Factor Reversal Test: \\(P_{01}^F \\times Q_{01}^F = \\frac{\\sum p_1 q_1}{\\sum p_0 q_0}\\). [3 Marks]<br>
        (d) Explain how development economists use the Consumer Price Index (CPI) to deflate nominal wages into real wages. [2 Marks]`,
        solution: `
          <div class="answer-box">
            <p><strong>(a) Fisher's Ideal Price Index (\\(P_{01}^F\\)):</strong></p>
            \\[P_{01}^F = \\sqrt{P_{01}^L \\times P_{01}^P} = \\sqrt{125.0 \\times 125.0} = \\mathbf{125.0}\\]

            <p><strong>(b) Fisher's Quantity Index (\\(Q_{01}^F\\)):</strong><br>
            Interchanging \\(p\\) and \\(q\\):</p>
            \\[Q_{01}^F = \\sqrt{\\frac{\\sum q_1 p_0}{\\sum q_0 p_0} \\times \\frac{\\sum q_1 p_1}{\\sum q_0 p_1}} = \\sqrt{\\frac{4080}{3400} \\times \\frac{5100}{4250}} = \\sqrt{1.20 \\times 1.20} = 1.20 \\times 100 = \\mathbf{120.0}\\]

            <p><strong>(c) Verification of Factor Reversal Test:</strong></p>
            \\[P_{01}^F \\times Q_{01}^F = \\sqrt{\\frac{\\sum p_1 q_0}{\\sum p_0 q_0} \\cdot \\frac{\\sum p_1 q_1}{\\sum p_0 q_1}} \\times \\sqrt{\\frac{\\sum q_1 p_0}{\\sum q_0 p_0} \\cdot \\frac{\\sum q_1 p_1}{\\sum q_0 p_1}}\\]
            \\[= \\sqrt{\\frac{\\sum p_1 q_0 \\cdot \\sum p_1 q_1 \\cdot \\sum p_0 q_1 \\cdot \\sum p_1 q_1}{\\sum p_0 q_0 \\cdot \\sum p_0 q_1 \\cdot \\sum p_0 q_0 \\cdot \\sum p_1 q_0}} = \\sqrt{\\frac{(\\sum p_1 q_1)^2}{(\\sum p_0 q_0)^2}} = \\frac{\\sum p_1 q_1}{\\sum p_0 q_0}\\]
            <p>Numerically:</p>
            \\[\\frac{\\sum p_1 q_1}{\\sum p_0 q_0} = \\frac{5100}{3400} = 1.50\\]
            \\[\\frac{P_{01}^F}{100} \\times \\frac{Q_{01}^F}{100} = 1.25 \\times 1.20 = 1.50\\]
            <p>Both sides equal 1.50. <strong>The Factor Reversal Test is verified</strong>.</p>

            <p><strong>(d) Deflating Nominal Wages to Real Wages:</strong><br>
            Nominal wages (in current BDT) increase over time, but purchasing power may fall due to inflation. Development analysts deflate nominal wages using the formula:</p>
            \\[\\text{Real Wage} = \\frac{\\text{Nominal Wage}}{\\text{CPI}} \\times 100\\]
            <p>If a factory worker's nominal salary increased from 10,000 to 12,000 BDT (+20%), but CPI increased to 125 (+25%), their real wage is \\(\\frac{12,000}{125} \\times 100 = 9,600\\text{ BDT}\\). In real terms, the worker's true standard of living has declined by 4%.</p>
          </div>
        `
      }
    ]
  }
];
