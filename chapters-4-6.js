/**
 * STAT 2251: Inferential Statistics for Development Studies
 * Chapters 4, 5, and 6 Course Data
 * Includes Handnotes on MP/UMP/BCR, 1-Sample/2-Sample/Paired Tests, Estimation Criteria & Graded Questions
 */

window.CHAPTERS_4_6 = [
  {
    id: 4,
    section: "Section A",
    title: "Regression and Correlation Analysis",
    code: "STAT 2251 - CH04",
    subtitle: "Scatter Diagrams, Pearson's r, Least-Squares Line, Assumptions, R² & Association Tests",
    overview: "How variables co-vary and predict one another. Explore Pearson's correlation coefficient, the vital distinction between correlation and causation, Ordinary Least Squares (OLS) derivation of slope and intercept, regression assumptions, and hypothesis tests for correlation (Student's t and Fisher's Z transformation).",
    readTime: "30 min read",
    topics: [
      { id: "4-1", title: "4.1 Purpose of Correlation & Scatter Diagrams" },
      { id: "4-2", title: "4.2 Pearson's Correlation Coefficient (r) & Coefficient of Determination (R²)" },
      { id: "4-3", title: "4.3 Correlation vs Causation (The Ice Cream Fallacy)" },
      { id: "4-4", title: "4.4 Simple Linear Regression Model & Least Squares Derivation" },
      { id: "4-5", title: "4.5 Assumptions of Linear Regression (Gauss-Markov Foundation)" },
      { id: "4-6", title: "4.6 Interpreting Intercept & Slope in Development Context" },
      { id: "4-7", title: "4.7 Testing Hypotheses on Correlation (t-test & Fisher's Z Transformation)" }
    ],
    explanation: `
      <div class="content-section">
        <h3>4.1 Purpose of Correlation & Scatter Diagrams</h3>
        <p class="lead-text">
          In development economics, we investigate how socioeconomic factors move together: <em>Does female literacy increase maternal health outcomes? Does increased microfinance credit boost household income?</em>
        </p>
        <p>A <strong>Scatter Diagram</strong> is the initial visual tool that plots bivariate data pairs \\((X_i, Y_i)\\) on a Cartesian plane. It reveals whether the underlying relationship is linear, curvilinear, or completely random.</p>

        <div class="grid-3">
          <div class="card-mini">
            <h5>Positive Correlation (\\(r > 0\\))</h5>
            <p>Both variables move in the same direction. <em>Example: Study hours and exam scores; fertilizer application and crop yield.</em></p>
          </div>
          <div class="card-mini">
            <h5>Negative Correlation (\\(r < 0\\))</h5>
            <p>Variables move in opposite directions. <em>Example: Vehicle travel speed and trip duration; infant mortality and vaccination rate.</em></p>
          </div>
          <div class="card-mini">
            <h5>Zero Correlation (\\(r \\approx 0\\))</h5>
            <p>No linear pattern exists. <em>Example: Shoe size and academic GPA in statistics.</em></p>
          </div>
        </div>
      </div>

      <div class="content-section">
        <h3>4.2 Pearson's Correlation Coefficient (\\(r\\)) & \\(R^2\\)</h3>
        <p>Pearson's product-moment correlation coefficient measures the strength and direction of a <strong>linear</strong> relationship:</p>
        <div class="formula-box">
          \\[r = \\frac{\\sum (X_i - \\bar{X})(Y_i - \\bar{Y})}{\\sqrt{\\sum (X_i - \\bar{X})^2 \\sum (Y_i - \\bar{Y})^2}} = \\frac{S_{XY}}{\\sqrt{S_{XX} S_{YY}}}\\]
        </div>

        <div class="callout callout-note">
          <strong>Crucial Mathematical Properties of \\(r\\):</strong>
          <ul>
            <li><strong>Bounded Range:</strong> \\(-1 \\le r \\le +1\\). \\(+1\\) indicates perfect positive correlation, \\(-1\\) perfect negative correlation, \\(0\\) no linear correlation.</li>
            <li><strong>Scale and Origin Invariant:</strong> Changing units of measurement (e.g. converting BDT to USD, or adding a constant) does not alter the numerical value of \\(r\\).</li>
            <li><strong>Symmetric:</strong> The correlation between \\(X\\) and \\(Y\\) is identical to that between \\(Y\\) and \\(X\\): \\(r_{XY} = r_{YX}\\).</li>
            <li><strong>Dimensionless:</strong> \\(r\\) has no units of measurement.</li>
          </ul>
        </div>

        <h4>Coefficient of Determination (\\(R^2\\))</h4>
        <p>In simple linear regression, \\(R^2 = r^2\\). It measures the proportion of total variation in the dependent variable \\(Y\\) explained by the linear regression on \\(X\\):</p>
        <div class="formula-box">
          \\[R^2 = \\frac{\\text{Explained Variation (SSR)}}{\\text{Total Variation (SST)}} = 1 - \\frac{\\text{SSE}}{\\text{SST}} \\qquad (0 \\le R^2 \\le 1)\\]
        </div>
        <p><em>Example: If \\(r = 0.975\\), then \\(R^2 = (0.975)^2 \\approx 0.951\\) (95.1% of score variation is explained by study hours).</em></p>
      </div>

      <div class="content-section">
        <h3>4.3 Correlation vs Causation</h3>
        <div class="callout callout-warning">
          <strong>Golden Statistical Rule: Correlation \\(\\ne\\) Causation</strong>
          <p>Just because two variables move together does not mean one causes the other. A classic example:</p>
          <p><em>"Ice cream sales and drowning incidents are strongly positively correlated in coastal cities."</em></p>
          <p>Does eating ice cream cause drowning? <strong>No!</strong> Both are driven by a lurking third variable (confounder): <strong>Hot Summer Weather</strong>. High temperatures increase beach swimming (raising drowning risks) and increase ice cream demand simultaneously.</p>
        </div>
      </div>

      <div class="content-section">
        <h3>4.4 Simple Linear Regression Model & OLS Derivation</h3>
        <p>While correlation evaluates mutual association, <strong>Regression</strong> models the functional dependence of a continuous dependent variable (\\(Y\\)) on one or more explanatory independent variables (\\(X\\)):</p>
        <div class="formula-box">
          \\[Y_i = a + b X_i + \\varepsilon_i\\]
          \\[\\hat{Y}_i = a + b X_i\\]
        </div>
        <p>Using the <strong>Method of Ordinary Least Squares (OLS)</strong>, we minimize the Sum of Squared Residuals \\(\\sum \\varepsilon_i^2 = \\sum (Y_i - a - bX_i)^2\\). Taking partial derivatives with respect to \\(a\\) and \\(b\\) yields the normal equations, solving to:</p>
        <div class="formula-box">
          \\[b = \\frac{\\sum (X_i - \\bar{X})(Y_i - \\bar{Y})}{\\sum (X_i - \\bar{X})^2} = \\frac{n\\sum XY - \\sum X \\sum Y}{n\\sum X^2 - (\\sum X)^2} = r \\frac{s_Y}{s_X}\\]
          \\[a = \\bar{Y} - b\\bar{X}\\]
        </div>
      </div>

      <div class="content-section">
        <h3>4.5 Four Core Assumptions of Linear Regression</h3>
        <ol>
          <li><strong>Linearity:</strong> The true mathematical relationship between \\(X\\) and the mean of \\(Y\\) is linear in parameters.</li>
          <li><strong>Homoskedasticity (Constant Variance):</strong> The error terms have uniform variance across all values of \\(X\\): \\(\\text{Var}(\\varepsilon_i) = \\sigma^2\\).</li>
          <li><strong>Independence & No Autocorrelation:</strong> Error terms are mutually independent: \\(\\text{Cov}(\\varepsilon_i, \\varepsilon_j) = 0\\) for \\(i \\ne j\\).</li>
          <li><strong>Normality of Residuals:</strong> Errors are normally distributed: \\(\\varepsilon_i \\sim N(0, \\sigma^2)\\), required for valid \\(t\\) and \\(F\\) tests.</li>
        </ol>
      </div>

      <div class="content-section">
        <h3>4.6 Tests of Significance on Correlation (From Student Handnotes)</h3>
        <h4>1. Test for Zero Correlation (\\(H_0: \\rho = 0\\))</h4>
        <p>To test whether a sample correlation \\(r\\) indicates a real linear relationship in the bivariate normal population:</p>
        <div class="formula-box">
          \\[t = \\frac{r \\sqrt{n - 2}}{\\sqrt{1 - r^2}} \\sim t_{n - 2}\\]
          <p>Reject \\(H_0\\) at level \\(\\alpha\\) if \\(|t| > t_{\\alpha/2, n-2}\\).</p>
        </div>

        <h4>2. Test for Specified Non-Zero Correlation (Fisher's Z Transformation)</h4>
        <p>When testing \\(H_0: \\rho = \\rho_0 \\ne 0\\), the sampling distribution of \\(r\\) is severely skewed. R.A. Fisher introduced the Z-transformation:</p>
        <div class="formula-box">
          \\[Z = \\frac{1}{2} \\log_e \\left(\\frac{1 + r}{1 - r}\\right) \\qquad m = \\frac{1}{2} \\log_e \\left(\\frac{1 + \\rho_0}{1 - \\rho_0}\\right)\\]
          \\[d = (Z - m)\\sqrt{n - 3} \\sim N(0, 1)\\]
        </div>

        <h4>3. Comparison of Two Correlation Coefficients (\\(H_0: \\rho_1 = \\rho_2\\))</h4>
        <div class="formula-box">
          \\[d = \\frac{Z_1 - Z_2}{\\sqrt{\\frac{1}{n_1 - 3} + \\frac{1}{n_2 - 3}}} \\sim N(0, 1)\\]
        </div>
      </div>
    `,
    handnotes: [
      {
        title: "Regression & Correlation Formula Digest",
        category: "Handnote Digest",
        content: `
          • r = S_XY / √(S_XX * S_YY); Range: -1 <= r <= +1; Dimensionless & scale invariant
          • b = S_XY / S_XX = r * (s_Y / s_X); a = Ȳ - b * X̄
          • Prediction: Ŷ = a + b * X_new
          • Test H0: ρ = 0 => t = r * √(n-2) / √(1 - r^2) ~ t_(n-2)
          • Fisher's Z: Z = 0.5 * ln[(1+r)/(1-r)]; d = (Z - m) * √(n-3) ~ N(0, 1)
          • Comparing two r's: d = (Z1 - Z2) / √[1/(n1-3) + 1/(n2-3)] ~ N(0, 1)
        `
      }
    ],
    videos: [
      {
        title: "Linear Regression, Clearly Explained",
        channel: "StatQuest with Josh Starmer",
        videoId: "7ArmBVF2dCs",
        duration: "13:20",
        summary: "Intuitive walkthrough of finding the best-fit line, calculating residuals, and understanding slope & intercept."
      },
      {
        title: "Correlation and R-Squared Explained",
        channel: "StatQuest with Josh Starmer",
        videoId: "2AQKmw14mHM",
        duration: "14:15",
        summary: "Visual guide to Pearson's r, covariance, and how R-squared measures percentage of explained variation."
      },
      {
        title: "Testing the Significance of Correlation Coefficient",
        channel: "zedstatistics",
        videoId: "8bZqD2Q5YfI",
        duration: "12:40",
        summary: "Step-by-step hypothesis test for H0: rho = 0 using Student's t distribution with degrees of freedom n - 2."
      }
    ],
    questions: [
      {
        id: "q4-1",
        marks: 2,
        difficulty: "Easy",
        title: "Distinguish between Correlation and Regression",
        question: "Differentiate between Correlation Analysis and Regression Analysis in terms of purpose, symmetry, and units of measurement. [2 Marks]",
        solution: `
          <div class="answer-box">
            <table class="styled-table">
              <tr>
                <th>Criterion</th>
                <th>Correlation Analysis</th>
                <th>Regression Analysis</th>
              </tr>
              <tr>
                <td><strong>Purpose</strong></td>
                <td>Measures the degree and direction of linear association between two variables.</td>
                <td>Estimates or predicts the functional value of dependent variable \\(Y\\) from independent variable \\(X\\).</td>
              </tr>
              <tr>
                <td><strong>Symmetry</strong></td>
                <td>Symmetric: \\(r_{XY} = r_{YX}\\). Variables are treated equally.</td>
                <td>Asymmetric: \\(Y\\) on \\(X\\) is mathematically distinct from \\(X\\) on \\(Y\\).</td>
              </tr>
              <tr>
                <td><strong>Units</strong></td>
                <td>Dimensionless pure number (\\(-1 \\le r \\le +1\\)).</td>
                <td>Slope \\(b\\) is expressed in units of \\(Y\\) per unit of \\(X\\).</td>
              </tr>
            </table>
          </div>
        `
      },
      {
        id: "q4-2",
        marks: 2,
        difficulty: "Easy",
        title: "Explain the Meaning of Slope and Intercept",
        question: "In an empirical development study estimating household food expenditure (\\(Y\\), in taka) from monthly income (\\(X\\), in thousand taka), the fitted line is \\(Y = 1500 + 120X\\). Interpret the slope and intercept. [2 Marks]",
        solution: `
          <div class="answer-box">
            <ul>
              <li><strong>Intercept (\\(a = 1500\\text{ BDT}\\)):</strong> Represents the baseline subsistence food expenditure when household income is zero (\\(X = 0\\)).</li>
              <li><strong>Slope (\\(b = 120\\)):</strong> For every additional 1,000 BDT increase in monthly income, household food expenditure increases on average by <strong>120 BDT</strong>.</li>
            </ul>
          </div>
        `
      },
      {
        id: "q4-3",
        marks: 5,
        difficulty: "Medium",
        title: "Test Significance of Correlation Coefficient (H0: rho = 0)",
        question: "A researcher surveying 27 rural micro-enterprises observes a sample correlation of \\(r = 0.45\\) between owner's training days and annual profit growth. Test at the 5% level of significance whether there is a significant linear correlation in the population. (Given \\(t_{0.025, 25} = 2.060\\)). [5 Marks]",
        solution: `
          <div class="answer-box">
            <p><strong>Step 1: State Hypotheses:</strong></p>
            <ul>
              <li>\\(H_0: \\rho = 0\\) (No linear correlation in the population)</li>
              <li>\\(H_1: \\rho \\ne 0\\) (Significant linear correlation exists; two-tailed test)</li>
            </ul>

            <p><strong>Step 2: Level of Significance:</strong> \\(\\alpha = 0.05\\), sample size \\(n = 27\\), degrees of freedom \\(df = n - 2 = 25\\).</p>

            <p><strong>Step 3: Test Statistic:</strong></p>
            \\[t = \\frac{r \\sqrt{n - 2}}{\\sqrt{1 - r^2}} = \\frac{0.45 \\sqrt{25}}{\\sqrt{1 - (0.45)^2}} = \\frac{0.45 \\times 5}{\\sqrt{1 - 0.2025}} = \\frac{2.25}{\\sqrt{0.7975}} = \\frac{2.25}{0.8930} \\approx 2.52\\]

            <p><strong>Step 4: Critical Value:</strong> For \\(df = 25\\) at \\(\\alpha = 0.05\\) (two-tailed), \\(t_{\\text{crit}} = \\pm 2.060\\).</p>

            <p><strong>Step 5: Decision & Conclusion:</strong><br>
            Since \\(|t_{\\text{calc}}| = 2.52 > 2.060\\), the test statistic falls in the rejection region.<br>
            We <strong>reject \\(H_0\\)</strong>. There is statistically significant evidence at the 5% level that training days and enterprise profit growth are positively correlated.</p>
          </div>
        `
      },
      {
        id: "q4-4",
        marks: 5,
        difficulty: "Medium",
        title: "Compare Two Independent Correlation Coefficients (Fisher's Z)",
        question: "In Urban Dhaka, the correlation between education level and income is \\(r_1 = 0.65\\) for a sample of \\(n_1 = 103\\) workers. In Rural Bogra, the correlation is \\(r_2 = 0.45\\) for \\(n_2 = 103\\) workers. Test at the 5% level whether the correlation is significantly stronger in the urban area. (Given \\(Z_{0.05} = 1.645\\)). [5 Marks]",
        solution: `
          <div class="answer-box">
            <p><strong>Step 1: Hypotheses:</strong></p>
            <ul>
              <li>\\(H_0: \\rho_1 = \\rho_2\\)</li>
              <li>\\(H_1: \\rho_1 > \\rho_2\\) (Right-tailed test)</li>
            </ul>

            <p><strong>Step 2: Fisher's Z-Transformations:</strong></p>
            \\[Z_1 = \\frac{1}{2} \\ln\\left(\\frac{1 + 0.65}{1 - 0.65}\\right) = \\frac{1}{2} \\ln\\left(\\frac{1.65}{0.35}\\right) = \\frac{1}{2} \\ln(4.714) = \\frac{1}{2}(1.5506) = 0.7753\\]
            \\[Z_2 = \\frac{1}{2} \\ln\\left(\\frac{1 + 0.45}{1 - 0.45}\\right) = \\frac{1}{2} \\ln\\left(\\frac{1.45}{0.55}\\right) = \\frac{1}{2} \\ln(2.636) = \\frac{1}{2}(0.9694) = 0.4847\\]

            <p><strong>Step 3: Test Statistic:</strong></p>
            \\[d = \\frac{Z_1 - Z_2}{\\sqrt{\\frac{1}{n_1 - 3} + \\frac{1}{n_2 - 3}}} = \\frac{0.7753 - 0.4847}{\\sqrt{\\frac{1}{100} + \\frac{1}{100}}} = \\frac{0.2906}{\\sqrt{0.02}} = \\frac{0.2906}{0.1414} \\approx 2.05\\]

            <p><strong>Step 4: Decision:</strong><br>
            Calculated \\(d = 2.05 > 1.645\\). Reject \\(H_0\\).<br>
            <strong>Conclusion:</strong> The correlation between education and income is significantly stronger in the urban population than in the rural population.</p>
          </div>
        `
      },
      {
        id: "q4-5",
        marks: 10,
        difficulty: "Hard",
        title: "Full OLS Computation, Prediction & Analytical Evaluation",
        question: `A study on student achievement in Development Studies records study hours (\\(X\\)) and exam scores (\\(Y\\)) for 6 students:<br>
        Students: A(2, 65), B(3, 70), C(5, 75), D(7, 80), E(9, 85), F(10, 95).<br>
        (a) Compute the Pearson correlation coefficient \\(r\\) and interpret its strength. [3 Marks]<br>
        (b) Derive the Ordinary Least Squares linear regression equation \\(Y = a + bX\\). [3 Marks]<br>
        (c) Predict the exam score of a student who studies for 6 hours. [1 Mark]<br>
        (d) Compute \\(R^2\\) and explain what it reveals about model explanatory power. [1 Mark]<br>
        (e) Critically discuss two key assumptions of the OLS model and the consequences if homoskedasticity is violated in real data. [2 Marks]`,
        solution: `
          <div class="answer-box">
            <p><strong>(a) Pearson Correlation Coefficient (\\(r\\)):</strong></p>
            <table class="styled-table text-center">
              <tr>
                <th>Student</th><th>\\(X\\)</th><th>\\(Y\\)</th><th>\\(X - \\bar{X}\\)</th><th>\\(Y - \\bar{Y}\\)</th><th>\\((X-\\bar{X})(Y-\\bar{Y})\\)</th><th>\\((X-\\bar{X})^2\\)</th><th>\\((Y-\\bar{Y})^2\\)</th>
              </tr>
              <tr><td>A</td><td>2</td><td>65</td><td>-4</td><td>-13.33</td><td>53.32</td><td>16</td><td>177.69</td></tr>
              <tr><td>B</td><td>3</td><td>70</td><td>-3</td><td>-8.33</td><td>24.99</td><td>9</td><td>69.39</td></tr>
              <tr><td>C</td><td>5</td><td>75</td><td>-1</td><td>-3.33</td><td>3.33</td><td>1</td><td>11.09</td></tr>
              <tr><td>D</td><td>7</td><td>80</td><td>1</td><td>1.67</td><td>1.67</td><td>1</td><td>2.79</td></tr>
              <tr><td>E</td><td>9</td><td>85</td><td>3</td><td>6.67</td><td>20.01</td><td>9</td><td>44.49</td></tr>
              <tr><td>F</td><td>10</td><td>95</td><td>4</td><td>16.67</td><td>66.68</td><td>16</td><td>278.09</td></tr>
              <tr><td><strong>Total</strong></td><td><strong>36</strong></td><td><strong>470</strong></td><td><strong>0</strong></td><td><strong>0</strong></td><td><strong>170.00</strong></td><td><strong>52</strong></td><td><strong>583.54</strong></td></tr>
            </table>

            <p>Means: \\(\\bar{X} = \\frac{36}{6} = 6.0\\), \\(\\bar{Y} = \\frac{470}{6} \\approx 78.33\\).</p>
            \\[r = \\frac{170.00}{\\sqrt{52 \\times 583.54}} = \\frac{170.00}{\\sqrt{30344.08}} = \\frac{170.00}{174.20} \\approx 0.9759\\]
            <p><strong>Interpretation:</strong> There is an extremely strong positive linear relationship between study hours and exam performance.</p>

            <p><strong>(b) Regression Line Parameters:</strong></p>
            \\[b = \\frac{\\sum (X - \\bar{X})(Y - \\bar{Y})}{\\sum (X - \\bar{X})^2} = \\frac{170.00}{52} \\approx 3.269 \\approx 3.27\\]
            \\[a = \\bar{Y} - b\\bar{X} = 78.33 - (3.269 \\times 6) = 78.33 - 19.61 = 58.72\\]
            <p><strong>Regression Equation:</strong> \\(\\mathbf{\\hat{Y} = 58.72 + 3.27X}\\)</p>

            <p><strong>(c) Prediction for \\(X = 6\\) hours:</strong></p>
            \\[\\hat{Y} = 58.72 + 3.27(6) = 58.72 + 19.62 = 78.34\\text{ marks}\\]

            <p><strong>(d) Coefficient of Determination:</strong></p>
            \\[R^2 = (0.9759)^2 \\approx 0.952 \\text{ (or 95.2%)}\\]
            <p><strong>Meaning:</strong> 95.2% of the total variation in exam scores is directly explained by study hours; only 4.8% is attributable to unobserved factors (innate ability, sleep, etc.).</p>

            <p><strong>(e) Econometric Critique:</strong></p>
            <ul>
              <li><strong>Linearity & Homoskedasticity:</strong> OLS assumes the variance of errors \\(\\sigma^2\\) is constant across all values of \\(X\\).</li>
              <li><strong>Consequence of Heteroskedasticity:</strong> If higher study hours exhibit wider variance in scores, OLS estimators remain unbiased but <strong>lose efficiency</strong> (no longer BLUE), causing standard errors to be biased and rendering \\(t\\)-tests and confidence intervals invalid.</li>
            </ul>
          </div>
        `
      }
    ]
  },

  {
    id: 5,
    section: "Section B",
    title: "Hypothesis Testing",
    code: "STAT 2251 - CH05",
    subtitle: "Axiomatic Framework, MP & UMP Tests, BCR, Neyman-Pearson Lemma & Complete Z/t/F Procedures",
    overview: "The core decision-making engine of inferential statistics. Incorporates theoretical handnote concepts (Statistical vs Ordinary Hypothesis, Simple vs Composite, Parametric vs Non-parametric, BCR, MP and UMP tests, Neyman-Pearson Lemma) alongside practical procedures for 1-sample, 2-sample, and paired tests.",
    readTime: "35 min read",
    topics: [
      { id: "5-1", title: "5.1 What is a Statistical Test & Core Definitions" },
      { id: "5-2", title: "5.2 Four Classes of Statistical Hypotheses (Null, Alt, Simple, Composite)" },
      { id: "5-3", title: "5.3 Parametric vs Non-Parametric Hypotheses" },
      { id: "5-4", title: "5.4 Type I & Type II Errors (Court Verdict Analogy) & Power Function" },
      { id: "5-5", title: "5.5 Best Critical Region (BCR), MP, UMP & Neyman-Pearson Lemma" },
      { id: "5-6", title: "5.6 Methods of Finding Tests & Standard 6-Step Workflow" },
      { id: "5-7", title: "5.7 Single Population Mean Tests (Z vs t)" },
      { id: "5-8", title: "5.8 Two Independent Sample Means (Pooled t vs Welch t)" },
      { id: "5-9", title: "5.9 Paired t-Test for Dependent/Correlated Means" },
      { id: "5-10", title: "5.10 Tests for Population Proportions & Variances" }
    ],
    explanation: `
      <div class="content-section">
        <h3>5.1 What is a Statistical Test?</h3>
        <p class="lead-text">
          According to your lecture handnotes: <em>"A statistical test is a body of methodology or rules for taking a correct decision about the null hypothesis based on sample observations."</em>
        </p>
        <p>In decision-theoretic terms, a test of a statistical hypothesis is a <strong>two-action decision problem</strong>: based on sample evidence, we choose between two mutually exclusive actions — <strong>Accepting</strong> (failing to reject) or <strong>Rejecting</strong> \\(H_0\\).</p>
      </div>

      <div class="content-section">
        <h3>5.2 Four Classes of Statistical Hypotheses (Exam Direct Topic)</h3>
        <div class="grid-2">
          <div class="card-mini">
            <h4>1. Null Hypothesis (\\(H_0\\))</h4>
            <p>The hypothesis set up for possible rejection under the assumption that it is true. Usually represents 'no effect', 'no difference', or status quo.</p>
            <p><em>Example: \\(H_0: \\mu = 50\\) or \\(H_0: \\sigma^2 = 5\\).</em></p>
          </div>
          <div class="card-mini">
            <h4>2. Alternative Hypothesis (\\(H_1\\))</h4>
            <p>Any hypothesis complementary to the null hypothesis that must hold if \\(H_0\\) is proven false.</p>
            <p><em>Example: \\(H_1: \\mu \\ne 50\\) (two-tailed), \\(H_1: \\mu > 50\\) (right-tailed), or \\(H_1: \\mu < 50\\) (left-tailed).</em></p>
          </div>
          <div class="card-mini">
            <h4>3. Simple Hypothesis</h4>
            <p>A statistical hypothesis that <strong>completely specifies</strong> the underlying probability distribution (all parameters are explicitly fixed numbers).</p>
            <p><em>Example: For a normal population \\(N(\\mu, \\sigma^2)\\), the hypothesis \\(H_0: \\mu = 25, \\sigma^2 = 6\\) is simple because the distribution is 100% determined.</em></p>
          </div>
          <div class="card-mini">
            <h4>4. Composite Hypothesis</h4>
            <p>A statistical hypothesis that <strong>does not completely specify</strong> the distribution (leaves one or more parameters unspecified or free to vary over a range).</p>
            <p><em>Example: \\(H_0: \\mu = 25\\) when \\(\\sigma^2\\) is unknown, or \\(H_1: \\mu > 25\\).</em></p>
          </div>
        </div>

        <div class="callout callout-note mt-3">
          <strong>Ordinary Hypothesis vs Statistical Hypothesis (Page 16 Handnotes):</strong>
          <ul>
            <li><strong>Ordinary Hypothesis:</strong> An intuitive assumption about any concept (e.g., <em>"Mr. X will be the next prime minister of Bangladesh"</em>).</li>
            <li><strong>Statistical Hypothesis:</strong> An explicit statement regarding the numerical parameters or distribution function of a population model (e.g., <em>"Candidate X is favored by more than 50% of registered voters: \\(H_0: p > 0.50\\)"</em>).</li>
          </ul>
        </div>
      </div>

      <div class="content-section">
        <h3>5.3 Parametric vs Non-Parametric Hypotheses</h3>
        <ul>
          <li><strong>Parametric Hypothesis:</strong> When the mathematical form of the distribution is presupposed (e.g., assumed Normal) and the hypothesis concerns unknown parameters (\\(\\mu, \\sigma^2\\)).</li>
          <li><strong>Non-Parametric Hypothesis:</strong> When the statement concerns the underlying form/shape of the distribution itself regardless of parameters (e.g., <em>"The sample data follows a Binomial distribution"</em> or <em>"Data follows a Poisson process"</em>).</li>
        </ul>
      </div>

      <div class="content-section">
        <h3>5.4 Type I & Type II Errors: The Courtroom Verdict Analogy</h3>
        <p>In decision testing, reality vs our verdict gives four possible outcomes:</p>

        <div class="table-responsive">
          <table class="styled-table text-center">
            <thead>
              <tr>
                <th rowspan="2">Statistical Decision</th>
                <th colspan="2">Actual Truth of \\(H_0\\) in Reality</th>
              </tr>
              <tr>
                <th>\\(H_0\\) is TRUE</th>
                <th>\\(H_0\\) is FALSE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Do Not Reject \\(H_0\\)</strong></td>
                <td><span class="badge badge-success">Correct Decision (\\(1 - \\alpha\\))</span></td>
                <td><span class="badge badge-danger">Type II Error (\\(\\beta\\))</span></td>
              </tr>
              <tr>
                <td><strong>Reject \\(H_0\\)</strong></td>
                <td><span class="badge badge-danger">Type I Error (\\(\\alpha\\))</span></td>
                <td><span class="badge badge-success">Correct Decision: Power (\\(1 - \\beta\\))</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="callout callout-tip">
          <strong>The Court Judge Verdict Analogy (Direct from Page 12 Handnotes):</strong>
          <p>Imagine a court trial where \\(H_0\\): <em>The accused person is innocent</em>.</p>
          <ul>
            <li><strong>Type I Error (\\(\\alpha\\)):</strong> Convicting and sending an innocent person to prison (rejecting \\(H_0\\) when \\(H_0\\) is true). Society considers this extremely dangerous, so we keep \\(\\alpha\\) very small (0.05 or 0.01).</li>
            <li><strong>Type II Error (\\(\\beta\\)):</strong> Acquitting and letting a guilty criminal walk free (failing to reject \\(H_0\\) when \\(H_0\\) is false).</li>
            <li><strong>Power of the Test (\\(1 - \\beta\\)):</strong> The probability of rightly convicting a guilty person: \\(P(\\text{Reject } H_0 \\mid H_1 \\text{ is true})\\).</li>
          </ul>
        </div>

        <h4>Size of the Test vs Power of the Test</h4>
        <div class="grid-2">
          <div class="card-mini">
            <h5>Size of the Test (\\(\\alpha\\))</h5>
            \\[\\alpha = P(x \\in w \\mid H_0) = \\int_w L_0 \\, dx\\]
            <p>Maximum allowable probability of committing a Type I error.</p>
          </div>
          <div class="card-mini">
            <h5>Power of the Test (\\(1 - \\beta\\))</h5>
            \\[1 - \\beta = P(x \\in w \\mid H_1) = \\int_w L_1 \\, dx\\]
            <p>Probability that test statistic falls in critical region when alternative is true.</p>
          </div>
        </div>
      </div>

      <div class="content-section">
        <h3>5.5 Best Critical Region (BCR), MP, UMP & Neyman-Pearson Lemma</h3>
        <p>From your handwritten notes (Pages 8-11, 14, 18):</p>
        <div class="card-mini">
          <h4>Best Critical Region (BCR)</h4>
          <p>A critical region \\(w\\) of size \\(\\alpha\\) is called the <strong>Best Critical Region of size \\(\\alpha\\)</strong> for testing \\(H_0: \\theta = \\theta_0\\) against \\(H_1: \\theta = \\theta_1\\) if:</p>
          <ol>
            <li>\\(P(x \\in w \\mid H_0) = \\alpha\\), and</li>
            <li>For every other critical region \\(w_1\\) of the same size \\(\\alpha\\) (where \\(P(x \\in w_1 \\mid H_0) = \\alpha\\)), we have:
              \\[P(x \\in w \\mid H_1) \\ge P(x \\in w_1 \\mid H_1)\\]
            </li>
          </ol>
          <p><em>That is, BCR has the maximum possible power among all regions of size \\(\\alpha\\).</em></p>
        </div>

        <div class="grid-2 mt-3">
          <div class="card-mini">
            <h5>Most Powerful (MP) Test</h5>
            <p>A test having the maximum power for testing a simple hypothesis against a specific single alternative hypothesis.</p>
          </div>
          <div class="card-mini">
            <h5>Uniformly Most Powerful (UMP) Test</h5>
            <p>A test whose critical region \\(w\\) maintains maximum power against <strong>all possible values</strong> of \\(\\theta\\) in a composite alternative \\(H_1: \\theta > \\theta_0\\).</p>
          </div>
        </div>

        <h4 class="mt-3">Methods of Finding Tests (Page 19 Handnotes):</h4>
        <ol>
          <li>Neyman-Pearson Lemma (for simple vs simple hypotheses via likelihood ratio).</li>
          <li>Generalized Likelihood Ratio Test (GLRT) (for composite hypotheses).</li>
          <li>Monotone Likelihood Ratio (MLR) property.</li>
          <li>Confidence Interval Method (duality between tests and intervals).</li>
          <li>Intuitive Techniques & Monte Carlo Tests.</li>
        </ol>
      </div>

      <div class="content-section">
        <h3>5.6 Complete Testing Procedures: 1-Sample & 2-Sample Tests</h3>
        <div class="table-responsive">
          <table class="styled-table">
            <thead>
              <tr>
                <th>Test Case</th>
                <th>Null Hypothesis</th>
                <th>Conditions / Assumptions</th>
                <th>Standardized Test Statistic</th>
                <th>Sampling Distribution & df</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1-Sample Mean (Z)</strong></td>
                <td>\\(H_0: \\mu = \\mu_0\\)</td>
                <td>\\(\\sigma\\) known OR large sample \\(n \\ge 30\\)</td>
                <td>\\[Z = \\frac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}\\]</td>
                <td>Standard Normal \\(N(0, 1)\\)</td>
              </tr>
              <tr>
                <td><strong>1-Sample Mean (t)</strong></td>
                <td>\\(H_0: \\mu = \\mu_0\\)</td>
                <td>\\(\\sigma\\) unknown AND small sample \\(n < 30\\)</td>
                <td>\\[t = \\frac{\\bar{x} - \\mu_0}{s / \\sqrt{n}}\\]</td>
                <td>Student's \\(t\\) with \\(df = n - 1\\)</td>
              </tr>
              <tr>
                <td><strong>2 Independent Means (Pooled t)</strong></td>
                <td>\\(H_0: \\mu_1 = \\mu_2\\)</td>
                <td>\\(\\sigma_1^2 = \\sigma_2^2\\) assumed equal, small samples</td>
                <td>\\[t = \\frac{\\bar{x}_1 - \\bar{x}_2}{s_p \\sqrt{\\frac{1}{n_1} + \\frac{1}{n_2}}}\\]</td>
                <td>Student's \\(t\\) with \\(df = n_1 + n_2 - 2\\)<br>\\(s_p^2 = \\frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1+n_2-2}\\)</td>
              </tr>
              <tr>
                <td><strong>Paired Sample Mean (t)</strong></td>
                <td>\\(H_0: \\mu_d = 0\\)</td>
                <td>Dependent / correlated pairs (before vs after), \\(d_i = x_i - y_i\\)</td>
                <td>\\[t = \\frac{\\bar{d}}{s_d / \\sqrt{n}}\\]</td>
                <td>Student's \\(t\\) with \\(df = n - 1\\)</td>
              </tr>
              <tr>
                <td><strong>1-Sample Proportion (Z)</strong></td>
                <td>\\(H_0: p = p_0\\)</td>
                <td>\\(np_0 \\ge 5, n(1-p_0) \\ge 5\\)</td>
                <td>\\[Z = \\frac{\\hat{p} - p_0}{\\sqrt{p_0(1-p_0)/n}}\\]</td>
                <td>Standard Normal \\(N(0, 1)\\)</td>
              </tr>
              <tr>
                <td><strong>1-Sample Variance (\\(\\chi^2\\))</strong></td>
                <td>\\(H_0: \\sigma^2 = \\sigma_0^2\\)</td>
                <td>Normal population</td>
                <td>\\[\\chi^2 = \\frac{(n - 1)s^2}{\\sigma_0^2}\\]</td>
                <td>Chi-Square with \\(df = n - 1\\)</td>
              </tr>
              <tr>
                <td><strong>2 Population Variances (F)</strong></td>
                <td>\\(H_0: \\sigma_1^2 = \\sigma_2^2\\)</td>
                <td>Normal populations, \\(s_1^2 > s_2^2\\)</td>
                <td>\\[F = \\frac{s_1^2}{s_2^2}\\]</td>
                <td>Snedecor's \\(F\\) with \\(df = (n_1-1, n_2-1)\\)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    handnotes: [
      {
        title: "Master Hypothesis Testing Reference Sheet",
        category: "Handnote Digest",
        content: `
          • Six Steps: (1) H0 & H1, (2) α level, (3) Test Statistic formula, (4) Critical Value / Rejection Region, (5) Calculate value from sample data, (6) Decision & Contextual Interpretation.
          • Simple Hypothesis: Completely specifies distribution (e.g. μ=25, σ^2=6).
          • Composite Hypothesis: Does not completely specify distribution (e.g. μ=25, σ^2 unknown).
          • Type I error: Reject H0 when true (P = α). Type II error: Accept H0 when false (P = β).
          • Power = 1 - β = P(Reject H0 | H1 is true).
          • Decision Rule (P-value): If p-value <= α, REJECT H0!
          • Two independent means (equal variance): s_p^2 = [(n1-1)s1^2 + (n2-1)s2^2] / (n1+n2-2); df = n1+n2-2.
          • Paired t-test: d_i = X_i - Y_i, t = d̄ / (s_d / √n), df = n-1.
        `
      }
    ],
    videos: [
      {
        title: "Hypothesis Testing and P-values Explained",
        channel: "StatQuest with Josh Starmer",
        videoId: "0oc49DyA3hU",
        duration: "11:15",
        summary: "Visual explanation of null vs alternative, test statistics, and how P-values determine decisions."
      },
      {
        title: "Student's t-test: Comparing Two Means",
        channel: "StatQuest with Josh Starmer",
        videoId: "pTmLQO7gqTg",
        duration: "12:50",
        summary: "Clear guide to when to use the t-test, degrees of freedom, and pooled vs unpooled variance."
      },
      {
        title: "Type I and Type II Errors Made Simple",
        channel: "The Organic Chemistry Tutor",
        videoId: "a_l991xUAOU",
        duration: "14:22",
        summary: "Detailed walkthrough of alpha, beta, power of the test, and courtroom decision analogies."
      }
    ],
    questions: [
      {
        id: "q5-1",
        marks: 2,
        difficulty: "Easy",
        title: "Define Simple vs Composite Hypothesis with Examples",
        question: "Define a simple hypothesis and a composite hypothesis. Provide a mathematical example of each for a normal population. [2 Marks]",
        solution: `
          <div class="answer-box">
            <ul>
              <li><strong>Simple Hypothesis:</strong> A hypothesis that completely specifies the underlying probability distribution of the population, leaving no unknown parameters.</li>
              <li><strong>Composite Hypothesis:</strong> A hypothesis that does not completely specify the distribution, leaving one or more parameters unknown or defined over an interval.</li>
            </ul>
            <p><strong>Examples for a Normal Population \\(N(\\mu, \\sigma^2)\\):</strong></p>
            <ul>
              <li><em>Simple:</em> \\(H_0: \\mu = 50, \\sigma^2 = 16\\) (Both parameters are specified; the normal PDF is completely determined).</li>
              <li><em>Composite:</em> \\(H_0: \\mu = 50\\) when \\(\\sigma^2\\) is unknown, or \\(H_1: \\mu > 50\\).</li>
            </ul>
          </div>
        `
      },
      {
        id: "q5-2",
        marks: 2,
        difficulty: "Easy",
        title: "Define Power of a Test and Level of Significance",
        question: "Define: (a) Level of significance of a test, and (b) Power of a test. State their mathematical expressions. [2 Marks]",
        solution: `
          <div class="answer-box">
            <ul>
              <li><strong>Level of Significance (\\(\\alpha\\)):</strong> The maximum allowable probability of committing a Type I error (rejecting \\(H_0\\) when \\(H_0\\) is true). Also called the <em>size of the test</em>.<br>
              \\[\\alpha = P(\\text{Reject } H_0 \\mid H_0 \\text{ is true}) = P(x \\in w \\mid H_0)\\]
              </li>
              <li><strong>Power of a Test (\\(1 - \\beta\\)):</strong> The probability of correctly rejecting the null hypothesis when it is false (i.e. when alternative \\(H_1\\) is true).<br>
              \\[\\text{Power} = 1 - \\beta = P(\\text{Reject } H_0 \\mid H_1 \\text{ is true}) = P(x \\in w \\mid H_1)\\]
              </li>
            </ul>
          </div>
        `
      },
      {
        id: "q5-3",
        marks: 5,
        difficulty: "Medium",
        title: "One-Sample t-Test on Remote Village Schooling (Handout Example)",
        question: "A national education survey reports that children in Bangladesh complete an average of \\(\\mu_0 = 6\\) years of schooling. A development researcher believes a remote char village has a different schooling level. In a random sample of \\(n = 25\\) young adults from the village, the sample mean is \\(\\bar{x} = 5.4\\) years with a sample standard deviation \\(s = 1.2\\) years. At the \\(\\alpha = 0.05\\) significance level, test whether schooling in the village differs significantly from the national average. (Given \\(t_{0.025, 24} = 2.064\\)). [5 Marks]",
        solution: `
          <div class="answer-box">
            <p><strong>Step 1: State Hypotheses:</strong></p>
            <ul>
              <li>\\(H_0: \\mu = 6\\) (Average schooling in village equals national average)</li>
              <li>\\(H_1: \\mu \\ne 6\\) (Average schooling differs from national average; two-tailed test)</li>
            </ul>

            <p><strong>Step 2: Level of Significance:</strong> \\(\\alpha = 0.05\\).</p>

            <p><strong>Step 3: Test Statistic:</strong><br>
            Since population standard deviation \\(\\sigma\\) is unknown and sample size \\(n = 25 < 30\\), we use the one-sample \\(t\\)-test:</p>
            \\[t = \\frac{\\bar{x} - \\mu_0}{s / \\sqrt{n}} = \\frac{5.4 - 6.0}{1.2 / \\sqrt{25}} = \\frac{-0.6}{1.2 / 5} = \\frac{-0.6}{0.24} = -2.50\\]

            <p><strong>Step 4: Degrees of Freedom & Critical Value:</strong><br>
            \\(df = n - 1 = 25 - 1 = 24\\).<br>
            For a two-tailed test at \\(\\alpha = 0.05\\), critical values are \\(\\pm t_{0.025, 24} = \\pm 2.064\\).<br>
            Rejection Region: \\(t < -2.064\\) or \\(t > 2.064\\).</p>

            <p><strong>Step 5: Decision:</strong><br>
            Calculated \\(t = -2.50\\). Since \\(|-2.50| = 2.50 > 2.064\\), the test statistic falls in the critical rejection region.</p>

            <p><strong>Step 6: Policy Interpretation:</strong><br>
            We <strong>reject \\(H_0\\)</strong> at the 5% level of significance. There is statistically significant evidence that the average schooling in this remote village is significantly lower than the national standard of 6 years.</p>
          </div>
        `
      },
      {
        id: "q5-4",
        marks: 5,
        difficulty: "Medium",
        title: "Paired t-Test for Vocational Training Impact",
        question: `To evaluate a youth employment project, monthly wages (in thousand BDT) of 6 trainees before and after completion of a technical certification program were recorded:<br>
        Trainee: 1(10, 14), 2(12, 15), 3(9, 13), 4(15, 18), 5(11, 13), 6(13, 17).<br>
        At \\(\\alpha = 0.05\\), test whether the training program significantly increased trainees' earnings. (Given \\(t_{0.05, 5} = 2.015\\)). [5 Marks]`,
        solution: `
          <div class="answer-box">
            <p><strong>Step 1: State Hypotheses:</strong></p>
            <p>Let difference \\(d_i = \\text{After} - \\text{Before}\\):</p>
            <ul>
              <li>\\(H_0: \\mu_d = 0\\) (Training has no impact on earnings)</li>
              <li>\\(H_1: \\mu_d > 0\\) (Training increased earnings; right-tailed test)</li>
            </ul>

            <p><strong>Step 2: Calculate Differences (\\(d_i\\)):</strong></p>
            <ul>
              <li>Trainee 1: \\(14 - 10 = 4\\)</li>
              <li>Trainee 2: \\(15 - 12 = 3\\)</li>
              <li>Trainee 3: \\(13 - 9 = 4\\)</li>
              <li>Trainee 4: \\(18 - 15 = 3\\)</li>
              <li>Trainee 5: \\(13 - 11 = 2\\)</li>
              <li>Trainee 6: \\(17 - 13 = 4\\)</li>
            </ul>
            <p>\\(\\sum d_i = 4 + 3 + 4 + 3 + 2 + 4 = 20\\). Mean difference: \\(\\bar{d} = \\frac{20}{6} \\approx 3.333\\).</p>

            <p><strong>Step 3: Sample Standard Deviation of Differences (\\(s_d\\)):</strong></p>
            \\[\\sum (d_i - \\bar{d})^2 = (4-3.333)^2 + (3-3.333)^2 + (4-3.333)^2 + (3-3.333)^2 + (2-3.333)^2 + (4-3.333)^2\\]
            \\[= (0.667)^2 + (-0.333)^2 + (0.667)^2 + (-0.333)^2 + (-1.333)^2 + (0.667)^2\\]
            \\[= 0.445 + 0.111 + 0.445 + 0.111 + 1.777 + 0.445 = 3.334\\]
            \\[s_d = \\sqrt{\\frac{3.334}{6 - 1}} = \\sqrt{\\frac{3.334}{5}} = \\sqrt{0.6668} \\approx 0.8166\\]

            <p><strong>Step 4: Test Statistic:</strong></p>
            \\[t = \\frac{\\bar{d}}{s_d / \\sqrt{n}} = \\frac{3.333}{0.8166 / \\sqrt{6}} = \\frac{3.333}{0.8166 / 2.4495} = \\frac{3.333}{0.3334} \\approx 10.00\\]

            <p><strong>Step 5: Decision:</strong><br>
            For \\(df = 5\\) at \\(\\alpha = 0.05\\) (one-tailed), \\(t_{\\text{crit}} = 2.015\\).<br>
            Since \\(t_{\\text{calc}} = 10.00 \\gg 2.015\\), we <strong>reject \\(H_0\\)</strong>.</p>
            <p><strong>Conclusion:</strong> The technical certification program produced a highly statistically significant increase in monthly earnings.</p>
          </div>
        `
      },
      {
        id: "q5-5",
        marks: 10,
        difficulty: "Hard",
        title: "Theoretical & Numerical Mastery: Best Critical Region & Two-Sample Pooled Test",
        question: "(a) Define Best Critical Region (BCR) and state the Neyman-Pearson Lemma for testing a simple hypothesis against a simple alternative. [4 Marks]<br>(b) In a rural development experiment, agricultural yields (kg/decimal) were evaluated across two irrigation methods:<br>Method A: \\(n_1 = 11, \\bar{x}_1 = 48, s_1 = 6\\)<br>Method B: \\(n_2 = 13, \\bar{x}_2 = 42, s_2 = 5\\)<br>Assuming normal distributions with equal population variances (\\(\\sigma_1^2 = \\sigma_2^2\\)), test at \\(\\alpha = 0.01\\) whether Method A produces a significantly higher yield than Method B. (Given \\(t_{0.01, 22} = 2.508\\)). [6 Marks]",
        solution: `
          <div class="answer-box">
            <p><strong>Part (a): BCR and Neyman-Pearson Lemma:</strong></p>
            <p><strong>Definition of BCR:</strong> A critical region \\(w\\) of size \\(\\alpha\\) is called the <em>Best Critical Region (BCR)</em> for testing \\(H_0: \\theta = \\theta_0\\) vs \\(H_1: \\theta = \\theta_1\\) if for any other critical region \\(w_1\\) of size \\(\\alpha\\), the power of \\(w\\) is greater than or equal to the power of \\(w_1\\):
            \\[P(x \\in w \\mid H_1) \\ge P(x \\in w_1 \\mid H_1)\\]
            </p>

            <p><strong>The Neyman-Pearson Lemma:</strong><br>
            Let \\(x_1, \\dots, x_n\\) be a random sample from a probability density \\(f(x; \\theta)\\). Let \\(L_0 = \\prod f(x_i; \\theta_0)\\) and \\(L_1 = \\prod f(x_i; \\theta_1)\\) be the likelihood functions under \\(H_0\\) and \\(H_1\\). A critical region \\(w\\) of size \\(\\alpha\\) defined by the likelihood ratio:
            \\[w = \\left\\{ x : \\frac{L_1}{L_0} \\ge k \\right\\} \\quad \\text{or} \\quad \\left\\{ x : \\frac{L_0}{L_1} \\le k' \\right\\}\\]
            where \\(k\\) is chosen such that \\(P(x \\in w \\mid H_0) = \\alpha\\), is the <strong>Most Powerful (MP)</strong> critical region of size \\(\\alpha\\) for testing \\(H_0\\) against \\(H_1\\).</p>

            <hr>
            <p><strong>Part (b): Two-Sample Pooled t-Test:</strong></p>
            <p><strong>Step 1: State Hypotheses:</strong></p>
            <ul>
              <li>\\(H_0: \\mu_1 = \\mu_2\\) (Irrigation methods produce equal yield)</li>
              <li>\\(H_1: \\mu_1 > \\mu_2\\) (Method A produces higher yield; right-tailed test)</li>
            </ul>

            <p><strong>Step 2: Pooled Sample Variance (\\(s_p^2\\)):</strong></p>
            \\[s_p^2 = \\frac{(n_1 - 1)s_1^2 + (n_2 - 1)s_2^2}{n_1 + n_2 - 2} = \\frac{(11 - 1)(6)^2 + (13 - 1)(5)^2}{11 + 13 - 2} = \\frac{10(36) + 12(25)}{22} = \\frac{360 + 300}{22} = \\frac{660}{22} = 30.0\\]
            \\[s_p = \\sqrt{30.0} \\approx 5.477\\]

            <p><strong>Step 3: Test Statistic:</strong></p>
            \\[t = \\frac{\\bar{x}_1 - \\bar{x}_2}{s_p \\sqrt{\\frac{1}{n_1} + \\frac{1}{n_2}}} = \\frac{48 - 42}{5.477 \\sqrt{\\frac{1}{11} + \\frac{1}{13}}} = \\frac{6}{5.477 \\sqrt{0.0909 + 0.0769}} = \\frac{6}{5.477 \\sqrt{0.1678}} = \\frac{6}{5.477 \\times 0.4096} = \\frac{6}{2.2435} \\approx 2.67\\]

            <p><strong>Step 4: Degrees of Freedom & Critical Value:</strong><br>
            \\(df = n_1 + n_2 - 2 = 22\\).<br>
            At \\(\\alpha = 0.01\\) (right-tailed), critical \\(t = +2.508\\).</p>

            <p><strong>Step 5: Decision & Conclusion:</strong><br>
            Calculated \\(t = 2.67 > 2.508\\). Reject \\(H_0\\).<br>
            <strong>Conclusion:</strong> At the 1% significance level, there is overwhelming statistical evidence that Irrigation Method A produces a significantly higher yield than Method B.</p>
          </div>
        `
      }
    ]
  },

  {
    id: 6,
    section: "Section B",
    title: "Estimation and Sample Size Determination",
    code: "STAT 2251 - CH06",
    subtitle: "Point vs Interval Estimation, 4 Goodness Criteria, Confidence Intervals & Sample Size Formulas",
    overview: "Estimating unknown population truths from sample evidence. This chapter establishes the four classical criteria of a good estimator (unbiasedness, consistency, efficiency, sufficiency), constructs two-sided confidence intervals for means and proportions, and provides the exact mathematical formulas for determining sample size.",
    readTime: "25 min read",
    topics: [
      { id: "6-1", title: "6.1 Point Estimation vs Interval Estimation" },
      { id: "6-2", title: "6.2 Four Criteria of a Good Estimator (Unbiasedness, Consistency, Efficiency, Sufficiency)" },
      { id: "6-3", title: "6.3 Confidence Intervals for the Mean (Z vs t)" },
      { id: "6-4", title: "6.4 Confidence Intervals for Population Proportion" },
      { id: "6-5", title: "6.5 Determination of Minimum Sample Size (for Mean & Proportion)" }
    ],
    explanation: `
      <div class="content-section">
        <h3>6.1 Point Estimation vs Interval Estimation</h3>
        <p class="lead-text">
          In policy making, we rarely know the exact population parameter \\(\\theta\\) (e.g. true poverty rate). <strong>Estimation</strong> is the process of using sample statistics to infer plausible values of \\(\\theta\\).
        </p>

        <div class="grid-2">
          <div class="card-mini">
            <h4>Point Estimation</h4>
            <p>Calculates a <strong>single numerical value</strong> from sample data to serve as the best guess for the unknown parameter.</p>
            <p><em>Example: \\(\\bar{x} = 160\\text{ cm}\\) as the point estimate of national average height.</em></p>
            <p><strong>Limitation:</strong> It gives zero information regarding its degree of reliability or potential margin of error.</p>
          </div>
          <div class="card-mini">
            <h4>Interval Estimation (Confidence Interval)</h4>
            <p>Constructs a <strong>range of numbers \\([L, U]\\)</strong> accompanied by a specified probability \\(1 - \\alpha\\) (e.g. 95%) that the true parameter is captured within that interval.</p>
            <p><em>Example: "We are 95% confident that average household income is between 18,500 and 21,200 BDT."</em></p>
          </div>
        </div>
      </div>

      <div class="content-section">
        <h3>6.2 Four Criteria of a Good Estimator (Essential Exam Question!)</h3>
        <p>In theoretical examinations, you must explain the four criteria established by R.A. Fisher:</p>

        <div class="timeline-box">
          <div class="timeline-item">
            <h4>1. Unbiasedness</h4>
            <p>An estimator \\(\\hat{\\theta}\\) is unbiased if its expected value across all possible samples equals the true parameter:</p>
            \\[E(\\hat{\\theta}) = \\theta\\]
            <p><em>Example: \\(E(\\bar{x}) = \\mu\\). However, the unadjusted sample variance \\(S^2 = \\frac{1}{n}\\sum(x_i-\\bar{x})^2\\) is biased (underestimates \\(\\sigma^2\\)); dividing by \\(n-1\\) gives the unbiased estimator \\(s^2\\).</em></p>
          </div>

          <div class="timeline-item">
            <h4>2. Consistency</h4>
            <p>As sample size \\(n\\) approaches infinity, the estimator converges in probability to the true parameter value:</p>
            \\[\\lim_{n \\to \\infty} P(|\\hat{\\theta}_n - \\theta| < \\varepsilon) = 1 \\quad \\text{for any } \\varepsilon > 0\\]
            <p><em>Conditions: Sufficient condition for consistency is \\(\\lim_{n \\to \\infty} E(\\hat{\\theta}_n) = \\theta\\) and \\(\\lim_{n \\to \\infty} \\text{Var}(\\hat{\\theta}_n) = 0\\).</em></p>
          </div>

          <div class="timeline-item">
            <h4>3. Efficiency</h4>
            <p>Among all unbiased estimators of \\(\\theta\\), the one with the <strong>smallest variance</strong> is called the most efficient estimator (Minimum Variance Unbiased Estimator - MVUE). Attains the <em>Cramér-Rao Lower Bound (CRLB)</em>.</p>
          </div>

          <div class="timeline-item">
            <h4>4. Sufficiency</h4>
            <p>An estimator \\(\\hat{\\theta}\\) is sufficient if it extracts and utilizes <strong>all the information</strong> concerning the parameter \\(\\theta\\) contained in the sample data (no other statistic calculated from the same sample can provide additional information about \\(\\theta\\)). Verified via the <em>Neyman-Fisher Factorization Theorem</em>.</p>
          </div>
        </div>
      </div>

      <div class="content-section">
        <h3>6.3 Confidence Intervals for the Population Mean</h3>
        <div class="grid-2">
          <div class="formula-box">
            <strong>Case A: \\(\\sigma\\) Known OR Large Sample (\\(n \\ge 30\\))</strong>
            \\[\\bar{x} \\pm Z_{\\alpha/2} \\cdot \\frac{\\sigma}{\\sqrt{n}}\\]
            <p>Critical Z-values: 90% CI: \\(Z = 1.645\\); 95% CI: \\(Z = 1.960\\); 99% CI: \\(Z = 2.576\\).</p>
          </div>
          <div class="formula-box">
            <strong>Case B: \\(\\sigma\\) Unknown AND Small Sample (\\(n < 30\\))</strong>
            \\[\\bar{x} \\pm t_{\\alpha/2, n-1} \\cdot \\frac{s}{\\sqrt{n}}\\]
            <p>Requires population to be approximately normally distributed.</p>
          </div>
        </div>
      </div>

      <div class="content-section">
        <h3>6.4 Confidence Interval for Population Proportion</h3>
        <p>For estimating the percentage of citizens in poverty, immunized, or adopting solar power:</p>
        <div class="formula-box">
          \\[\\hat{p} \\pm Z_{\\alpha/2} \\cdot \\sqrt{\\frac{\\hat{p}(1 - \\hat{p})}{n}}\\]
        </div>
      </div>

      <div class="content-section">
        <h3>6.5 Determination of Minimum Sample Size</h3>
        <p>How many respondents must a development agency survey to achieve a desired margin of error \\(E\\)?</p>

        <div class="grid-2">
          <div class="card-mini">
            <h4>Sample Size for Estimating Mean (\\(\\mu\\))</h4>
            <div class="formula-box">
              \\[n = \\left( \\frac{Z_{\\alpha/2} \\cdot \\sigma}{E} \\right)^2\\]
            </div>
            <p><em>Always round \\(n\\) UP to the next integer!</em></p>
          </div>

          <div class="card-mini">
            <h4>Sample Size for Estimating Proportion (\\(p\\))</h4>
            <div class="formula-box">
              \\[n = \\frac{Z_{\\alpha/2}^2 \\cdot p(1 - p)}{E^2}\\]
            </div>
            <p><em>Conservative Rule: If \\(p\\) is completely unknown, use \\(p = 0.50\\) to obtain the maximum required sample size.</em></p>
          </div>
        </div>
      </div>
    `,
    handnotes: [
      {
        title: "Estimation & Sample Size Formula Card",
        category: "Handnote Digest",
        content: `
          • 4 Criteria: Unbiasedness E(θ̂) = θ; Consistency Var(θ̂) -> 0 as n -> ∞; Efficiency (lowest variance); Sufficiency (Neyman factorization).
          • 95% CI for Mean: x̄ ± 1.96 * (σ / √n)  [or t_0.025 * s/√n]
          • 95% CI for Proportion: p̂ ± 1.96 * √[p̂(1-p̂)/n]
          • Sample Size (Mean): n = [ (Z_α/2 * σ) / E ]^2
          • Sample Size (Proportion): n = [ Z_α/2^2 * p(1-p) ] / E^2. (Use p=0.5 if unknown)
        `
      }
    ],
    videos: [
      {
        title: "Confidence Intervals, Clearly Explained",
        channel: "StatQuest with Josh Starmer",
        videoId: "TqOeMYtOc1w",
        duration: "11:20",
        summary: "Visual guide to what a confidence interval actually means, how margin of error works, and why 95% is standard."
      },
      {
        title: "Confidence Interval for a Population Mean",
        channel: "Khan Academy",
        videoId: "23Ubf1DkW18",
        duration: "10:45",
        summary: "Step-by-step example constructing confidence intervals using sample means, standard deviation, and Z-scores."
      },
      {
        title: "How to Determine Required Sample Size",
        channel: "zedstatistics",
        videoId: "b_f4R6V_aXk",
        duration: "9:50",
        summary: "Derives the sample size formulas for both means and proportions given an acceptable margin of error."
      }
    ],
    questions: [
      {
        id: "q6-1",
        marks: 2,
        difficulty: "Easy",
        title: "Define Point and Interval Estimation with Development Examples",
        question: "Define point estimation and interval estimation. Give one practical example of each in the context of Development Studies. [2 Marks]",
        solution: `
          <div class="answer-box">
            <ul>
              <li><strong>Point Estimation:</strong> A single numerical statistic calculated from sample data that serves as the best point estimate of an unknown population parameter.<br>
              <em>Development Example:</em> Estimating the national child stunting rate to be exactly 28.4% based on a sample of 2,000 children.</li>
              <li><strong>Interval Estimation:</strong> A range between two values \\([L, U]\\) within which the true parameter is expected to lie with a specified degree of confidence (e.g. 95%).<br>
              <em>Development Example:</em> Estimating with 95% confidence that the national child stunting rate lies between 26.5% and 30.3%.</li>
            </ul>
          </div>
        `
      },
      {
        id: "q6-2",
        marks: 2,
        difficulty: "Easy",
        title: "State the Four Criteria of a Good Estimator",
        question: "List and briefly explain the four classical criteria of a good estimator established by R.A. Fisher. [2 Marks]",
        solution: `
          <div class="answer-box">
            <ol>
              <li><strong>Unbiasedness:</strong> The expected value of the estimator equals the true parameter: \\(E(\\hat{\\theta}) = \\theta\\).</li>
              <li><strong>Consistency:</strong> The estimator converges in probability to the true parameter as sample size approaches infinity: \\(\\lim_{n\\to\\infty} P(|\\hat{\\theta}_n - \\theta| < \\varepsilon) = 1\\).</li>
              <li><strong>Efficiency:</strong> The estimator possesses the minimum possible variance among all competing unbiased estimators.</li>
              <li><strong>Sufficiency:</strong> The estimator encapsulates all sample information concerning the parameter, so no other statistic adds additional knowledge.</li>
            </ol>
          </div>
        `
      },
      {
        id: "q6-3",
        marks: 5,
        difficulty: "Medium",
        title: "Construct 95% Confidence Interval for Household Expenditure",
        question: "A random sample of \\(n = 64\\) households in a low-income urban settlement yields a mean monthly expenditure of \\(\\bar{x} = 18,200\\text{ BDT}\\) with a sample standard deviation \\(s = 2,400\\text{ BDT}\\). Construct and interpret a 95% confidence interval for the true mean monthly household expenditure. [5 Marks]",
        solution: `
          <div class="answer-box">
            <p><strong>Given:</strong> \\(n = 64 \\ge 30\\) (large sample, CLT applies), \\(\\bar{x} = 18,200\\text{ BDT}\\), \\(s = 2,400\\text{ BDT}\\), confidence level \\(1 - \\alpha = 0.95 \\implies Z_{\\alpha/2} = 1.960\\).</p>

            <p><strong>Step 1: Standard Error of the Mean:</strong></p>
            \\[SE(\\bar{x}) = \\frac{s}{\\sqrt{n}} = \\frac{2400}{\\sqrt{64}} = \\frac{2400}{8} = 300\\text{ BDT}\\]

            <p><strong>Step 2: Margin of Error (\\(E\\)):</strong></p>
            \\[E = Z_{\\alpha/2} \\cdot SE = 1.960 \\times 300 = 588\\text{ BDT}\\]

            <p><strong>Step 3: Confidence Interval Limits:</strong></p>
            \\[\\text{Lower Limit } L = \\bar{x} - E = 18,200 - 588 = 17,612\\text{ BDT}\\]
            \\[\\text{Upper Limit } U = \\bar{x} + E = 18,200 + 588 = 18,788\\text{ BDT}\\]
            \\[17,612 \\le \\mu \\le 18,788\\text{ BDT}\\]

            <p><strong>Interpretation:</strong> We are 95% confident that the true population mean monthly expenditure of all households in this settlement lies between <strong>17,612 BDT and 18,788 BDT</strong>.</p>
          </div>
        `
      },
      {
        id: "q6-4",
        marks: 5,
        difficulty: "Medium",
        title: "Sample Size Determination for Development Impact Assessment",
        question: "A microfinance bank wishes to estimate the proportion of women clients who successfully expanded their business. The bank desires to be 95% confident that the sample estimate is within \\(\\pm 3\\%\\) (0.03) of the true population proportion.<br>(a) What sample size is required if past data suggests the true proportion is approximately 60%?<br>(b) What sample size must be drawn if no prior estimate exists? [5 Marks]",
        solution: `
          <div class="answer-box">
            <p><strong>Given:</strong> Desired confidence = 95% \\(\\implies Z_{\\alpha/2} = 1.96\\); Margin of error \\(E = 0.03\\).</p>

            <p><strong>(a) When prior estimate \\(p = 0.60\\) is available:</strong></p>
            \\[n = \\frac{Z_{\\alpha/2}^2 \\cdot p(1 - p)}{E^2} = \\frac{(1.96)^2 \\cdot (0.60)(0.40)}{(0.03)^2} = \\frac{3.8416 \\times 0.24}{0.0009} = \\frac{0.92198}{0.0009} \\approx 1024.42\\]
            <p>Rounding up to the next integer: <strong>\\(n = 1,025\\) clients</strong>.</p>

            <p><strong>(b) When no prior estimate exists (Conservative Maximum Sample Size):</strong><br>
            Set \\(p = 0.50\\):</p>
            \\[n = \\frac{(1.96)^2 \\cdot (0.50)(0.50)}{(0.03)^2} = \\frac{3.8416 \\times 0.25}{0.0009} = \\frac{0.9604}{0.0009} \\approx 1067.11\\]
            <p>Rounding up: <strong>\\(n = 1,068\\) clients</strong>.</p>
            <p><strong>Note:</strong> Assuming \\(p = 0.50\\) guarantees the confidence interval will be no wider than \\(\\pm 0.03\\) under the worst-case variance scenario.</p>
          </div>
        `
      },
      {
        id: "q6-5",
        marks: 10,
        difficulty: "Hard",
        title: "Critical Analytical Problem: Unbiasedness Proof, CRLB & Confidence Interval",
        question: "(a) Prove that the sample mean \\(\\bar{x} = \\frac{1}{n}\\sum X_i\\) is an unbiased and consistent estimator of the population mean \\(\\mu\\). [4 Marks]<br>(b) A development NGO assesses daily wage rates for rural agricultural laborers. A preliminary survey of 10 workers yields: \\(\\bar{x} = 450\\text{ BDT}\\) and \\(s = 40\\text{ BDT}\\). Construct a 95% confidence interval for the true mean wage. (Given \\(t_{0.025, 9} = 2.262\\)). [3 Marks]<br>(c) The donor agency mandates that the final evaluation estimate the average daily wage within a precision margin of \\(\\pm 5\\text{ BDT}\\) with 99% confidence. Assuming \\(\\sigma \\approx 40\\text{ BDT}\\), calculate the required sample size. Discuss the budget and logistical trade-offs in development survey fieldwork. [3 Marks]",
        solution: `
          <div class="answer-box">
            <p><strong>Part (a): Mathematical Proof of Unbiasedness and Consistency:</strong></p>
            <p><strong>1. Proof of Unbiasedness:</strong><br>
            Let \\(X_1, X_2, \\dots, X_n\\) be independent random variables from a population with mean \\(\\mu\\) and variance \\(\\sigma^2\\):</p>
            \\[E(\\bar{x}) = E\\left(\\frac{1}{n}\\sum_{i=1}^n X_i\\right) = \\frac{1}{n} \\sum_{i=1}^n E(X_i) = \\frac{1}{n} (n \\mu) = \\mu\\]
            <p>Since \\(E(\\bar{x}) = \\mu\\), \\(\\bar{x}\\) is an <strong>unbiased estimator</strong> of \\(\\mu\\).</p>

            <p><strong>2. Proof of Consistency:</strong><br>
            Calculate the variance of \\(\\bar{x}\\):</p>
            \\[\\text{Var}(\\bar{x}) = \\text{Var}\\left(\\frac{1}{n}\\sum X_i\\right) = \\frac{1}{n^2} \\sum \\text{Var}(X_i) = \\frac{n\\sigma^2}{n^2} = \\frac{\\sigma^2}{n}\\]
            <p>By Chebyshev's inequality, for any arbitrary \\(\\varepsilon > 0\\):</p>
            \\[P(|\\bar{x} - \\mu| \\ge \\varepsilon) \\le \\frac{\\text{Var}(\\bar{x})}{\\varepsilon^2} = \\frac{\\sigma^2}{n\\varepsilon^2}\\]
            <p>Taking the limit as \\(n \\to \\infty\\):</p>
            \\[\\lim_{n \\to \\infty} \\frac{\\sigma^2}{n\\varepsilon^2} = 0 \\implies \\lim_{n \\to \\infty} P(|\\bar{x} - \\mu| < \\varepsilon) = 1\\]
            <p>Thus, \\(\\bar{x}\\) converges in probability to \\(\\mu\\), proving <strong>consistency</strong>.</p>

            <hr>
            <p><strong>Part (b): 95% Confidence Interval for Small Sample (\\(n = 10 < 30\\)):</strong></p>
            \\[\\text{CI} = \\bar{x} \\pm t_{\\alpha/2, n-1} \\cdot \\frac{s}{\\sqrt{n}} = 450 \\pm 2.262 \\cdot \\frac{40}{\\sqrt{10}} = 450 \\pm 2.262(12.649) = 450 \\pm 28.61\\text{ BDT}\\]
            \\[421.39\\text{ BDT} \\le \\mu \\le 478.61\\text{ BDT}\\]

            <hr>
            <p><strong>Part (c): Sample Size for 99% Confidence and \\(E = \\pm 5\\text{ BDT}\\):</strong></p>
            <p>At 99% confidence, \\(Z_{\\alpha/2} = 2.576\\). Margin of error \\(E = 5\\), \\(\\sigma = 40\\):</p>
            \\[n = \\left( \\frac{Z_{\\alpha/2} \\cdot \\sigma}{E} \\right)^2 = \\left( \\frac{2.576 \\times 40}{5} \\right)^2 = (20.608)^2 \\approx 424.69\\]
            <p>Required sample size: <strong>\\(n = 425\\) agricultural laborers</strong>.</p>

            <p><strong>Development Fieldwork Trade-off Discussion:</strong><br>
            Achieving a narrow \\(\\pm 5\\text{ BDT}\\) precision requires scaling up the sample from 10 to 425 respondents — a 42-fold increase in fieldwork size! In rural Bangladesh, surveying 425 dispersed agricultural laborers substantially increases transportation costs, enumerator daily stipends, data auditing expenses, and risks higher non-sampling error (respondent fatigue and missed call-backs). A development planner must weigh whether the extra \\(\\pm 23\\text{ BDT}\\) precision justifies the exponential financial budget.</p>
          </div>
        `
      }
    ]
  }
];
